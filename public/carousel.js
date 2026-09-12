(() => {
  const setupCarousel = (carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const previous = carousel.querySelector("[data-carousel-previous]");
    const next = carousel.querySelector("[data-carousel-next]");

    if (!track || !previous || !next) return;

    const step = () => {
      const card = track.querySelector(".case-slide");
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
      return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    };

    const move = (direction) => {
      const end = track.scrollWidth - track.clientWidth;
      const atStart = track.scrollLeft <= 4;
      const atEnd = track.scrollLeft >= end - 4;

      if (direction < 0 && atStart) {
        track.scrollTo({ left: end, behavior: "smooth" });
      } else if (direction > 0 && atEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: direction * step(), behavior: "smooth" });
      }
    };

    previous.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    track.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        move(event.key === "ArrowLeft" ? -1 : 1);
      }
    });
  };

  const initialize = () => document.querySelectorAll("[data-case-carousel]").forEach(setupCarousel);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
