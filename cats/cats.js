const pageTitle = "Cats";
window.addEventListener("load", function () {
    console.log(pageTitle + " Page is loaded");
    changeTitle();
    var msnry = new Masonry(".gallery", {
      itemSelector: ".grid-item",
      columnWidth: 400,
      gutter: 10
    });
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

const gallery = document.querySelector(".gallery");

let item;
let img;
for (let i = 1; i <= 99; i++) {
  item = document.createElement("div");
  item.classList.add("grid-item");
  img = document.createElement("img");
  img.src = `/images/cats/cat${i}.png`;
  AppendImgItem(img);
}

async function AppendImgItem(img){
  item.appendChild(img);
  await gallery.appendChild(item);
}