import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function makeGallery(selector){
    let fullList = galleryItems.map(makeItemMarkup);
    gallery.append(...fullList);   
}

function makeItemMarkup({preview,original,description} = {}){
    let galleryItem = document.createElement("a");
    galleryItem.classList.add("galley__link");
    galleryItem.setAttribute("href",original);
    galleryItem.insertAdjacentHTML("afterbegin",`<img class="gallery__image" src="${preview}" alt="${description}" />`);
  return galleryItem;  
}

function createLightbox(){
    return new SimpleLightbox(".gallery a",{
        captionDelay: 250,
        captionsData:"alt",
        
    });
}

makeGallery(gallery);

createLightbox();
