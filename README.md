[index.html](https://github.com/user-attachments/files/31187920/index.html)

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Editor — Video Portfolio</title>
<meta name="description" content="Freelance video editor — social, narrative, and YouTube content.">

<!-- Fonts: Space Grotesk (display), Inter (body), IBM Plex Mono (timecodes/labels) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- ============ NAV ============ -->
<header class="nav">
  <a href="#top" class="nav__brand">YOUR&nbsp;NAME</a>
  <nav class="nav__links">
    <a href="#work">Work</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="hero__inner">
    <p class="eyebrow">Freelance Video Editor</p>
    <h1 class="hero__headline">
      Cuts that keep<br>people watching.
    </h1>
    <p class="hero__sub">
      Social-first edits, narrative storytelling, and long-form YouTube content —
      built to hold attention from frame one.
    </p>
  </div>

  <!-- Signature element: the scrubber. Acts as both hero decoration and section nav. -->
  <div class="scrubber" role="navigation" aria-label="Jump to work category">
    <div class="scrubber__track"></div>
    <a class="scrubber__tick" href="#social" data-label="Social">
      <span class="scrubber__time">00:00</span>
      <span class="scrubber__name">Social</span>
    </a>
    <a class="scrubber__tick" href="#narrative" data-label="Narrative">
      <span class="scrubber__time">00:00</span>
      <span class="scrubber__name">Narrative</span>
    </a>
    <a class="scrubber__tick" href="#youtube" data-label="YouTube">
      <span class="scrubber__time">00:00</span>
      <span class="scrubber__name">YouTube</span>
    </a>
    <div class="scrubber__playhead" aria-hidden="true"></div>
  </div>
</section>

<!-- ============ WORK ============ -->
<section class="work" id="work">
  <p class="section-label">Selected Work</p>

  <!-- ============ PROJECT 1 — SOCIAL ============ -->
  <article class="project" id="social">
    <div class="project__meta">
      <span class="timecode">00:01</span>
      <span class="tag">Social / Short-form</span>
    </div>
    <h2 class="project__title">Project Title One</h2>
    <p class="project__desc">
      One or two lines on the project — the brief, the goal, or what you were
      going for. Keep it short; let the edit speak.
    </p>

    <!--
      REPLACE ME: swap the placeholder div below for a real <video> tag once
      you have your file, e.g.:

      <video class="project__media" muted loop playsinline
             poster="assets/posters/project-1.jpg">
        <source src="assets/videos/project-1.mp4" type="video/mp4">
      </video>

      Hovering a .project__media video will auto-play/pause via script.js.
    -->
    <div class="project__media project__media--placeholder">
      <span>Drop video here — assets/videos/project-1.mp4</span>
    </div>
  </article>

  <!-- ============ PROJECT 2 — NARRATIVE ============ -->
  <article class="project" id="narrative">
    <div class="project__meta">
      <span class="timecode">00:02</span>
      <span class="tag">Narrative / Documentary</span>
    </div>
    <h2 class="project__title">Project Title Two</h2>
    <p class="project__desc">
      One or two lines on the project — the brief, the goal, or what you were
      going for. Keep it short; let the edit speak.
    </p>
    <div class="project__media project__media--placeholder">
      <span>Drop video here — assets/videos/project-2.mp4</span>
    </div>
  </article>

  <!-- ============ PROJECT 3 — YOUTUBE ============ -->
  <article class="project" id="youtube">
    <div class="project__meta">
      <span class="timecode">00:03</span>
      <span class="tag">YouTube / Long-form</span>
    </div>
    <h2 class="project__title">Project Title Three</h2>
    <p class="project__desc">
      One or two lines on the project — the brief, the goal, or what you were
      going for. Keep it short; let the edit speak.
    </p>
    <div class="project__media project__media--placeholder">
      <span>Drop video here — assets/videos/project-3.mp4</span>
    </div>
  </article>

  <!-- Duplicate an <article class="project"> block above for each new piece.
       Update the id, timecode (00:04, 00:05...), tag, title, and media. -->

</section>

<!-- ============ ABOUT ============ -->
<section class="about" id="about">
  <p class="section-label">About</p>
  <p class="about__text">
    I'm a freelance video editor working across social-first content, narrative
    storytelling, and YouTube long-form. Most of the work here is self-directed —
    I built it to develop a specific eye for pacing, sound design, and story
    structure before taking on paid client work. <em>[Replace this paragraph
    with your real bio.]</em>
  </p>
</section>

<!-- ============ CONTACT ============ -->
<section class="contact" id="contact">
  <p class="section-label">Contact</p>
  <a class="contact__email" href="mailto:you@example.com">you@example.com</a>
  <div class="contact__socials">
    <a href="#">Instagram</a>
    <a href="#">YouTube</a>
    <a href="#">LinkedIn</a>
  </div>
</section>

<footer class="footer">
  <span class="timecode">© 2026</span>
  <span>Built frame by frame.</span>
</footer>

<script src="script.js"></script>
</body>
</html>

// ==========================================================================
// SCRUBBER PLAYHEAD — moves to the tick whose section is in view
// ==========================================================================
const ticks = Array.from(document.querySelectorAll(".scrubber__tick"));
const playhead = document.querySelector(".scrubber__playhead");
const sections = ticks
  .map((tick) => document.querySelector(tick.getAttribute("href")))
  .filter(Boolean);

function movePlayheadTo(index) {
  if (!playhead || !ticks[index]) return;
  const tick = ticks[index];
  playhead.style.left = `${tick.offsetLeft}px`;
}

// Position playhead on load and on resize
window.addEventListener("load", () => movePlayheadTo(0));
window.addEventListener("resize", () => {
  const activeIndex = ticks.findIndex((t) => t.classList.contains("is-active"));
  movePlayheadTo(activeIndex === -1 ? 0 : activeIndex);
});

// Track which project section is currently in view
if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = sections.indexOf(entry.target);
        if (index === -1) return;

        ticks.forEach((t) => t.classList.remove("is-active"));
        ticks[index].classList.add("is-active");
        movePlayheadTo(index);
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ==========================================================================
// PROJECT VIDEOS — play on hover, pause + reset when not hovered
// (Only affects real <video> tags once you swap in your own footage;
//  placeholder divs are ignored automatically.)
// ==========================================================================
document.querySelectorAll(".project__media video").forEach((video) => {
  const wrapper = video.closest(".project__media");

  wrapper.addEventListener("mouseenter", () => {
    video.play().catch(() => {});
  });

  wrapper.addEventListener("mouseleave", () => {
    video.pause();
  });
});

/* ==========================================================================
   DESIGN TOKENS
   ========================================================================== */
:root {
  /* Color */
  --bg: #101112;
  --surface: #17181a;
  --hairline: #2a2b2e;
  --text: #edebe6;
  --text-muted: #8b8d91;
  --accent: #e8a33d;
  --accent-dim: rgba(232, 163, 61, 0.14);

  /* Type */
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  /* Layout */
  --gutter: clamp(1.25rem, 4vw, 4rem);
  --max-width: 1200px;
}

/* ==========================================================================
   RESET
   ========================================================================== */
* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

img, video { max-width: 100%; display: block; }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

/* ==========================================================================
   UTILITIES
   ========================================================================== */
.section-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.25rem;
}

