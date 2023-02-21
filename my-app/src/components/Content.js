import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json"
import PostItem from "./PostItem"
import Loader from './Loader'


export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        posts: []
      }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          isLoaded: true,
          posts: savedPosts
        })
      }, 2000)
    }

    handleChange = (e) => {
      // assigning text from input field to const and convert to lowercase
      const name = e.target.value.toLowerCase()
      console.log(name)
      // filtering the saved posts by converting to lowercase, matching to the name const
      const filteredPosts = savedPosts.filter(post => {
        return post.name.toLowerCase().includes(name)
      })
      // changing the state of the displaying posts to show only the posts which match the search criteria
      this.setState({
        posts: filteredPosts
      })

    }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form action="">
              <label htmlFor="searchinput">Search: </label>
              <input onChange={(e) => this.handleChange(e)} type="search" id="searchinput" placeholder="By Author" />
              <h4>posts found: {this.state.posts.length}</h4>
            </form>
            
        </div>

        <div className={css.SearchResults}>
          {
          this.state.isLoaded ? <PostItem savedPosts={this.state.posts} /> 
          : <Loader />}
            
            
            
        </div>
      </div>
    )
  }
}

export default Content