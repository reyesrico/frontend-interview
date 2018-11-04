import axios from 'axios';

const server = 'http://localhost:8080/api';

export const addMessage = ({ roomId, name, message }) => (
    axios.post(`${server}/rooms/${roomId}/messages`, { roomId, name, message })
);

export const fetchMessages = ({ roomId }) => (
    axios.get(`${server}/rooms/${roomId}/messages`)
);

export const fetchRooms = () => (
    axios.get(`${server}/rooms`)
);

export const fetchRoom = ({ roomId }) => (
    axios.get(`${server}/rooms/${roomId}`)
);
