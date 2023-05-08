import { useState } from 'react'
import 'normalize.css';
import './App.css'

import { ProfileMenu } from './components/profie-menu';
import { ChatSummary } from './components/chat-summary/chat-summary';
import { ChatPanel } from './components/actual-chat/actual-chat';

function App() {

  const [conversation, setConversation] = useState([])

  const appendToConversation = (element) => {
    setConversation(p => [...conversation, element])
  }

  return (
    <section className='main-container'>
      <link href="https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css" rel="stylesheet"/>
      <section className='chat-container'>
        <section className='left-panel-container'> 
          <ProfileMenu/>
          <ChatSummary/>
          <ChatSummary/>
          <ChatSummary/>
          <ChatSummary/>
        </section>
        <section className='right-panel-container'>
          <ChatPanel
            conversation={conversation}
            addMessageFunc={appendToConversation}
          />
        </section>
      </section>
    </section>
  )
}

export default App
