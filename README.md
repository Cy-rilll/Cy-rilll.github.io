[index.html](https://github.com/user-attachments/files/31187597/index.html)

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
