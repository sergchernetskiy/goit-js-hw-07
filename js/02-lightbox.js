import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// додаємо посилання на контейнер
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// створюємо розмітку картинки
function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

// додаємо слухача на контейнер
galleryContainer.addEventListener("click", onImageClick);

function onImageClick(event) {
  // забороняємо браузеру переходити по посиланню
  event.preventDefault();

  // умова кліку - тільки по картинці (все інше ігнор)
  if (event.target.nodeName !== "IMG") {
    return;
  }

  //підключаємо бібліотеку
  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
