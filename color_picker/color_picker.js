let hsImg;
let vImg;
let rgb = { r: 255, g: 0, b: 0 };
let hsv = { h: 0, s: 100, v: 100 };
let hex = "#000000"
let isMouseDown = false;
let isHSPickerClicked = false;
let isVPickerClicked = false;
let hsPickerX = 0;
let hsPickerY = 0;
let vPickerY = 0;

function setup() {
  let canvas = createCanvas(750, 410);
  canvas.parent("color_picker_div");
  background(40,40,80);

  hsImg = createImage(400, 400);
  vImg = createImage(400, 400);
  hsImg.loadPixels();
  vImg.loadPixels();
  CreateColorPickerHS();
  CreateColorPickerV();

  hsv.h = 0;
  hsv.s = 100
  hsv.v = 100

  SetupInputListeners();

  DoStuff();
}

function draw() {
  if (isMouseDown) {
    DoStuff();
  }
}

function DoStuff(){
    background(40,40,80);
    image(hsImg, 0, 0);
    image(vImg, 410, 0);
    updatePixels();
    SetHSV_V();
    SetHSV_HS();
    DrawPickedColor();
    UpdateText();
}

function CreateColorPickerHS() {
  hsv.h = 0;
  hsv.s = 100
  hsv.v = 100
  for (let row = 0; row < 399; row++) {
    rgb = hsvToRgb(hsv.h, hsv.s, hsv.v)
    for (let col = 0; col < 399; col++) {
        hsImg.set(col, row, color(rgb.r, rgb.g, rgb.b));
        hsv.h = map(col, 0, 399, 0, 359);
        rgb = hsvToRgb(hsv.h, hsv.s, hsv.v)
    }
    hsv.s = map(row, 0, 399, 100, 0);
  }
  hsImg.updatePixels();
}

function CreateColorPickerV() {
  let myColor = 255;
  for (let row = 0; row < 399; row++) {
    for (let col = 0; col < 20; col++) {
        vImg.set(col, row, color(rgb.r, rgb.g, rgb.b));
        rgb = { r: myColor, g: myColor, b: myColor }
    }
    myColor = map(row, 0, 399, 255, 0);
  }
  vImg.updatePixels();
}

function DrawPickedColor() {
  rgb = hsvToRgb(hsv.h, hsv.s, hsv.v)
  let myColor = color(rgb.r, rgb.g, rgb.b);
  fill(myColor);
  noStroke();
  rect(440, 0, 100, 100);
}

function SetHSV_HS () {
  if (isHSPickerClicked) {
      hsPickerX = max(min(mouseX, 399), 0);
      hsPickerY = max(min(mouseY, 399), 0);
      hsv.h = map(hsPickerX, 0, 399, 0, 359)
      hsv.s = map(hsPickerY, 0, 399, 100, 0)
  }
  stroke('black');
  strokeWeight(5);
  line(hsPickerX-15, hsPickerY, hsPickerX-5, hsPickerY);
  line(hsPickerX+5, hsPickerY, hsPickerX+15, hsPickerY);
  line(hsPickerX, hsPickerY-15, hsPickerX, hsPickerY-5);
  line(hsPickerX, hsPickerY+5, hsPickerX, hsPickerY+15);
}

function SetHSV_V () {
  if (isVPickerClicked) {
    vPickerY = max(min(mouseY, 399), 0);
  }
  stroke('red');
  strokeWeight(5);
  line(410, vPickerY, 430, vPickerY);
  hsv.v = map(vPickerY, 0, 399, 100, 0);
}

function UpdateText(){
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);

  hex = rgbToHex(rgb);

  text("HSV: " + Math.round(hsv.h) + ", " + Math.round(hsv.s) + ", " + Math.round(hsv.v), 440, 150);
  text("RGB: " + Math.round(rgb.r) + ", " + Math.round(rgb.g) + ", " + Math.round(rgb.b), 440, 200);
  text("HEX: " + hex, 440, 250);

  document.getElementById("hsv_h").value = Math.round(hsv.h);
  document.getElementById("hsv_s").value = Math.round(hsv.s);
  document.getElementById("hsv_v").value = Math.round(hsv.v);

  document.getElementById("rgb_r").value = Math.round(rgb.r);
  document.getElementById("rgb_g").value = Math.round(rgb.g);
  document.getElementById("rgb_b").value = Math.round(rgb.b);

  document.getElementById("hex").value = hex;
}

