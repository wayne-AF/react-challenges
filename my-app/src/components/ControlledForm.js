import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        category: 'website',
        comments: '',
        
      }
    }

    // whenever we assign an event handler like this to onChange event,
    // event itself will be implicitly passed into the handler as a parameter
    handleNameChange = (event) => {
        // let newValue = event.target.value
        this.setState({
            name: event.target.value
        })
    }

    querySelector = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    commentsEntered = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    // prevents the page from reloading when submit button is clicked
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <h2>Please complete the form</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="id-name">Your name: </label>
            <input 
                value={this.state.name}
                onChange={this.handleNameChange}
                id="id-name" 
                name="name" 
                type="text" 
            />
            </div>
            <div>
            <label htmlFor="id-category">Query Category: </label>
            <select 
                name="category" 
                id="id-category"
                value={this.state.query}
                onChange={this.querySelector}
                >
                <option value="website">Website issue</option>
                <option value="order">Order issue</option>
                <option value="general">General inquiry</option>
            </select>
            </div>
            <div>
                <label htmlFor="id-comments">Comments: </label>
                <textarea 
                    value={this.state.comments}
                    onChange={this.commentsEntered}
                    name="comments" 
                    id="id-comments" 
                    cols="30" 
                    rows="10" 
                    />
            </div>
            
            <input type="submit" value="Submit"/>
        </form>
      </div>
      
    )
  }
}

export default ControlledForm
