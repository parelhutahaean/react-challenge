import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { developer } = this.props;
    console.log(developer);
    return (
      <footer>
        <span>Copyright &copy; 2017, { developer }</span>
      </footer>
    );
  }
}

export default Footer;