.timecode {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
  letter-spacing: 0.02em;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ==========================================================================
   NAV
   ========================================================================== */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem var(--gutter);
  background: linear-gradient(to bottom, rgba(16, 17, 18, 0.9), transparent);
}

.nav__brand {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
}

.nav__links {
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
}

.nav__links a {
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.nav__links a:hover { color: var(--text); }

/* ==========================================================================
   HERO
   ========================================================================== */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--gutter);
  padding-top: 6rem;
  max-width: var(--max-width);
  margin: 0 auto;
}

.hero__inner { max-width: 46rem; }

.hero__headline {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.6rem, 7vw, 5rem);
  line-height: 1.05;
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
}

.hero__sub {
  color: var(--text-muted);
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  max-width: 32rem;
}

/* ---- Scrubber: hero footer / signature nav element ---- */
.scrubber {
  position: relative;
  margin-top: 5rem;
  display: flex;
  gap: 0;
}

.scrubber__track {
  position: absolute;
  top: 0.4rem;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--hairline);
}

.scrubber__tick {
  position: relative;
  flex: 1;
  padding-top: 1.25rem;
  border-left: 1px solid var(--hairline);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  transition: opacity 0.2s ease;
}

.scrubber__tick::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  width: 1px;
  height: 0.8rem;
  background: var(--text-muted);
}

