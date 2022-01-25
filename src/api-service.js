
        
export default class ApiService {
    constructor() {
        this.searchQuery = "";
         this.page = 1;
    }
    fetchArticles() {
        console.log(this)
        const options = {
            method: "get",
            url: "https://pixabay.com/api/",
            params: {
                key: '25348834-538d9f4405bc5a9c16273efde',
                q: this.searchQuery,
                
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                per_page: 40,
                page: this.page,
            }
        }
    }
    incrementPage() {
    this.page += 1;    
    }
    resetPage() {
        this.page += 1;
    }

     get query(){
         return this.searchQuery;
    }
    
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
