import axios from 'axios';

const postsApi = axios.create({
    baseURL: 'http://localhost:3000/posts'
})

 export const getPosts = async () => {
    const res =  await postsApi.get('/')
    return res.data
}

 export const createPosts = (post) => {
    postsApi.post('/', post)
}