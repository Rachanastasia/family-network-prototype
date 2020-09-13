import React from 'react';

import './App.css'
import NotLoggedInRouter from './notLoggedIn/NotLoggedInRouter';
import Main from './isLoggedIn/Main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    }
  }


  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })

  }


  render() {
    return (
      <main>
        {this.state.isLoggedIn === false
          ? <NotLoggedInRouter />
          : <Main />}

      </main>
    );
  }
}

export default App;
