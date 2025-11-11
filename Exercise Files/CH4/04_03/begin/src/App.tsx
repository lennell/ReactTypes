import React, { useState, useEffect } from 'react'
import './App.css';
import Message from './Message';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('User')
  const [userMessage, setUserMessage] = useState<string>('This is your initial message.')

  useEffect(() => {
    // Update the state after 5 seconds
    const timer = setTimeout(() => {
      setUserName('Manny')
      setUserMessage('Updated message with Typescript')
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Message name={userName} message={userMessage} />
    </div>
  );
}

export default App;
