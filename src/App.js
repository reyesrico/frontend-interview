import React, { Component } from 'react';
import Chat from './Chat';
import Login from './Login';

class App extends Component {
  state = {
    user: window.localStorage.getItem('fi-user') || '',
    time: window.localStorage.getItem('fi-time') || '',
  };

  componentDidUpdate(prevProps, prevState) {
    const user = window.localStorage.getItem('fi-user') || '';
    const time = window.localStorage.getItem('fi-time') || '';

    if(prevState.user !== user) {
      this.setState({ user, time });
      this.setState(prevState => ({ user, time }));
    }
  }

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
