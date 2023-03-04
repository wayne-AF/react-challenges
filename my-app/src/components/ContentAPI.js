import React, { Component } from 'react'
import axios from 'axios'
import css from "./css/Content.module.css";
import {savedPosts} from '../posts.json'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import API_KEY from '../secrets'


export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        posts: [],
        savedPosts: [],
      }
    }

    componentDidMount() {
      this.fetchImages()
      
    }

    async fetchImages() {
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`)
      const fetchedPosts = response.data.hits;

      this.setState({
        isLoaded: true,
        posts: fetchedPosts,
        savedPosts: fetchedPosts,
      })
    }

    handleChange = (e) => {
      // assigning text from input field to const and convert to lowercase
      const name = e.target.value.toLowerCase()
      // filtering the saved posts by converting to lowercase, matching to the name const
      const filteredPosts = this.state.savedPosts.filter((post) => {
        return post.user.toLowerCase().includes(name)
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
            <form>
              <label htmlFor="searchinput">Search: </label>
              <input onChange={(e) => this.handleChange(e)} type="search" id="searchinput" placeholder="By Author" />
              <h4>posts found: {this.state.posts.length}</h4>
            </form>
            
        </div>

        <div className={css.SearchResults}>
          {
          this.state.isLoaded ? <PostItemAPI savedPosts={this.state.posts} /> 
          : <Loader />}
            
            
            
        </div>
      </div>
    )
  }
}

export default Content