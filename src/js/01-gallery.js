// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createPictureCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createPictureCard(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
        })
        .join('');
}

import SimpleLightbox from "simplelightbox";

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

import 'simplelightbox/dist/simple-lightbox.min.css'
