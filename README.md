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
