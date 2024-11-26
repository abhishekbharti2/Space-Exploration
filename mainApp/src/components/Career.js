import React, { useState } from 'react';
import Road from '../DataSet/RoadMap.json';
import './Career.css';

const Career = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);

  const handleSend = () => {
    if (userInput.trim() !== "") {
      const userMessage = { text: userInput, sender: "user" };
      setMessages([...messages, userMessage]);

      // Show "waiting" message from the bot
      setIsWaiting(true);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "You will be answered soon...", sender: "bot" },
      ]);

      // Simulate a delay for the bot response
      setTimeout(() => {
        const botResponse = { text: "Thank you for your message! How else can I assist you?", sender: "bot" };
        setMessages((prevMessages) => [
          ...prevMessages,
          botResponse,
        ]);
        setIsWaiting(false); // Stop the waiting state
      }, 2000); // 2 seconds delay before bot replies

      setUserInput(""); // Clear input field
    }
  };

  return (
    <div className='career-container'>
      <div className="roadmap-container">
        <h3 className="roadmap-title">How to Become an Astronomer ?</h3>
        <div className="roadmap-steps">
          {Road.map((step, index) => (
            <div className="roadmap-step" key={index}>
              <span className="step-title" >{step.title}</span>
              <p className='step-description'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="chatbot-container">
        <div className="chat-window">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isWaiting}
            />
            <button onClick={handleSend} disabled={isWaiting}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
