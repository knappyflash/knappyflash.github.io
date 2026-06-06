import midifiles from "./midi_list.js";

const midiUlList = document.getElementById("midiUlList");
const midiPlayer = document.getElementById("midiPlayer");
const fileNameDisplay = document.getElementById("fileNameDisplay");
const autoPlayButton = document.getElementById("autoPlayButton");
const randomizeButton = document.getElementById("randomizeButton");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

let canAutoPlay = false;
let canRandomize = false;

let previousSongId = 0;
let currentSongId = 0;
let nextSongId = 0;

autoPlayButton.addEventListener("click", ToggleAutoPlay);
randomizeButton.addEventListener("click", ToggleRandomize);
previousButton.addEventListener("click", ClickPrevious);
nextButton.addEventListener("click", ClickNext);
midiPlayer.addEventListener("stop", onMidiStopped);

const pageTitle = "Midi Player";
window.addEventListener("load", function () {
    console.log(pageTitle + " Page is loaded");
    changeTitle();
    previousSongId = Number(localStorage.getItem("previousSongId")) || 0;
    currentSongId  = Number(localStorage.getItem("currentSongId"))  || 0;
    nextSongId     = Number(localStorage.getItem("nextSongId"))     || 0;
    canAutoPlay  = localStorage.getItem("canAutoPlay") === "true";
    canRandomize = localStorage.getItem("canRandomize") === "true";
    autoPlayButton.textContent  = canAutoPlay  ? "Auto Play is On" : "Auto Play is Off";
    randomizeButton.textContent = canRandomize ? "Randomize is On" : "Randomize is Off";
    PlaySong(midifiles[currentSongId]);
    if (canAutoPlay) {
        startTimer();
    }
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

midifiles.forEach(function AddMidiToList(midiFile){
    const myli = document.createElement("li");
    myli.textContent = midiFile;
    myli.onclick = () => {
        PlaySong(midiFile);
    };
    midiUlList.appendChild(myli);
});

function ClickPrevious(){
    PlaySong(midifiles[previousSongId]);
}

function ClickNext(){
    PlaySong(midifiles[nextSongId]);
}

function ToggleAutoPlay(){
    if (canAutoPlay){
        canAutoPlay = false;
        autoPlayButton.textContent="Auto Play is Off";
    } else{
        canAutoPlay = true;
        autoPlayButton.textContent="Auto Play is On";
        startTimer();
    }
    localStorage.setItem("canAutoPlay", canAutoPlay);
}

function ToggleRandomize(){
    if (canRandomize){
        canRandomize = false;
        randomizeButton.textContent="Randomize is Off";
    } else{
        canRandomize = true;
        randomizeButton.textContent="Randomize is On";
        UpdateMidiIds();
    }
    localStorage.setItem("canRandomize", canRandomize);
}

async function PlaySong(midiName){
  midiPlayer.src = "midi_files/" + midiName;
  fileNameDisplay.textContent=midiName;
  while (!midiPlayer.playing){
    await new Promise(resolve => setTimeout(resolve, 1000));
    midiPlayer.stop();
    midiPlayer.start();
  }
  UpdateMidiIds();
}

function UpdateMidiIds(){
    previousSongId = currentSongId;
    currentSongId = midifiles.indexOf(fileNameDisplay.textContent);
    if (canRandomize){
        nextSongId = Math.floor(Math.random() * midifiles.length);
    } else{
        nextSongId = currentSongId+1;
    }
    if (nextSongId > midifiles.length-1){nextSongId=0}
    localStorage.setItem("previousSongId", previousSongId);
    localStorage.setItem("currentSongId", currentSongId);
    localStorage.setItem("nextSongId", nextSongId);
    console.log("previousSongId: " + previousSongId + ", currentSongId:" + currentSongId + ", nextSongId: " + nextSongId);
}

async function startTimer() {
    while (true) {
        if (!canAutoPlay) {break;}
        await new Promise(resolve => setTimeout(resolve, 1000));
        if((midiPlayer.currentTime/midiPlayer.duration)>0.99){
            PlaySong(midifiles[nextSongId]);
        }
    }
}

function onMidiStopped() {
  console.log("MIDI Stopped");
}
