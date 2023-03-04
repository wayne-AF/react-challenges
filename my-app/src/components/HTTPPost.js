import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null,
      }
    }
    postToApi = () => {
        // the url and the structure of the second parameter - the object containing
        // the data you wish to send - will differ depending on the API or server
        // you're sending it to. Check the API's docs for info
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'hello world',
                body: 'it works',
                userId: 123,
            }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }
  render() {
    const {apiResponse} = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>
            Create Post
        </button>
        {
            apiResponse
            ? (<div>
                <h1>{apiResponse.title}</h1>
                <p>post id: {apiResponse.id}</p>
                <p>{apiResponse.body}</p>
                <p>user id: {apiResponse.userId}</p>
            </div>)
            : <p>please click the button above</p>
        }
      </div>
    )
  }
}

export default HTTPPost