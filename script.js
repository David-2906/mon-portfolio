/* ----- NAVBAR ----- */
// Ciblage des éléments
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Click sur le burger
burger.addEventListener('click', () => {
  console.log("Burger cliqué !");
  burger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

/* ----- CARROUSEL ----- */
const swiper = new Swiper('.mySwiper', { // Initialise Swiper sur l'élément avec la classe "mySwiper"
  slidesPerView: 1, // Affiche 1 slide à la fois
  spaceBetween: 30, // Espace de 30px entre les slides
  loop: true, // Permet un défilement en boucle infinie
  autoHeight: true, // ajuste la hauteur selon le contenu

  // Pagination (les petits points sous les slides)
  pagination: {
    el: '.swiper-pagination', // Cible l'élément avec cette classe
    clickable: true, // Permet de cliquer sur les points pour naviguer
  },
  // Flèches de navigation
  navigation: {
    nextEl: '.swiper-button-next', // Cible la flèche droite
    prevEl: '.swiper-button-prev', // Cible la flèche gauche
  },
  // Responsive : règle à partir de 768px de large
  breakpoints: {
    768: {
      slidesPerView: 1, // Toujours 1 slide visible
      spaceBetween: 30, // Même espacement
    }
  }
});

/* ----- FORMULAIRE DE CONTACT ----- */

// Initialise EmailJS avec ton User ID (tu peux ignorer cette étape avec les dernières versions, mais on l'ajoute pour être propre)
emailjs.init("H98VAC22RznVy0GL3"); // Remplacer 'TON_PUBLIC_KEY' par ta clé publique EmailJS

// Ciblage du formulaire
const contactForm = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');

// On cache le message de confirmation au chargement de la page
confirmationMessage.style.display = 'none';

// Ecoute l'événement de soumission du formulaire
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page 

// Envoi via EmailJS
emailjs.sendForm('TON_SERVICE_ID', 'TON_TEMPLATE_ID', this)
.then(function() {
  console.log('Email envoyé avec succès !');
  
  confirmationMessage.style.display = 'block'; // Affiche le message
  contactForm.reset(); // Réinitialise le formulaire

  // Après 5 secondes, on cache le message
  setTimeout(() => {
    confirmationMessage.style.display = 'none';
  }, 5000);

}, function(error) {
  console.error('Erreur lors de l\'envoi de l\'email:', error);
  alert('Une erreur est survenue. Merci de réessayer.');
});
});
