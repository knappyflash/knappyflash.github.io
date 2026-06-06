const pageTitle = "Cats";
window.addEventListener("load", function () {
    console.log(pageTitle + " Page is loaded");
    changeTitle();
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

const gallery = document.querySelector(".gallery");

for (let i = 1; i <= 99; i++) {
  let img = document.createElement("img");
  img.src = `/images/cats/cat${i}.png`;
  gallery.appendChild(img);
}