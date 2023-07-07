import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElement = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>`);
galleryElement.insertAdjacentHTML("beforeend", galleryMarkup.join(""));
galleryElement.addEventListener("click", openModalGallery);
function openModalGallery(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    };
const instance = basicLightbox.create(`<img src="${evt.target.dataset.source} "width="800" height="600">`);
instance.show();
galleryElement.addEventListener("keydown", closeModalGallery);
    function closeModalGallery (evt) {
        if (evt.code === "Escape") {
            instance.close();
        };
 galleryElement.removeEventListener("keydown", closeModalGallery);        
    };
};
console.log(galleryItems);