function mousePressed() {
  isMouseDown = true;
  if ((mouseX > 0) && (mouseX < 399) && (mouseY > 0) && (mouseY < 399)) {
    isHSPickerClicked = true;
  }

  if ((mouseX > 399) && (mouseX < 430) && (mouseY > 0) && (mouseY < 399)) {
    isVPickerClicked = true;
  }
}

function mouseReleased() {
  isMouseDown = false;
  isHSPickerClicked = false;
  isVPickerClicked = false;
}

function SetupInputListeners(){
  
  // HSV
  document.getElementById("hsv_h").addEventListener("input", (e) => {
    hsv.h = Math.max(0, Math.min(359, parseFloat(e.target.value) || 0));
    hsPickerX = map(hsv.h, 0, 359, 0, 399);
    DoStuff();
  });

  document.getElementById("hsv_s").addEventListener("input", (e) => {
    hsv.s = Math.max(0, Math.min(100, parseFloat(e.target.value) || 0));
    hsPickerY = map(hsv.s, 100, 0, 0, 399);
    DoStuff();
  });

  document.getElementById("hsv_v").addEventListener("input", (e) => {
    hsv.v = Math.max(0, Math.min(100, parseFloat(e.target.value) || 0));
    vPickerY = map(hsv.v, 100, 0, 0, 399);
    DoStuff();
  });


  // RGB
  document.getElementById("rgb_r").addEventListener("input", (e) => {
    rgb.r = Math.max(0, Math.min(255, parseFloat(e.target.value) || 0));

    let newHSV = rgbToHsv(rgb.r, rgb.g, rgb.b);
    hsv.h = newHSV.h;
    hsv.s = newHSV.s;
    hsv.v = newHSV.v;

    updatePickers();
    DoStuff();
  });

  document.getElementById("rgb_g").addEventListener("input", (e) => {
    rgb.g = Math.max(0, Math.min(255, parseFloat(e.target.value) || 0));

    let newHSV = rgbToHsv(rgb.r, rgb.g, rgb.b);
    hsv.h = newHSV.h;
    hsv.s = newHSV.s;
    hsv.v = newHSV.v;

    updatePickers();
    DoStuff();
  });

  document.getElementById("rgb_b").addEventListener("input", (e) => {
    rgb.b = Math.max(0, Math.min(255, parseFloat(e.target.value) || 0));

    let newHSV = rgbToHsv(rgb.r, rgb.g, rgb.b);
    hsv.h = newHSV.h;
    hsv.s = newHSV.s;
    hsv.v = newHSV.v;

    updatePickers();
    DoStuff();
  });
}

function updatePickers() {
  hsPickerX = map(hsv.h, 0, 359, 0, 399);
  hsPickerY = map(hsv.s, 100, 0, 0, 399);
  vPickerY  = map(hsv.v, 100, 0, 0, 399);
}


function rgbToHsv(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  let h = 0;
  let s = max === 0 ? 0 : diff / max;
  let v = max;

  if (diff !== 0) {
    switch (max) {
      case r:
        h = (g - b) / diff + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / diff + 2;
        break;
      case b:
        h = (r - g) / diff + 4;
        break;
    }
    h *= 60;
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  };
}


function hsvToRgb(h, s, v) {
  s /= 100;  // convert back to 0–1
  v /= 100;

  let r, g, b;

  let c = v * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = v - c;

  if (h >= 0 && h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (h < 180) {
    [r, g, b] = [0, c, x];
  } else if (h < 240) {
    [r, g, b] = [0, x, c];
  } else if (h < 300) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

  function rgbToHex(rgb) {
    const r = Math.max(0, Math.min(255, Math.round(rgb.r)));
    const g = Math.max(0, Math.min(255, Math.round(rgb.g)));
    const b = Math.max(0, Math.min(255, Math.round(rgb.b)));

    return "#" + [r, g, b]
      .map(value => value.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();
  }
