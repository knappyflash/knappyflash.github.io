const gallery = document.querySelector(".gallery");

for (let i = 1; i <= 99; i++) {
  let img = document.createElement("img");
  img.src = `/images/cats/cat${i}.png`;
  gallery.appendChild(img);
}