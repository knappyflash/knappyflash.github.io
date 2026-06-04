const player = document.getElementById("midiPlayer");
const list = document.getElementById("fileList");
const fileNameDisplay = document.getElementById("fileNameDisplay");

// function play() {
//   player.start();
// }

// function stop() {
//   player.stop();
// }

const files = [
  "A-Whole-New-World-(Theme-From-'Aladdin').mid",
  "Backstreet Boys - Everybody.mid",
  "Backstreet Boys - I Want It That Way.mid",
  "BassHunter - Dota.mid",
  "Beethoven-Moonlight-Sonata.mid",
  "Billy Joel - Piano Man.mid",
  "Caribbean-Blue.mid",
  "Coldplay - Viva La Vida.mid",
  "Cranberries - Zombie.mid",
  "Daft Punk - Around The World.mid",
  "Daft Punk - Da Funk.mid",
  "Daft Punk - One More Time.mid",
  "Dance-Dance-Dance.mid",
  "darude-sandstorm.mid",
  "Don't-Stop-Me-Now.mid",
  "Eye-Of-The-Tiger-(From-'Rocky').mid",
  "faded.mid",
  "Final Fantasy VII - Final Fantasy VII Main Theme.mid",
  "Fly-Me-To-The-Moon.mid",
  "Frozen.mid",
  "Guns n Roses - Sweet Child O Mine.mid",
  "Halo 2 - Menu.mid",
  "harrypotter.mid",
  "House-Of-The-Rising-Sun-2.mid",
  "Imagine dragons - Radioactive.mid",
  "In the hall of the Mountain King.mid",
  "Jingle-Bells-1.mid",
  "John Denver - Take Me Home Country Roads.mid",
  "Just-The-Two-Of-Us.mid",
  "Lynyrd Skynyrd - Sweet Home Alabama.mid",
  "Maroon 5 ft. Christina Aguilera - Moves Like Jagger.mid",
  "Michael Jackson - Beat It.mid",
  "Michael Jackson - Billie Jean.mid",
  "Michael Jackson - Thriller.mid",
  "Mortal Kombat - Theme.mid",
  "mozart-piano-concerto-21-2-elvira-madigan-piano-solo.mid",
  "My-Heart-Will-Go-On-(From-'Titanic').mid",
  "Never-Gonna-Give-You-Up-3.mid",
  "OASIS.Wonderwall K.mid",
  "Pirates of the Caribbean - He's a Pirate.mid",
  "potter.mid",
  "Queen - Bohemian Rhapsody.mid",
  "Radiohead - Creep.mid",
  "Red Hot Chili Peppers - Californication.mid",
  "Somewhere-Over-The-Rainbow.mid",
  "Sonata No.14 Op 27 Moonlight Sonata.mid",
  "stairway_to_heaven.mid",
  "Tetris - Tetris Main Theme.mid",
  "THE EAGLES.Hotel California K.mid",
  "The Elder Scrolls V Skyrim - Dragonborn Theme.mid",
  "The-Final-Countdown.mid",
  "TOTO.Africa K.mid",
  "Under-The-Sea-(From-'The-Little-Mermaid')-1.mid",
  "Wii Channels - Mii Channel.mid",
  "youre only lonely L.mid",
  "Zelda - Ocarina of Time - Song of Time.mid"
];

files.forEach(file => {
  const li = document.createElement("li");
  li.textContent = file;
  li.onclick = () => {
    player.src = "midi_files/" + file;
    fileNameDisplay.textContent=file;
    const fileName = document.createElement("li");
    sleep(500).then(() => {
        player.start();
    });
  };
  list.appendChild(li);
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}