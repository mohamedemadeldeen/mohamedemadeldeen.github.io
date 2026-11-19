(function () {
  const P = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const icon = {
    mail: '<svg class="ico" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg class="ico" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin: '<svg class="ico" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    download: '<svg class="ico" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>',
    linkedin: '<svg class="ico" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    play: '<svg class="ico" viewBox="0 0 24 24" style="width:12px;height:12px"><path d="m6 4 14 8-14 8z" fill="currentColor"/></svg>',
    cube: '<svg class="ico" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>',
  };
  const page = document.body.dataset.page;
  const hasDemo = new Set(P.projects.map((p) => p.id));
  const bullets = (list) => `<ul class="arrows">${list.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`;
  const chips = (list) => `<div class="chips">${list.map((t) => `<span>${esc(t)}</span>`).join("")}</div>`;
  const logo = (src, name) =>
    src ? `<img class="logo" src="${esc(src)}" alt="${esc(name)}">` : `<div class="logo mono">${esc(name.split(/[\s-]/).map((w) => w[0]).join("").slice(0, 2))}</div>`;

  // Nav + footer
  const home = page === "home" ? "" : "index.html";
  $("#nav").innerHTML = `<div class="wrap">
    <a class="brand" href="index.html">${esc(P.shortName)}</a>
    <ul>
      <li class="hide-sm"><a href="${home}#about">About</a></li>
      <li><a href="${home}#experience">Experience</a></li>
      <li class="hide-sm"><a href="${home}#skills">Skills</a></li>
      <li class="hide-sm"><a href="${home}#education">Education</a></li>
      <li><a class="pill-link ${page === "projects" ? "active" : ""}" href="projects.html">${icon.cube} Projects</a></li>
    </ul></div>`;
  $("#footer").innerHTML = `<div class="wrap"><span>© ${new Date().getFullYear()} ${esc(P.name)} · ${esc(P.location)}</span>
    <span><a href="mailto:${esc(P.links.email)}">Email</a> · <a href="${esc(P.links.linkedin)}">LinkedIn</a></span></div>`;

  if (page === "home") {
    const [first, ...rest] = P.name.split(" ");
    $("#about").innerHTML = `<div class="wrap">
      <div>
        <span class="status"><i></i>${esc(P.status)}</span>
        <h1>Hi, I'm <span class="grad">${esc(P.name)}</span></h1>
        <p class="subtitle">${esc(P.title)}</p>
        <p class="summary">${esc(P.summary)}</p>
        <div class="contact">
          <a href="mailto:${esc(P.links.email)}">${icon.mail}${esc(P.links.email)}</a>
          <span>${icon.phone}${esc(P.phone)}</span>
          <span>${icon.pin}${esc(P.location)}</span>
        </div>
        <div class="actions">
          <a class="btn primary" href="${esc(P.cv)}" download>${icon.download} Resume</a>
          <a class="icon-btn" href="${esc(P.links.linkedin)}" aria-label="LinkedIn">${icon.linkedin}</a>
        </div>
      </div>
      <div class="side">
        <div class="ring"><img src="${esc(P.photo)}" alt="${esc(P.name)}"></div>
        <div class="stats">${P.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("")}</div>
        <a class="pill-link" href="projects.html">${icon.cube} Project demos →</a>
      </div></div>`;

    $("#exp-list").innerHTML = P.experience.map((j) => `
      <article class="job">
        <div class="job-head">
          ${logo(j.logo, j.company)}
          <div>
            <h3>${esc(j.roles[0].title)}</h3>
            <div class="co">${esc(j.company)} · ${esc(j.location)}</div>
            ${j.roles.length > 1 ? `<div class="roles">${j.roles.map((r) => `<span><b>${esc(r.title)}</b> ${esc(r.period)}</span>`).join("")}</div>` : ""}
          </div>
          <span class="date">${j.current ? "<i></i>" : ""}${esc(j.period)}</span>
        </div>
        ${j.groups.map((g) => `
          ${g.label ? `<div class="group-label">${esc(g.label)}</div>` : ""}
          ${(g.projects || []).map((p) => `
            <div class="proj">
              <div class="proj-title"><div><b>${esc(p.name)}</b> <span>— ${esc(p.subtitle)}</span></div>
                ${hasDemo.has(p.id) ? `<a class="demo" href="projects.html#${esc(p.id)}">${icon.play} ${window.DEMOS && DEMOS.has(p.id) ? "Demo" : "Details"}</a>` : ""}</div>
              ${bullets(p.bullets)}
            </div>`).join("")}
          ${g.bullets ? bullets(g.bullets) : ""}`).join("")}
        ${chips(j.tags)}
      </article>`).join("");

    $("#skills-list").innerHTML = Object.entries(P.skills)
      .map(([k, v]) => `<div class="card"><h3>${esc(k)}</h3><div class="tags">${v.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></div>`).join("");

    $("#edu-list").innerHTML =
      P.education.map((e) => `<div class="card edu">${logo("", e.school)}<div><h3 style="margin:0">${esc(e.school)}</h3><p>${esc(e.degree)}</p><p>${esc(e.detail)}</p></div></div>`).join("") +
      `<div class="card certs"><h3>Certifications</h3>${P.certifications.map((c) => `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.name)} ↗</a>`).join("")}</div>`;
  }

  if (page === "projects") {
    const details = {};
    P.experience.forEach((j) => j.groups.forEach((g) => (g.projects || []).forEach((p) => (details[p.id] = p))));
    const media = (p) => {
      if (window.DEMOS && DEMOS.has(p.id)) return `<div class="demo-box" data-demo="${esc(p.id)}"></div>`;
      if (p.image) return `<figure class="shot"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"><figcaption>${esc(p.caption || "")}</figcaption></figure>`;
      if (!p.video && !p.youtube) return "";
      if (p.youtube) return `<div class="media"><iframe src="https://www.youtube.com/embed/${esc(p.youtube)}" title="${esc(p.name)}" allowfullscreen loading="lazy"></iframe></div>`;
      const ph = `<div class="ph"><div><b>${esc(p.name.split(" — ")[0])}</b>Demo video coming soon</div></div>`;
      return `<div class="media">${ph}${p.video ? `<video src="${esc(p.video)}" controls playsinline preload="metadata" onerror="this.remove()"></video>` : ""}</div>`;
    };
    const render = (cat) => {
      $("#cases").innerHTML = P.projects.filter((p) => cat === "all" || p.category === cat).map((p) => {
        const d = details[p.id];
        return `<article class="pcase" id="${esc(p.id)}">
          <div class="pcase-head"><h2>${esc(p.name)}</h2></div>
          ${chips(p.tags)}
          ${media(p)}
          ${p.metrics.length ? `<div class="metrics">${p.metrics.map((m) => `<div class="metric"><b>${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join("")}</div>` : ""}
          ${d ? bullets(d.bullets) : ""}
        </article>`;
      }).join("");
      document.querySelectorAll("[data-demo]").forEach((el) => DEMOS.mount(el, el.dataset.demo));
    };
    document.querySelectorAll(".filters button").forEach((b) =>
      b.addEventListener("click", () => {
        document.querySelectorAll(".filters button").forEach((x) => x.classList.toggle("on", x === b));
        render(b.dataset.cat);
      })
    );
    render("all");
    if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 60);
  }
})();
