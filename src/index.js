import './index.html';
import './style.css';
import Notiflix from 'notiflix';
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

    clearArticlesContainer();
    apiService.query = e.currentTarget.elements.query.value;
    // console.log(query)
    apiService.resetPage()
    const hits = await apiService.fetchArticles()
    appenArticlesMarkup(hits);
};



function onloadMore() {
    apiService.fetchArticles().then(appenArticlesMarkup)
}

function appenArticlesMarkup(hits) {
    // const image = hits.map(element => {return markup(element);}).join('');
    // refs.imageCard.insertAdjacentHTML("beforeend", image);
    // console.log(image);
    const code =hits.map(element => {return markup(element);}).join('');
    console.log(hits)
    refs.imageCard.insertAdjacentHTML('beforeend', code);
}

function clearArticlesContainer() {
    refs.imageCard.innerHTML='';
}