import React from 'react'
import css from "./css/PostItem.module.css"


function PostItem(props) {
  return (
        props.savedPosts.map(post => {
            // extra task restructuring
            const {title, name, image, description} = post
                return <div key={title} className={css.SearchItem}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img src={image} alt="" />
                    <p>{description}</p>


                </div>
            })
  )
}

export default PostItem