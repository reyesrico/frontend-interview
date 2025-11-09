const server = 'http://localhost:8080/api';

export const addMessage = ({ roomId, name, message }) => (
    fetch(`${server}/rooms/${roomId}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomId, name, message })
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }).then(data => ({ data }))
);

export const fetchMessages = ({ roomId }) => (
    fetch(`${server}/rooms/${roomId}/messages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => ({ data }))
);

export const fetchRooms = () => (
    fetch(`${server}/rooms`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => ({ data }))
);

export const fetchRoom = ({ roomId }) => (
    fetch(`${server}/rooms/${roomId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => ({ data }))
);
