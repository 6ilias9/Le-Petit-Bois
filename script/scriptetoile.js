function createShootingStar() {
  const star = document.createElement('div');
  star.className = 'shooting-star';

  const top = Math.random() * window.innerHeight * 0.8; // Aléatoire sur la hauteur
  const delay = Math.random() * 2; // Délai entre 0 et 2 secondes
  const duration = 2 + Math.random() * 2; // Durée entre 2 et 4 secondes

  star.style.top = `${top}px`;
  star.style.left = '-100px';
  star.style.animation = `shoot ${duration}s ease-in ${delay}s forwards`;

  document.body.appendChild(star);

  // Supprime l'étoile après l'animation
  setTimeout(() => {
    star.remove();
  }, (delay + duration) * 1000);

  // Crée une autre étoile après un délai aléatoire
  setTimeout(createShootingStar, Math.random() * 1500 + 500);
}

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 3; i++) {
    createShootingStar(); // Lancer 3 étoiles au début
  }
});