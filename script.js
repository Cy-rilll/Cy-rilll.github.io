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
