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

disable() 
async function onSearch(e) {
  
    e.preventDefault();
    
    // clearArticlesContainer();
    // apiService.query = e.currentTarget.elements.query.value;
    // apiService.resetPage();
    clearArticlesContainer();
    apiService.query = e.currentTarget.elements.query.value;
    // console.log(query)
    apiService.resetPage()
    const data = await apiService.fetchArticles()
    



    if (data.totalHits === 0) {
        Notify.failure(`Sorry, there are no images matching your search query. Please try again.`)
        return 
    }
     

    Notify.success(`Hooray! We found ${data.totalHits} images.`);
    appenArticlesMarkup(data.hits);
     if (data.totalHits <= apiService.totalImage) {
   Notify.failure("We're sorry, but you've reached the end of search results."); 
        disable()
        return
    }

    
    enable();


    // appenArticlesMarkup(object.its);


//     ;
// });
// e.currentTarget.elements.query.value = "";
 };

async function onloadMore() {
    const load = await apiService.fetchArticles();

    if (load.totalHits <= apiService.totalImage) {
   Notify.failure("We're sorry, but you've reached the end of search results."); 
        disable()
        return
    }
    appenArticlesMarkup(load.hits)
    
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