import './index.html';
import imageCard from './image_card.hbs';
import Notiflix from 'notiflix';
import APIservice from './api-service';

import axios from "axios";
// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });


const apiService = new APIservice()
console.log(apiService )
const refs = {
    searchForm: document.querySelector('.search-form'),
    imageCard: document.querySelector('.gallery'),
  loadMore: document.querySelector('[data-action="load-more]'),
};
let searchQuery = '';
console.log(refs.form);
refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMore.addEventListener('click',onLoadMore );

function onSearch(e) {
    e.preventDeafult();
    searchQuery = e.currentTarget.elements.query.value;
    console.log(searchQuery )
    // const s = query.searchQuery.value;
    // console.log()
    apiService.fetchArticles(searchQuery)
};



function onLoadMore() {
    apiService.fetchArticles(searchQuery)
}