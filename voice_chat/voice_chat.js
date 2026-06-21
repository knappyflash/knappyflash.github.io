const pageTitle = "Voice Chat";
window.addEventListener("load", function () {
    console.log(pageTitle + " Page is loaded");
    changeTitle();
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

    // Configuration
    const config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };

    // State
    let pc = null;
    let dataChannel = null;
    let isInitiator = false;

    // Elements
    const localSDP = document.getElementById('localSDP');
    const remoteSDP = document.getElementById('remoteSDP');
    const createOfferBtn = document.getElementById('createOffer');
    const createAnswerBtn = document.getElementById('createAnswer');
    const setRemoteBtn = document.getElementById('setRemote');
    const copyLocalBtn = document.getElementById('copyLocal');
    const pasteRemoteBtn = document.getElementById('pasteRemote');
    const chatLog = document.getElementById('chatLog');
    const msgInput = document.getElementById('msg');
    const sendBtn = document.getElementById('send');
    const stateEl = document.getElementById('state');

    function log(s) {
      const line = document.createElement('div');
      line.textContent = s;
      chatLog.appendChild(line);
      chatLog.scrollTop = chatLog.scrollHeight;
    }

    function setState(s) {
      stateEl.textContent = s;
    }

    function makePeerConnection() {
      pc = new RTCPeerConnection(config);
      setState('pc created');

      // When remote creates a data channel (answerer side)
      pc.ondatachannel = (ev) => {
        dataChannel = ev.channel;
        setupDataChannel();
      };

      pc.oniceconnectionstatechange = () => {
        setState(pc.iceConnectionState);
      };

      // Collect ICE and wait until gathering is complete
      pc.onicecandidate = (ev) => {
        if (!ev.candidate) {
          // ICE gathering finished — publish local description
          localSDP.value = JSON.stringify(pc.localDescription);
          setState('ice-gathering-complete');
        }
      };
    }

    function setupDataChannel() {
      dataChannel.onopen = () => {
        log('[system] datachannel open');
        sendBtn.disabled = false;
        msgInput.disabled = false;
        setState('connected');
      };
      dataChannel.onclose = () => {
        log('[system] datachannel closed');
        sendBtn.disabled = true;
        msgInput.disabled = true;
        setState('closed');
      };
      dataChannel.onmessage = (ev) => {
        log('Peer: ' + ev.data);
      };
      dataChannel.onerror = (err) => {
        console.error('DC error', err);
      };
    }

    // Initiator flow
    createOfferBtn.onclick = async () => {
      isInitiator = true;
      makePeerConnection();
      // create data channel as initiator
      dataChannel = pc.createDataChannel('chat');
      setupDataChannel();

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      setState('offer created, gathering ICE');
      // localSDP will be filled when onicecandidate sees null candidate
    };

    // Answerer flow helper (create answer after remote offer is set)
    createAnswerBtn.onclick = async () => {
      if (!pc) makePeerConnection();
      // createAnswer is triggered after remote offer is set in setRemote handler
      // This button is shown only for clarity if you want to explicitly create answer
      try {
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        setState('answer created, gathering ICE');
      } catch (e) {
        console.error(e);
      }
    };

    // Set remote SDP (works for both sides)
    setRemoteBtn.onclick = async () => {
      const text = remoteSDP.value.trim();
      if (!text) return alert('Paste remote SDP first');
      let desc;
      try {
        desc = JSON.parse(text);
      } catch (e) {
        return alert('Invalid JSON SDP');
      }

      // If we don't have a pc yet, create one (answerer case)
      if (!pc) makePeerConnection();

      try {
        await pc.setRemoteDescription(desc);
        setState('remote description set');

        if (desc.type === 'offer') {
          // We're the answerer: create answer and wait for ICE
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          setState('answer created, gathering ICE');
          // localSDP will be filled when ICE gathering completes
        } else if (desc.type === 'answer') {
          // Initiator receives answer; connection should complete after ICE
          setState('answer received');
        }
      } catch (err) {
        console.error(err);
        alert('Failed to set remote description: ' + err);
      }
    };

    // Copy local SDP to clipboard
    copyLocalBtn.onclick = async () => {
      if (!localSDP.value) return alert('No local SDP yet');
      try {
        await navigator.clipboard.writeText(localSDP.value);
        alert('Local SDP copied to clipboard');
      } catch (e) {
        alert('Copy failed: ' + e);
      }
    };

    // Paste remote from clipboard
    pasteRemoteBtn.onclick = async () => {
      try {
        const txt = await navigator.clipboard.readText();
        remoteSDP.value = txt;
      } catch (e) {
        alert('Paste failed: ' + e);
      }
    };

    // Send message
    sendBtn.onclick = () => {
      const text = msgInput.value.trim();
      if (!text || !dataChannel || dataChannel.readyState !== 'open') return;
      dataChannel.send(text);
      log('You: ' + text);
      msgInput.value = '';
    };

    // Allow Enter to send
    msgInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendBtn.click();
      }
    });

    // Optional: show createAnswer button when remote offer is pasted (UX)
    remoteSDP.addEventListener('input', () => {
      try {
        const parsed = JSON.parse(remoteSDP.value || '{}');
        if (parsed.type === 'offer') {
          createAnswerBtn.style.display = 'inline-block';
        } else {
          createAnswerBtn.style.display = 'none';
        }
      } catch (e) {
        createAnswerBtn.style.display = 'none';
      }
    });



    let localStream = null;
    let audioSender = null;
    const remoteAudio = document.getElementById('remoteAudio');

    async function startVoice() {
      if (localStream) return;
      try {
        localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // If pc exists, add track now; otherwise add before creating offer
        if (!pc) makePeerConnection();
        audioSender = pc.addTrack(localStream.getAudioTracks()[0], localStream);
        document.getElementById('stopVoice').disabled = false;
        document.getElementById('muteVoice').disabled = false;
        log('[system] microphone started');
      } catch (e) {
        alert('Microphone access denied or unavailable: ' + e);
      }
    }

    function stopVoice() {
      if (!localStream) return;
      localStream.getTracks().forEach(t => t.stop());
      localStream = null;
      if (audioSender) {
        pc.removeTrack(audioSender);
        audioSender = null;
      }
      document.getElementById('stopVoice').disabled = true;
      document.getElementById('muteVoice').disabled = true;
      log('[system] microphone stopped');
    }

    function toggleMute() {
      if (!localStream) return;
      const track = localStream.getAudioTracks()[0];
      track.enabled = !track.enabled;
      document.getElementById('muteVoice').textContent = track.enabled ? 'Mute' : 'Unmute';
      log('[system] microphone ' + (track.enabled ? 'unmuted' : 'muted'));
    }

    // When remote tracks arrive, attach to audio element
    pc && (pc.ontrack = (ev) => {
      // attach first audio track
      remoteAudio.srcObject = ev.streams[0];
    });



    // Initialize UI state
    setState('idle');
    sendBtn.disabled = true;
    msgInput.disabled = true;