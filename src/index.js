import './index.html';
import imageCard from './image_card.hbs';
import Notiflix from 'notiflix';
// import API from './api-service';

import axios from "axios";
// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });


// const API_KEY = '25348834-538d9f4405bc5a9c16273efde';

// fetch(`https://pixabay.com/api/?key=25348834-538d9f4405bc5a9c16273efde&orientation=horizontal`)
const refs = {
   searchForm: document.querySelector('.search-form'),
   
};

// console.log(refs.form);
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDeafult();
    const form = e.currentTarget.elements.query.value
    console.log(form)
}
function httpInquiry(q, page) {
    const URL = `https://pixabay.com/api/`;
    const FILTER = `${q}image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;
    const options = {
        heders: {
            key: `25348834-538d9f4405bc5a9c16273efde`,
        },
    };


 
   return  fetch(`${URL}?key=${options}${FILTER}`)
        .then(r => r.json())
        .then(console.log);
        
}
httpInquiry()