
MIDI.loadPlugin({
  soundfontUrl: "https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/",
  instrument: "acoustic_grand_piano",
  onsuccess: function() {
    MIDI.Player.loadFile("midi_files/Backstreet Boys - Everybody.mid", function() {
      MIDI.Player.start();
    });
  }
});
