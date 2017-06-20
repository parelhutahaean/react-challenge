import React, { Component } from 'react'
import axios from 'axios'

class Content extends Component {
  constructor () {
    super();
    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    console.log(this);
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(result => {
      console.log(result.data);
      this.setState({
        posts: result.data
      })
    })
    console.log('did mount');
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
  }

  render () {
    return (
      <div className="columns is-multiline is-mobile">
        {this.state.posts.map(item => (
          <div className="column is-one-quarter">
            <div>{item.body}</div>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.userId}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Content;
