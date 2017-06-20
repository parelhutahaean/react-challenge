import React, { Component } from 'react';

import { Header, Content, Footer } from './components'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Parel's Simple Blog",
      developer: "Parel Wellman Hutahaean",
    }
  }

  render() {
    return (
      <div className="App">
        <Header title={ this.state.title }/>
        <Content />
        <Footer developer={ this.state.developer } />
      </div>
    );
  }
}

export default App;
