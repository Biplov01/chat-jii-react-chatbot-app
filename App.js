import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you?", isUserMessage: false },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newMessage.trim()) {
      return;
    }
    setMessages([
      ...messages,
      { text: newMessage, isUserMessage: true },
    ]);
    setNewMessage("");
    // make API call to ChatGPT server to retrieve response
  };

  return (
    <div className="chat-container">
      <h1 className="heading">Hello from Chat-jii</h1>
      <div className="message-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.isUserMessage ? "user-message" : "bot-message"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          placeholder="Type your message here"
          value={newMessage}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}
export default App;

