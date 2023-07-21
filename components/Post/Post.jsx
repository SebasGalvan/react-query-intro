import React from 'react'

const Post = ({post}) => {
    console.log(post);
  return (


    <div class="col-4">
      <div class="card mb-3" style={{maxWidth:  '540px'}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={post.image}
              alt="Post user image"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{post.user}</h5>
              <p class="card-text">
                    {post.comment}
              </p>
              <p class="card-text">
                <small class="text-muted">{post.date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Post