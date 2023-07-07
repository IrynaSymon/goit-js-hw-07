
import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElement = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`);
galleryElement.insertAdjacentHTML("beforeend", galleryMarkup.join(""));
galleryElement.addEventListener("click", openModalGallery);
function openModalGallery(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    };
};
const lightbox = new SimpleLightbox(".gallery a", {captionsData: "alt", captionPosition: "bottom", captionDelay: 250});

console.log(galleryItems);
