import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('website')
    const [comments, setComments] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }
    return (
        <div>
          <h2>Please complete the form</h2>
          <form onSubmit={handleSubmit}>
              <div>
              <label htmlFor="id-name">Your name: </label>
              <input 
                  value={name}
                  onChange={
                    (e) => setName(e.target.value)
                  }
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
                  value={category}
                  onChange={
                    (e) => setCategory(e.target.value)
                  }
                  >
                  <option value="website">Website issue</option>
                  <option value="order">Order issue</option>
                  <option value="general">General inquiry</option>
              </select>
              </div>
              <div>
                  <label htmlFor="id-comments">Comments: </label>
                  <textarea 
                      value={comments}
                      onChange={
                        (e) => setComments(e.target.value)
                      }
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

export default ControlledFormHooks