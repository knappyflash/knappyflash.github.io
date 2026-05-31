const gallery = document.querySelector(".gallery");

for (let i = 1; i <= 22; i++) {
  let img = document.createElement("img");
  img.src = `/images/us/us${i}.png`;
  gallery.appendChild(img);
}