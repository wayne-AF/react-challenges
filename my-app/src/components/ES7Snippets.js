// Creates a React function component
rfce
import React from 'react'

function ES7Snippets1() {
  return (
    <div>ES7Snippets</div>
  )
}

// export default ES7Snippets1

// -------------------------------------------
// Creates a React arrow function component
rafce
import React from 'react'

const ES7Snippets2 = () => {
  return (
    <div>ES7Snippets2</div>
  )
}

// export default ES7Snippets2

// -------------------------------------------
// Creates a React class component
rce
import React, { Component } from 'react'

export class ES7Snippets extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

// export default ES7Snippets

// ---------------------------------------------
// Adds a default constructor for a class that contains props as arguments
rconst
constructor(props) {
  super(props)

  this.state = {
     first
  }
}

// ---------------------------------------------
// Creates a console log
clg
console.log(first)

// ---------------------------------------------
// Creates a console log with object and string as its name
clo
console.log('first', first)