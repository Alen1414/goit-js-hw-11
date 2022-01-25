import './index.html';
import imageCard from './image_card.hbs';
import Notiflix from 'notiflix';
import APIservice from './api-service';
import articles from './articles.hbs';
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

const apiService = new APIservice()
console.log(apiService)

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onloadMore);
// console.log(refs.loadMore)


function onSearch(e) {
    e.preventDeafult();

    clearArticlesContainer();
     apiService.query = e.currentTarget.elements.query.value;
    console.log(query)
    apiService.resetPage()
    apiService.fetchArticles().then(appenArticlesMarkup)
};



function onloadMore() {
    apiService.fetchArticles().then(appenArticlesMarkup)
}

function appenArticlesMarkup(articles) {
    refs.imageCard.insertAdjacentHTML("beforeend", markup(articles));
}

function clearArticlesContainer() {
    refs.imageCard.insertAdjacentHTML=''
}