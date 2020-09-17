import React from 'react'

function Posts({posts}) {
  return (
    <ol>
      {posts.map(item => {
        let {id, title, body} = item;
        return (
          <li key={id}>
            <h5>{title}</h5>
            <p>{body}</p>
          </li>
        )
      })}
    </ol>
  )
}

export default Posts
