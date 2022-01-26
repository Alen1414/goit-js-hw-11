import './index.html';
import './style.css';
import Notiflix, { Notify } from 'notiflix';
import ApiServise from './api-service';

import markup from './image_card.hbs';

import axios from "axios";
// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });




const refs = {
    searchForm: document.querySelector(".search-form"),
    loadMore: document.querySelector(".load-more"),
    imageCard: document.querySelector(".gallery")
};

const apiService = new ApiServise()
console.log(apiService)

// console.log(refs.imageCard);


refs.searchForm.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onloadMore);
// console.log(refs.loadMore)


async function onSearch(e) {
    e.preventDefault();
    disable();
    // clearArticlesContainer();
    // apiService.query = e.currentTarget.elements.query.value;
    // apiService.resetPage();
    clearArticlesContainer();
    apiService.query = e.currentTarget.elements.query.value;
    // console.log(query)
    apiService.resetPage()
    const hits = await apiService.fetchArticles()
    appenArticlesMarkup(hits);



apiService.fetchArticles()
.then(object => {Notify.success(`Hooray! We found ${object.totalHits} images.`);
    enable();
    appenArticlesMarkup(object.its);
})
.catch(error => {
    Notify.failure(`Sorry, there are no images matching your search query. Please try again.`);
});
e.currentTarget.elements.query.value = "";
};

function onloadMore() {
    apiService.fetchArticles().then(appenArticlesMarkup)
}

function appenArticlesMarkup(hits) {
    
    const code =hits.map(element => {return markup(element);}).join('');
    console.log(hits)
    refs.imageCard.insertAdjacentHTML('beforeend', code);
}

function clearArticlesContainer() {
    refs.imageCard.innerHTML='';
}

function disable() {
    refs.loadMore.classList.add('is-hidden');
};
function enable() {
    refs.loadMore.classList.remove('is-hidden');
};