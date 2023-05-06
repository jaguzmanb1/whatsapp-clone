import { useState } from 'react'
import 'normalize.css';
import './App.css'

import { ProfileMenu } from './components/profie-menu';
import { ChatSummary } from './components/chat-summary/chat-summary';
import { ChatPanel } from './components/actual-chat/actual-chat';

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='main-container'>
      <section className='chat-container'>
        <section className='left-panel-container'> 
          <ProfileMenu/>
          <ChatSummary/>
          <ChatSummary/>
          <ChatSummary/>
          <ChatSummary/>
        </section>
        <section className='right-panel-container'>
          <ChatPanel/>
        </section>
      </section>
    </section>
  )
}

export default App