.scrubber__tick:first-child { border-left: none; }

.scrubber__time {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
}

.scrubber__name {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: color 0.2s ease;
}

.scrubber__tick:hover .scrubber__name { color: var(--text); }

.scrubber__playhead {
  position: absolute;
  top: -3px;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ==========================================================================
   WORK / PROJECTS
   ========================================================================== */
.work {
  padding: 8rem var(--gutter);
  max-width: var(--max-width);
  margin: 0 auto;
}

.project {
  padding: 4rem 0;
  border-top: 1px solid var(--hairline);
  scroll-margin-top: 6rem;
}

.project:last-child { padding-bottom: 0; }

.project__meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project__title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  margin-bottom: 0.75rem;
}

.project__desc {
  color: var(--text-muted);
  max-width: 34rem;
  margin-bottom: 2rem;
}

.project__media {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  overflow: hidden;
  background: var(--surface);
  cursor: pointer;
}

.project__media--placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed var(--hairline);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  text-align: center;
  padding: 1rem;
  background:
    repeating-linear-gradient(
      135deg,
      var(--surface),
      var(--surface) 10px,
      #1c1d20 10px,
      #1c1d20 20px
    );
}

.project__media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project__media:hover video { transform: scale(1.02); }

/* ==========================================================================
   ABOUT
   ========================================================================== */
.about {
  padding: 6rem var(--gutter);
  max-width: var(--max-width);
  margin: 0 auto;
  border-top: 1px solid var(--hairline);
}

.about__text {
  max-width: 40rem;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.4vw, 1.6rem);
  font-weight: 400;
  line-height: 1.4;
  color: var(--text);
}

.about__text em {
  font-style: normal;
  color: var(--text-muted);
}

/* ==========================================================================
   CONTACT
   ========================================================================== */
.contact {
  padding: 6rem var(--gutter) 8rem;
  max-width: var(--max-width);
  margin: 0 auto;
  border-top: 1px solid var(--hairline);
}

.contact__email {
  display: inline-block;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  border-bottom: 2px solid var(--accent);
  padding-bottom: 0.2rem;
  margin-bottom: 2.5rem;
  transition: color 0.2s ease;
}

.contact__email:hover { color: var(--accent); }

.contact__socials {
  display: flex;
  gap: 2rem;
}

.contact__socials a {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.2s ease;
}

.contact__socials a:hover { color: var(--text); }

/* ==========================================================================
   FOOTER
   ========================================================================== */
.footer {
  display: flex;
  justify-content: space-between;
  padding: 2rem var(--gutter);
  border-top: 1px solid var(--hairline);
  color: var(--text-muted);
  font-size: 0.85rem;
  max-width: var(--max-width);
  margin: 0 auto;
}

/* ==========================================================================
   RESPONSIVE
   ========================================================================== */
@media (max-width: 640px) {
  .nav__links { gap: 1.25rem; font-size: 0.8rem; }
  .scrubber { flex-direction: column; gap: 1.5rem; margin-top: 3rem; }
  .scrubber__track { display: none; }
  .scrubber__tick { border-left: none; padding-top: 0; }
  .scrubber__tick::before { display: none; }
  .scrubber__playhead { display: none; }
  .work { padding: 4rem var(--gutter); }
  .project { padding: 2.5rem 0; }
}
