function changeTitle(text) {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = text;
}