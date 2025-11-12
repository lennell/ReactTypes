import React, {useState, useEffect} from 'react'
import './App.css'
import Message from './Message'

const App: React.FC = () => {

    const[userName, setUserName] = useState<string>('Manny');
    const[userMessage, setUserMessage] = useState<string>('Hello there hej!');

    useEffect(() => {
        const timer = setTimeout( () =>  {
            setUserName('Manny');
            setUserMessage('Hello there with Typescript!');
        },5000);
        return () => clearTimeout(timer);
    }, []);

  return (
    <div>
      <h1>Typescript is cool</h1>
       <Message name={userName} message={userMessage} />
    </div>
  )
}

export default App
