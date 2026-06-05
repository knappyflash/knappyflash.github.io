import Files from "./MidiList.js";
import PlayerMidi from "./PlayerMidi.js";

const player = document.getElementById("midiPlayer");
const list = document.getElementById("fileList");
const fileNameDisplay = document.getElementById("fileNameDisplay");
const autoPlayButton = document.getElementById("autoPlayButton");
const randomizeTrackseButton = document.getElementById("randomizeTrackseButton");
let midiCounter = 0;

autoPlayButton.addEventListener("click", ToggleAutoPlay);



PlayerMidi.files.forEach(file => {
  const li = document.createElement("li");
  li.textContent = file;
  li.onclick = () => {
    PlaySong(file);
    player.src = "midi_files/" + file;
  };
  list.appendChild(li);
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


document.querySelector("midi-player").addEventListener("load", e => {
  const p = e.target.player;
  const orig = p.stop.bind(p);
  p.stop = () => {
    // call original stop FIRST
    orig();
    if (randomizeTrackseButton.textContent=="Randomize is On"){
      midiCounter = Math.floor(Math.random() * PlayerMidi.files.length);
    }else{
      // move to next
      for (let i = 0; i < PlayerMidi.files.length-1; i++) {
        console.log("dispayName: " + fileNameDisplay.textContent + " file: " + PlayerMidi.files[i]);
        if (PlayerMidi.files[i] == fileNameDisplay.textContent){
          midiCounter=i;
          break;
        }
      }
      midiCounter++;
      if (midiCounter >= PlayerMidi.files.length) {
        midiCounter = 0;
      }
    }
    // start next after a tiny delay (ensures clean reset)
    setTimeout(() => {
      if (autoPlayButton.textContent=="Auto Play is On"){
        PlaySong(PlayerMidi.files[midiCounter]);
      }
      
    }, 100);
  };
});

function PlaySong(midiName){
  player.src = "midi_files/" + midiName;
  fileNameDisplay.textContent=midiName;
  const fileName = document.createElement("li");
  sleep(1000).then(() => {
      player.start();
  });
}

function ToggleAutoPlay(){
  if (autoPlayButton.textContent=="Auto Play is On"){
    autoPlayButton.textContent="Auto Play is Off";
  } else{
    autoPlayButton.textContent="Auto Play is On";
  }
}

function RandomizeTracks(){
  if (randomizeTrackseButton.textContent=="Randomize is On"){
    randomizeTrackseButton.textContent="Randomize is Off";
  } else{
    randomizeTrackseButton.textContent="Randomize is On";
  }
}