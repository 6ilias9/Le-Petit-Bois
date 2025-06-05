document.addEventListener("DOMContentLoaded", () => {
  const pizzaItems = document.querySelectorAll(".pizza-item");
  const modal = document.getElementById("pizza-modal");
  const modalImg = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-btn");

  pizzaItems.forEach(item => {
    item.addEventListener("click", () => {
      modalImg.src = item.dataset.image;
      modalTitle.textContent = item.dataset.name;
      modalDesc.textContent = item.dataset.description;
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Fermer avec ESC ou clic extérieur
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.classList.add("hidden");
  });
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});


const toggleButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = lightbox.querySelector('img');
  const closeBtn = document.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  // Fermer en cliquant sur la croix
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Fermer en cliquant en dehors de l'image
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target === lightboxImage) return;
    lightbox.style.display = 'none';
  });
});
