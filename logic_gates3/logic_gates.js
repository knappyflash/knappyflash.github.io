
import {AllGatesSketch} from "./AllGatesSketch.js";
import {NotGateSketch} from "./NotGateSketch.js";

const pageTitle = "Logic Gates";
window.addEventListener("load", function () {
  console.log(pageTitle + " Page is loaded");
  // changeTitle();
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

new p5(AllGatesSketch);
new p5(NotGateSketch);