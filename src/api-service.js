function httpInquiry(q, page) {

    const SEARCH_URL = `https://pixabay.com/api/?key=`;
    const API_KEY = '25348834-538d9f4405bc5a9c16273efde';
    const OPTIONS = `&q=yellow+flowers&image_type=photo&page=5&per_page=40`;

    return fetch(`${SEARCH_URL}${API_KEY}${OPTIONS}`)
        .then(r => r.json())
       .then(console.log);
    
}
httpInquiry()

// fetch(`https://pixabay.com/api/?key=25348834-538d9f4405bc5a9c16273efde&q=yellow+flowers&image_type=photo`)
// .then(r => r.json())
// .then(console.log);
    //     if (!response.ok) {
    //   throw new Error(response.status);
//     }
//             // return response.json();
//         })

        
export default { httpInquiry };

