function SeededRandom(seed) {
  let value = seed;
  return function () {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function RandomizeWoodButtons() {
  const woodImages = [
    "url('/images/wood_button_texture1.jpg')",
    "url('/images/wood_button_texture2.jpg')",
    "url('/images/wood_button_texture3.jpg')"
  ];
  const random = SeededRandom(4);
  const buttons = document.querySelectorAll(".links a");
  buttons.forEach(button => {
    const randomIndex = Math.floor(random() * woodImages.length);
    const randomImage = woodImages[randomIndex];
    button.style.setProperty("--woodButton", randomImage);
  });
}

RandomizeWoodButtons();
