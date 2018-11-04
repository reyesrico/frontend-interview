import React, { Component } from 'react';
import { Route } from 'react-router';
import Chat from './Chat';
import Login from './Login';

class App extends Component {
  state = {
    user: window.localStorage.getItem('fi-user') || '',
    time: window.localStorage.getItem('fi-time') || '',
  };


  render() {
    const { time, user } = this.state;

    return (
      <div className="App">
        {user && <Chat user={user} time={time} />}
        {!user && <Login />}
      </div>
    );
  }
}

export default App;
