import { useState } from 'react'
import 'normalize.css';
import './App.css'

import { ProfileMenu } from './components/profile-menu/profie-menu';
import { ChatSummary } from './components/chat-summary/chat-summary';
import { ChatPanel } from './components/actual-chat/actual-chat';

function App() {

  const [idConv, setIdConv] = useState(0)

  const [conversations, setConversations] = useState([
    {
      "id": 0,
      "from": "Jhon Doe",
      "messages": [
        {
          "type": "sent",
          "text": "Holaa"
        }
      ]
    },
    {
      "id": 1,
      "from": "Jane Doe",
      "messages": [
        {
          "type": "sent",
          "text": "Hi!"
        }
      ]
    }
  ])

  const appendToConversation = (element) => {
    let arr = [...conversations]
    arr[idConv]['messages'].push(element)
    setConversations(arr)
  }

  const setActualConversation = (id) => {
    setIdConv(id)
  }

  const renderChatSummaryConversations = () => {
    let convs = []

    for (let i = 0 ; i < conversations.length; i++) {
      convs.push(
        <ChatSummary
          key={conversations[i]['id']}
          from={conversations[i]['from']}
          lastMessage={conversations[i]['messages'][conversations[i]['messages'].length - 1]['text']}
          onClick={(e) => setActualConversation(i)}
        />
      )
    }

    return convs
  }

  return (
    <section className='main-container'>
      <link href="https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css" rel="stylesheet"/>
      <section className='chat-container'>
        <section className='left-panel-container'> 
          <ProfileMenu/>
          {renderChatSummaryConversations()}
        </section>
        <section className='right-panel-container'>
          <ChatPanel
            conversation={conversations[idConv]['messages']}
            userName={conversations[idConv]['from']}
            addMessageFunc={appendToConversation}
          />
        </section>
      </section>
    </section>
  )
}

export default App
