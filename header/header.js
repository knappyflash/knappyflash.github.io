/* ============================= */
/* PAGE SCENE SCRIPT */
/* ============================= */

let resizeTimer;

document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");

  if (!page) return;

  DrawTrees();
  updateSceneByTime();

  /*
    Update scene lighting once per minute.
  */
  setInterval(updateSceneByTime, 60000);

  /*
    Redraw trees if the page changes size.
  */
  const observer = new ResizeObserver(() => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      DrawTrees();
      updateSceneByTime();
    }, 200);
  });

  observer.observe(page);
});


/* ============================= */
/* DRAW RANDOM TREES */
/* ============================= */

function DrawTrees() {
  const page = document.querySelector(".page");

  if (!page) return;

  /*
    Remove old trees before drawing new ones.
  */
  document.querySelectorAll(".tree").forEach(tree => tree.remove());

  const treeCount = 10;

  for (let i = 0; i < treeCount; i++) {
    const tree = document.createElement("div");
    tree.className = "tree";

    /*
      Keep trees from going too far off the right edge.
    */
    const x = Math.random() * (page.offsetWidth - 50);

    /*
      Tree vertical position.
      Increase these numbers if you want trees lower.
    */
    const y = 50 + Math.random() * 40;

    tree.style.left = x + "px";
    tree.style.top = y + "px";

    tree.innerHTML = `
      <div class="tree-top"></div>
      <div class="tree-trunk"></div>
    `;

    page.appendChild(tree);
  }
}


/* ============================= */
/* UPDATE SCENE BY TIME */
/* ============================= */

function updateSceneByTime() {
  const hour = new Date().getHours();
  const page = document.querySelector(".page");

  if (!page) return;

  let darkness = 0;

  let frontHillColor = "#3cb043";
  let backHillColor = "#2e8b3c";

  let sunMoonColor = "#ffd84d";
  let sunMoonGlow1 = "rgba(255, 216, 77, 0.75)";
  let sunMoonGlow2 = "rgba(255, 180, 0, 0.35)";

  let moonCraterColor = "transparent";

  /*
    This controls your campfire glow.
    0 = invisible
    1 = fully visible
  */
  let campfireGlowOpacity = 0;


  if (hour >= 6 && hour < 10) {
    /*
      Morning
    */
    darkness = 0.1;

    frontHillColor = "#36a83f";
    backHillColor = "#2b8138";

    sunMoonColor = "#ffd84d";
    sunMoonGlow1 = "rgba(255, 216, 77, 0.7)";
    sunMoonGlow2 = "rgba(255, 160, 0, 0.35)";

    moonCraterColor = "transparent";

    campfireGlowOpacity = 0;

  } else if (hour >= 10 && hour < 17) {
    /*
      Day
    */
    darkness = 0;

    frontHillColor = "#3cb043";
    backHillColor = "#2e8b3c";

    sunMoonColor = "#ffd84d";
    sunMoonGlow1 = "rgba(255, 216, 77, 0.85)";
    sunMoonGlow2 = "rgba(255, 180, 0, 0.45)";

    moonCraterColor = "transparent";

    campfireGlowOpacity = 0;

  } else if (hour >= 17 && hour < 20) {
    /*
      Evening
    */
    darkness = 0.18;

    frontHillColor = "#2f8f38";
    backHillColor = "#246f31";

    sunMoonColor = "#ffb347";
    sunMoonGlow1 = "rgba(255, 170, 70, 0.8)";
    sunMoonGlow2 = "rgba(255, 95, 35, 0.45)";

    moonCraterColor = "transparent";

    /*
      Soft campfire glow in the evening.
      Change this to 0 if you only want glow at night.
    */
    campfireGlowOpacity = 0.45;

  } else {
    /*
      Night
    */
    darkness = 0.45;

    frontHillColor = "#174f28";
    backHillColor = "#123d22";

    sunMoonColor = "#f2f2e8";
    sunMoonGlow1 = "rgba(245, 245, 255, 0.95)";
    sunMoonGlow2 = "rgba(150, 190, 255, 0.65)";

    moonCraterColor = "rgba(120, 120, 135, 0.45)";

    /*
      Full campfire glow at night.
    */
    campfireGlowOpacity = 1;
  }


  /* ============================= */
  /* SEND VALUES TO CSS */
  /* ============================= */

  page.style.setProperty("--sceneDarkness", darkness);

  page.style.setProperty("--frontHillColor", frontHillColor);
  page.style.setProperty("--backHillColor", backHillColor);

  page.style.setProperty("--sunMoonColor", sunMoonColor);
  page.style.setProperty("--sunMoonGlow1", sunMoonGlow1);
  page.style.setProperty("--sunMoonGlow2", sunMoonGlow2);

  page.style.setProperty("--moonCraterColor", moonCraterColor);

  page.style.setProperty("--campfireGlowOpacity", campfireGlowOpacity);
}