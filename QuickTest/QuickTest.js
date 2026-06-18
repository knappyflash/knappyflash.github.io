const pageTitle = "About Me";

window.addEventListener("load", function () {
  console.log(pageTitle + " Page is loaded");
  changeTitle();
  generateBackground();
});

window.addEventListener("resize", generateBackground);

function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}