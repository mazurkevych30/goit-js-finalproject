import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const list = document.querySelector(".gallery");

list.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
list.addEventListener("click", handlerClick);

list.classList.contains

function handlerClick(evt) {
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    createModal(evt.target.dataset.source)
}

function createModal(url) {
    const instance = basicLightbox.create(`
    <img src=${url} width="800" height="600">
    `, {
        onClose: () => {
            document.removeEventListener("keydown", handlerClose);
        }
    });

    instance.show()

    document.addEventListener("keydown", handlerClose)
    function handlerClose(event) {
    console.log(event.code);
        if (event.code === "Escape") {
            instance.close();
        }
    }
}


function createMarkup(arr) {
    return arr
        .map(({ preview, original, description }) => `
        <li class="gallery__item">
        <a href="#" class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
        />
        </a>
        </li>
        `
        ).join("");
}



