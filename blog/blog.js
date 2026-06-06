let allPosts = [];

const pageTitle = "Blog";
window.addEventListener("load", function () {
    console.log(pageTitle + " Page is loaded");
    changeTitle();
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

function parseDate(dateStr) {
  const [month, day, year] = dateStr.split("/");
  return new Date(year, month - 1, day);
}

function parseInputDate(dateStr) {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

fetch("blog.json")
  .then(res => res.json())
  .then(data => {
    allPosts = data.blogPosts;
    populateSubjectFilter(allPosts);
    renderPosts(allPosts);
    document.getElementById("subjectFilter").addEventListener("change", applyFilters);
    document.getElementById("startDate").addEventListener("change", applyFilters);
    document.getElementById("endDate").addEventListener("change", applyFilters);
    document.getElementById("clearFilters").addEventListener("click", clearFilters);
    document.getElementById("sortBy").addEventListener("change", applyFilters);
    document.getElementById("sortOrder").addEventListener("change", applyFilters);
  });

function populateSubjectFilter(posts) {
  const subjectFilter = document.getElementById("subjectFilter");
  subjectFilter.innerHTML = '<option value="all">All Subjects</option>';
  const subjects = [...new Set(posts.map(p => p.subject))];
  subjects.forEach(subject => {
    const opt = document.createElement("option");
    opt.value = subject;
    opt.textContent = subject;
    subjectFilter.appendChild(opt);
  });
}

function applyFilters() {
  const subject = document.getElementById("subjectFilter").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const start = parseInputDate(startDate);
  const end = parseInputDate(endDate);
  if (end) end.setHours(23, 59, 59); // include full day
  const filtered = allPosts.filter(post => {
    const postDate = parseDate(post.date);
    return (
      (subject === "all" || post.subject === subject) &&
      (!start || postDate >= start) &&
      (!end || postDate <= end)
    );
  });
  renderPosts(filtered);
}

function renderPosts(posts) {
  const container = document.getElementById("blogContainer");
  container.innerHTML = "";
  if (posts.length === 0) {
    container.innerHTML = `<p class="noPosts">No posts found.</p>`;
    return;
  }
  const sortBy = document.getElementById("sortBy")?.value || "date";
  const sortOrder = document.getElementById("sortOrder")?.value || "desc";
  const sorted = posts.slice().sort((a, b) => {
    let result = 0;
    if (sortBy === "date") {
      result = parseDate(a.date) - parseDate(b.date);
    } else {
      result = a.subject.localeCompare(b.subject);
    }
    return sortOrder === "asc" ? result : -result;
  });
  sorted.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <h2>${post.subject}</h2>
      <p class="postDate"><strong>${post.date}</strong></p>
      <p>${post.body}</p>
    `;
    container.appendChild(div);
  });
}

function clearFilters() {
  document.getElementById("subjectFilter").value = "all";
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  renderPosts(allPosts);
}