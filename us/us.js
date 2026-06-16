const pageTitle = "US";
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

for (let i = 1; i <= 22; i++) {
  let item = document.createElement("div");
  item.classList.add("grid-item");

  let img = document.createElement("img");
  img.src = `/images/us/us${i}.png`;

  item.appendChild(img);
  gallery.appendChild(item);
}

window.addEventListener("load", function () {
  var msnry = new Masonry(".gallery", {
    itemSelector: ".grid-item",
    columnWidth: 400,
    gutter: 10
  });
});