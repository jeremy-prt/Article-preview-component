// Récupérez l'élément à afficher/masquer
const element = document.querySelector("main .container-bottom .icon-links");
const share = document.querySelector(
  "main .container-bottom .content .icon-share"
);

// Ajoutez un événement "click" à l'élément
share.addEventListener("click", () => {
  // Ajoutez ou supprimez la classe "visible"
  element.classList.toggle("visible");
  share.classList.toggle("visible");
});
