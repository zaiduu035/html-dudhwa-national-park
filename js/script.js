// Scroll fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElems.forEach(el => observer.observe(el));

  // Image modal popup
  const modal = document.createElement('div');
  modal.id = 'imgModal';
  modal.innerHTML = `<span onclick="closeModal()">&times;</span><img id="modalImg" src="">`;
  document.body.appendChild(modal);

  const images = document.querySelectorAll("section img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      document.getElementById("modalImg").src = img.src;
      modal.style.display = "block";
    });
  });

  window.closeModal = function () {
    modal.style.display = "none";
  };
});
