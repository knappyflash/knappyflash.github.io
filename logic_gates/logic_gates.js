import {ComponetsSketch} from "./sketches/ComponetsSketch.js";
import {NotGateSketch} from "./sketches/NotGateSketch.js";
import {OrGateSketch} from "./sketches/OrGateSketch.js";
import {AndGateSketch} from "./sketches/AndGateSketch.js";
import {XOrGateSketch} from "./sketches/XOrGateSketch.js";
import { AndGate2Sketch } from "./sketches/AndGate2Sketch.js";
import { RsNorLatchSketch } from "./sketches/RsNorLatchSketch.js";
import { MonostableSketch } from "./sketches/MonostableSketch.js";
import { TFlipFlopSketch } from "./sketches/TFlipFlopSketch.js";
import { DFlipFlopSketch } from "./sketches/DFlipFlopSketch.js";
import { ClockSketch } from "./sketches/ClockSketch.js";
import { BinaryCounterSketch } from "./sketches/BinaryCounterSketch.js";
import { BinaryAdderSketch } from "./sketches/BinaryAdderSketch.js";
import { DecimalToBinarySketch } from "./sketches/DecimalToBinarySketch.js";
import { BinaryToDecimalSketch } from "./sketches/BinaryToDecimalSketch.js";

const pageTitle = "Logic Gates";
window.addEventListener("load", function () {
  console.log(pageTitle + " Page is loaded");
  changeTitle();
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

new p5(ComponetsSketch);
new p5(NotGateSketch);
new p5(OrGateSketch);
new p5(AndGateSketch);
new p5(XOrGateSketch);
new p5(AndGate2Sketch);
new p5(RsNorLatchSketch);
new p5(MonostableSketch);
new p5(TFlipFlopSketch);
new p5(DFlipFlopSketch);
new p5(ClockSketch);
new p5(BinaryCounterSketch);
new p5(BinaryAdderSketch);
new p5(DecimalToBinarySketch);
new p5(BinaryToDecimalSketch);