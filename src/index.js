import './index.html';
import imageCard from './image_card.hbs';
import Notiflix from 'notiflix';
// import API from './api-service';

import axios from "axios";
// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });



const refs = {
   searchForm: document.querySelector('.search-form'),
   
};

console.log(refs.form);
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDeafult();
    const query = e.currentTarget.elements.query.value;
    console.log(query)
    // const s = query.searchQuery.value;
    // console.log(s)

    //  const SEARCH_URL = `https://pixabay.com/api/?key=`;
    // const API_KEY = '25348834-538d9f4405bc5a9c16273efde';
    // const OPTIONS = `&q=yellow+flowers&image_type=photo&page=5&per_page=40`;

    return fetch(`https://pixabay.com/api/?key=25348834-538d9f4405bc5a9c16273efde&q=${query}&image_type=photo`)
    .then(r => r.json())
    .then(console.log)
};

onSearch()