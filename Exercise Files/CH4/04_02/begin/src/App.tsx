import React, { useState } from 'react'
import './App.css'
import Message from './Message'

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('User')
  const [userMessage, setUserMessage] = useState<string>('This is the initial message')

  return (
    <div>
      <h1>Typescript is cool</h1>
      <Message name={userName} message={userMessage} />
    </div>
  )
}

export default App
