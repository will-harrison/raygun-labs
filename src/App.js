import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <BrowserRouter>
        <Route path={"/"} component={Home} />
      </BrowserRouter>
=======
      <Home />
>>>>>>> 741db0a10a53e19bcb6160a58b71c95033a9d2bd
    );
  }
}

export default App;
