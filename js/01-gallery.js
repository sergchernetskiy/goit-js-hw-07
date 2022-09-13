import { galleryItems } from "./gallery-items.js";
// Change code below this line

// додаємо посилання на контейнер
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// створюємо розмітку картинки
function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
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

  // відкриваємо модалку
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600" class="modal__image">
`);
  instance.show();

  // закриваємо модалку
  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
