  const img = document.getElementById("kflashLogo");

  let x = 0;
  let y = 0;
  let dx = 2; // speed in X
  let dy = 2; // speed in Y

  function move() {
    x += dx;
    y += dy;

    // bounce off edges
    if (x + img.width > page.clientWidth || x < 0) {
      dx *= -1;
    }

    if (y + img.height > page.clientHeight || y < 0) {
      dy *= -1;
    }

    img.style.left = x + "px";
    img.style.top = y + "px";

    requestAnimationFrame(move);
  }

  move();