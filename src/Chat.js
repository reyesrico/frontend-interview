import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { forEach, includes, map } from 'lodash';

import { addMessageAction, fetchMessagesAction, fetchRoomAction, fetchRoomsAction } from './redux/actions';
import { scrollToBottom } from './scroll-bottom';

import './Chat.css'

class Chat extends Component {
    state = {
        currentTime: '',
        roomId: 1,
        message: '',
    };

    componentDidMount() {
        this.handleCurrentTime();
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.roomId !== this.state.roomId) {
            this.fetchData();
        }

        if (prevProps.messages.length !== this.props.messages.length) {
            this.fetchData();
        }
    }

    scrollToBottom = () => {
        scrollToBottom(this.element);
    }

    fetchData = () => {
        const { fetchMessagesAction, fetchRoomAction, fetchRoomsAction } = this.props;
        const { roomId } = this.state;
 
        fetchRoomsAction();
        fetchRoomAction({ roomId });
        fetchMessagesAction({ roomId });
        this.scrollToBottom();
    }

    handleCurrentTime = () => {
        const { time } = this.props;

        if (!time) return;

        const date = new Date(time);
        const momentDate = moment(date.toISOString());
        const duration = moment.duration(moment().diff(moment(momentDate)));
        const hours = duration.hours().toString();
        const minutes = duration.minutes().toString();
        const currentTime = `${hours} Hours ${minutes} Minutes`;
        
        this.setState({ currentTime });
    }

    handleLogout = () => {
        window.localStorage.setItem('fi-user', '');
        window.localStorage.setItem('fi-time', '');
        this.props.history.push('/');
    }

    handleMessage(message, key) {
        const { user } = this.props;

        let className = "chat__message";
        let isMyMessage = false;

        if (message.name === user) {
            className += "-me";
            isMyMessage = true;
        }

        return (
            <div className={className} key={key}>
                <div className="chat__bubble">{message.message}</div>
                {!isMyMessage && <div className="chat__user">{message.name}</div>}
            </div>
        );
    }

    handleRoomClick = roomId => {
        const { room } = this.props;

        if (!room) return;

        this.setState({ roomId });
    }

    handleRoomUsers = () => {
        const { room, user } = this.props;

        if (!room) return;

        let showUsers = [];

        forEach(room.users, roomUser => {
            if(roomUser !== user) {
                showUsers.push(roomUser);
            }
        })

        if (includes(room.users, user)) {
            return [user, ...showUsers];
        }
        
        return room.users;
    }

    sendMessage = () => {
        const { addMessageAction, user } = this.props;
        const { message, roomId } = this.state;

        if (!message) return;

        addMessageAction({ roomId, name: user, message });
        this.setState({ message: '' });
    }

    render() {
        const { messages, room, rooms, user } = this.props;
        const { currentTime, message } = this.state;

        const roomUsers = this.handleRoomUsers();

        return (
            <div className="chat">
                <div className="chat__menu">
                    <div className="chat__menu-header">
                        <h2>{user}</h2>
                        <div className="chat__menu-time">
                            Online for {currentTime}
                        </div>
                    </div>
                    <div className="chat__menu-rooms">
                        <div className="chat__menu-options">
                            {map(rooms, (roomObj, key) => {
                                let className = "chat__menu-room";
                                if (roomObj.id === room.id) 
                                    className += " selected";
                                return (<div className={className} key={key} onClick={e => this.handleRoomClick(roomObj.id)}>
                                    {roomObj.name}
                                </div>);
                            })}
                        </div>
                        <div className="chat__menu-logout" onClick={e => this.handleLogout()}>
                            Logout
                        </div>
                    </div>
                </div>
                <div className="chat__main">
                    <div className="chat__room-info">
                        <h2>{room && room.name}</h2>
                        <div className="chat__room-users">
                            {map(roomUsers, (roomUser, key) => {
                                let className = "chat__user";
                                const comma = key !== roomUsers.length-1 ? ', ' : '';
                                if (roomUser === user) {
                                    className += "-me";
                                }
                                return <span key={key}><span className={className}>{roomUser}</span>{comma}</span>
                            })}
                        </div>
                    </div>
                    <div className="chat__text-area" ref={element => this.element = element}>
                        {map(messages, (message, key) => {
                            return this.handleMessage(message, key);
                        })}
                    </div>
                    <div className="chat__send">
                        <input 
                            type="text"
                            placeholder="Type a message..."
                            value={message}
                            onChange={event => this.setState({ message: event.target.value })} 
                        />
                        <div  className="chat__button-send" onClick={this.sendMessage}>Send</div>
                    </div>
                </div>
            </div>
        );
    }
}

Chat.propTypes = {
    addMessageAction: PropTypes.func.isRequired,
    fetchMessagesAction: PropTypes.func.isRequired,
    fetchRoomAction: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    room: PropTypes.object.isRequired,
    rooms: PropTypes.array.isRequired,
    user: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    messages: state.messages,
    room: state.room,
    rooms: state.rooms,
});
  
const mapDispatchToProps = {
    addMessageAction,
    fetchMessagesAction,
    fetchRoomAction,
    fetchRoomsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Chat));
