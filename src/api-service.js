
        import axios from 'axios';
export default class NewsApiServise{
    constructor () {
        this.searchQuery = "";
        this.page = 1;
        
  }
    
    async apiService() {
        const axios = require('axios').default;
       
        const options = {
            method: "get",
            url: "https://pixabay.com/api/",
            params: {
                key: "25348834-538d9f4405bc5a9c16273efde",
                q: this.searchQuery,
                
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                per_page: 40,
                page: this.page,
            },
            
        };
        const search = await axios(options);
        this.page += 1;
     
        return search.data.articles 
        // .then(data => {
                
        //     return data.hits;
        // }
        //   .then(r => r.json())
    }
    resetPage() {
        this.page = 1;
    }

     get query(){
         return this.searchQuery;
    }
    
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}