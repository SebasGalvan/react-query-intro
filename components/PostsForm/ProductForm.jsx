import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { createPost } from '../../api/postsAPI.js'


function PostForm() {

    const queryCliente = useQueryClient();

    const addPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess : () => {
            console.log('Post added!!');
            queryCliente.invalidateQueries('Posts');
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData =  new FormData(e.target);
        const Post = Object.fromEntries(formData)
        addPostMutation.mutate({
            ...Post,
        })
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment">Comment</label>
            <input type="text" id='comment' name='comment' placeholder="Comment"/>

            <label htmlFor="image">Image</label>
            <input type="file" id='image' name='image'/>

            <input type="button" value="Cancelar" />
            <input type="submit" value="Enviar" />
        </form>
    </>
  )
}

export default PostForm;