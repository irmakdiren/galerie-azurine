/* Galerie Azurine — interactions (menu mobile, filtres, confirmation) */
(function () {
  'use strict';

  /* ---------- Menu mobile (bouton « hamburger ») ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('menu-principal');

  if (toggle && nav) {
    var label = toggle.querySelector('.sr-only');

    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (label) {
        label.textContent = open ? 'Fermer le menu' : 'Ouvrir le menu';
      }
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });
  }

  /* ---------- Filtres de la collection ---------- */
  var filtres = document.querySelector('.filtres');

  if (filtres) {
    var boutons = filtres.querySelectorAll('.filtre');
    var cartes = document.querySelectorAll('.card[data-artiste]');
    var annonce = document.getElementById('resultat-filtre');

    filtres.hidden = false;

    boutons.forEach(function (bouton) {
      bouton.addEventListener('click', function () {
        var choix = bouton.getAttribute('data-filtre');
        var visibles = 0;

        boutons.forEach(function (b) {
          b.setAttribute('aria-pressed', b === bouton ? 'true' : 'false');
        });

        cartes.forEach(function (carte) {
          var montrer = choix === 'tous' || carte.getAttribute('data-artiste') === choix;
          carte.hidden = !montrer;
          if (montrer) {
            visibles += 1;
          }
        });

        if (annonce) {
          annonce.textContent = visibles + ' œuvre' + (visibles > 1 ? 's' : '') + ' affichée' + (visibles > 1 ? 's' : '');
        }
      });
    });
  }

  /* ---------- Page de confirmation : prénom saisi dans le formulaire ---------- */
  var cible = document.getElementById('merci-prenom');

  if (cible && window.URLSearchParams) {
    var prenom = new URLSearchParams(window.location.search).get('prenom');
    if (prenom) {
      cible.textContent = ', ' + prenom.trim().slice(0, 40);
    }
  }
}());
