const fetchPost = async() =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
} 

const API = {
    fetchPost
};

export default API;