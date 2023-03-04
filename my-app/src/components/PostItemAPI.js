import React from 'react'
import css from "./css/PostItem.module.css"


function PostItem(props) {
  return (
        props.savedPosts.map(post => {
            // extra task restructuring
            const {id, type, user, webformatURL, tags} = post
                return <div key={id} className={css.SearchItem}>
                    <p>{type}</p>
                    <p>{user}</p>
                    <img src={webformatURL} alt="random" />
                    <p>{tags}</p>


                </div>
            })
  )
}

export default PostItem