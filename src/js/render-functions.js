import { getImgs } from "./pixabay-api";

const refs = {
    gallery : document.querySelector(".js-gallery"),
}

getImgs().then(data => {
    const markup = createMarkup(data);
    refs.gallery.innerHTML = markup;
});

function ImgTemplate(img) { 
const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = img;
    return `<li class="js-gallery-item">
        <img src="${webformatURL}" alt="${tags}" width="360" height="200"/>
        <ul class="stats">
          <li class="stats-item">Likes<span>${likes}</span></li>
          <li class="stats-item">Comments<span>${comments}</span></li>
          <li class="stats-item">Views<span>${views}</span></li>
          <li class="stats-item">Downloads<span>${downloads}</span></li>
        </ul>
      </li>`;
}

function createMarkup(arr) { 
    return arr.map(ImgTemplate).join('');
}