import React, { useState } from 'react';
import io from "socket.io-client";
import useTitle from '../../hooks/useTitle';
import Chat from './Chat';
import './Chat.css'
const socket = io.connect("http://localhost:3001");
const JoinChatRoom = () => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  useTitle('Live chat')
    const joinRoom = () => {
      
      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
      }
    };
    return (
        <div>
             {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
        </div>
    );
};

export default JoinChatRoom;