function httpInquiry(qwery, page) {

    const SEARCH_URL = `https://pixabay.com/api/`;
    const API_KEY = '25348834-538d9f4405bc5a9c16273efde';
    const OPTIONS = `key=${API_KEY}&q=${qwery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`

    return fetch(`${SEARCH_URL} ${OPTIONS}`)
        .then((response) => response.qwery)
    
}
httpInquiry(cat,1)
    //     if (!response.ok) {
    //   throw new Error(response.status);
//     }
//             // return response.json();
//         })

        
export default { httpInquiry };

