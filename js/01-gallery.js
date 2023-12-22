import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

function createItem(item) {
  const liItem = document.createElement("li");
  liItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute("data-source", item.original);

  link.appendChild(image);
  liItem.appendChild(link);

  return liItem;
}

function createGallery(items) {
  const galleryElements = items.map(createItem);
  galleryList.append(...galleryElements);
}

createGallery(galleryItems);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== "IMG") {
    return;
  }

  const largeImage = target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${largeImage}" alt="${target.alt}">`
  );

  instance.show();
});
