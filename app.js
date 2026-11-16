(function () {
  const P = window.PORTFOLIO;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function media(p) {
    if (p.youtube) {
      return `<div class="media"><iframe src="https://www.youtube.com/embed/${esc(p.youtube)}" title="${esc(p.name)} demo" allowfullscreen loading="lazy"></iframe></div>`;
    }
    const placeholder = `<div class="placeholder"><div><strong>${esc(p.name)}</strong>${esc(p.subtitle)}</div></div>`;
    if (p.video) {
      const poster = p.poster ? ` poster="${esc(p.poster)}"` : "";
      // If the file is missing, the video hides and the placeholder shows.
      return `<div class="media">${placeholder}<video src="${esc(p.video)}"${poster} controls muted playsinline preload="metadata" onerror="this.remove()" style="position:absolute;inset:0"></video></div>`;
    }
    if (p.poster) {
      return `<div class="media">${placeholder}<img src="${esc(p.poster)}" alt="${esc(p.name)}" onerror="this.remove()" style="position:absolute;inset:0"></div>`;
    }
    return `<div class="media">${placeholder}</div>`;
  }

  const metrics = (p) =>
    p.metrics && p.metrics.length
      ? `<div class="metrics">${p.metrics.map((m) => `<div><b>${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join("")}</div>`
      : "";
  const tags = (list) => `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

  // Shared: nav + footer
  document.title = document.body.dataset.page === "projects" ? `Projects · ${P.name}` : `${P.name} · ${P.title}`;
  const page = document.body.dataset.page;
  $("#nav").innerHTML = `
    <div class="wrap">
      <a class="brand" href="index.html">${esc(P.name)}</a>
      <ul>
        <li><a href="index.html#about" class="${page === "home" ? "active" : ""}">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="projects.html" class="${page === "projects" ? "active" : ""}">Projects</a></li>
        <li><a href="index.html#skills">Skills</a></li>
        <li><a href="mailto:${esc(P.links.email)}">Contact</a></li>
      </ul>
    </div>`;
  $("#footer").innerHTML = `
    <div class="wrap">
      <span>© ${new Date().getFullYear()} ${esc(P.name)} · ${esc(P.location)}</span>
      <span><a href="mailto:${esc(P.links.email)}">Email</a> · <a href="${esc(P.links.linkedin)}">LinkedIn</a> · <a href="${esc(P.links.github)}">GitHub</a></span>
    </div>`;

  if (page === "home") {
    $("#hero").innerHTML = `
      <div class="wrap">
        <div>
          <p class="eyebrow">${esc(P.title)}</p>
          <h1>${esc(P.name)}</h1>
          <p class="tagline">${esc(P.tagline)}</p>
          ${P.about.map((t) => `<p class="about">${esc(t)}</p>`).join("")}
          <div class="actions">
            <a class="btn primary" href="projects.html">See projects</a>
            <a class="btn" href="${esc(P.cv)}" download>Download CV</a>
            <a class="btn" href="${esc(P.links.linkedin)}">LinkedIn</a>
            <a class="btn" href="${esc(P.links.github)}">GitHub</a>
          </div>
        </div>
        <img class="photo" src="${esc(P.photo)}" alt="${esc(P.name)}" onerror="this.style.display='none'">
      </div>
      <div class="wrap"><div class="stats">${P.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("")}</div></div>`;

    $("#expertise").innerHTML = P.expertise.map((e) => `<div class="card"><h3>${esc(e.title)}</h3><p>${esc(e.text)}</p></div>`).join("");

    $("#featured").innerHTML = P.projects
      .filter((p) => p.featured)
      .map(
        (p) => `
        <a class="project" href="projects.html#${esc(p.id)}" style="color:inherit;text-decoration:none">
          ${media(p)}
          <div class="body">
            <h3>${esc(p.name)}</h3>
            <p class="sub">${esc(p.subtitle)}</p>
            ${metrics(p)}
            <p style="margin:0;color:var(--muted);font-size:15px">${esc(p.summary)}</p>
            ${tags(p.tags)}
          </div>
        </a>`
      )
      .join("");

    $("#timeline").innerHTML = P.experience
      .map(
        (j) => `
        <div class="job">
          <h3>${esc(j.role)} · ${esc(j.company)}</h3>
          <div class="meta">${esc(j.period)}</div>
          <ul>${j.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>`
      )
      .join("");

    $("#skills-list").innerHTML = Object.entries(P.skills)
      .map(([k, v]) => `<div class="card"><h3>${esc(k)}</h3>${tags(v)}</div>`)
      .join("");

    $("#education-list").innerHTML = P.education
      .map((e) => `<div class="card"><h3>${esc(e.degree)}</h3><p>${esc(e.school)} · ${esc(e.detail)}</p></div>`)
      .join("");
  }

  if (page === "projects") {
    $("#cases").innerHTML = P.projects
      .map(
        (p) => `
        <article class="case" id="${esc(p.id)}">
          ${media(p)}
          <div>
            <h2 style="margin:0 0 4px">${esc(p.name)}</h2>
            <p class="lead" style="margin:0 0 16px">${esc(p.subtitle)}</p>
            ${metrics(p)}
            <p>${esc(p.summary)}</p>
            <ul>${p.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
            <div style="margin-top:16px">${tags(p.tags)}</div>
          </div>
        </article>`
      )
      .join("");
    if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 50);
  }
})();
