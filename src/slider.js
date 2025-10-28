

(function () {
  let locked = false; // debounce rapid clicks

  function goTo(slider, delta) {
    const track = slider.querySelector(".slides");
    const total = track.children.length;
    let index = parseInt(slider.getAttribute("data-index") || "0", 10);

    index = (index + delta + total) % total;
    slider.setAttribute("data-index", index);
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // Click handlers for any slider in the document
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".slider .prev, .slider .next");
    if (!btn) return;

    const slider = btn.closest(".slider");
    if (!slider || locked) return;

    locked = true;
    goTo(slider, btn.classList.contains("next") ? +1 : -1);

    // unlock after the CSS transition
    const track = slider.querySelector(".slides");
    const unlock = () => { locked = false; track.removeEventListener("transitionend", unlock); };
    track.addEventListener("transitionend", unlock);
    // Fallback in case transitionend doesn't fire (e.g., display:none)
    setTimeout(() => (locked = false), 500);
  });

})();
