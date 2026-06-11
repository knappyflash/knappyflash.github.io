
import {ComponetsSketch} from "./ComponetsSketch.js";
import {NotGateSketch} from "./NotGateSketch.js";
import {OrGateSketch} from "./OrGateSketch.js";
import {AndGateSketch} from "./AndGateSketch.js";
import {XOrGateSketch} from "./XOrGateSketch.js";
import { QuickTestSketch } from "./QuickTestSketch.js";
import { QuickTestSketch2 } from "./QuickTestSketch2.js";

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
new p5(QuickTestSketch);
new p5(QuickTestSketch2);