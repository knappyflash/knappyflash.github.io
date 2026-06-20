let resizeTimer;
const observer = new ResizeObserver(() => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    DrawTrees();
  }, 200);
});
observer.observe(document.querySelector(".page"));

function DrawTrees(){

    
    // ✅ remove old trees
    document.querySelectorAll('.tree').forEach(t => t.remove());


    for (let i = 0; i < 10; i++) {
        const tree = document.createElement('div');
        tree.className = 'tree';

        tree.style.left = Math.random() * (page.offsetWidth - 50) + 'px';
        tree.style.top = (50 + Math.random() * 40) + 'px';

        tree.innerHTML = `
            <div class="tree-top"></div>
            <div class="tree-trunk"></div>
        `;

        page.appendChild(tree);
    }
}