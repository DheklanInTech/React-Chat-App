import {ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';




const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
       height='100vh'
       projectID='bc175a14-2381-412f-94a4-125f42e1b109'
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
      
    />
    
  )
}

export default App