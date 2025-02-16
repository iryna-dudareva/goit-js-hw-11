import { getImgs } from './js/pixabay-api.js';  

const refs = {
    searchForm: document.querySelector(".js-search-form"),

}

refs.searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) { 
    e.preventDefault();

    //here getimgs(???)
    e.target.reset();
}


