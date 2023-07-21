import { useQuery } from 'react-query'
import React from 'react'
import { getPosts } from '../../api/postsAPI.js';
import Post from '../Post/Post';
import Info from '../info/Info.jsx';

const Posts = () => {
    
    const { isLoading, data : posts, isError, error } = useQuery({
        queryKey : ['posts'],
        queryFn: getPosts,
        select: posts => posts.sort((a, b)  => b.id < a.id)
    });

    if(isLoading) return <div>Cargando Posts...</div>
    if(isError) return <div>Ocurrio un error... {error.message} </div>

  return (
        <div className='container'>
            <div className='contador d-flex justify-content-center mt-2 mb-2'>Resultados: {posts.length}</div>
            <div class="row row-cols-2 g-3">
                        {
                        posts.map( post => <Post key={post.id} post={post}/>)
                        }
            </div>
            <Info />
            <div>
                <a href="/" className='btn btn-outline-info'>Home</a>
            </div>
        </div>
  )
}

export default Posts