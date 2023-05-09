import './actual-chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import React from 'react'

import ContentEditable from 'react-contenteditable'

export const ChatPanel = ({conversation, userName, addMessageFunc}) => {

    const [ actualMessage, setActualMessage ] = useState("")

    const innerRef = React.createRef(9)

    const handleMessageChange = (e) => {
        setActualMessage(e.currentTarget.outerText)
    }

    const handleKeyUp = (e) => {
        if (e.nativeEvent.keyCode == 13 && !e.shiftKey) {
            e.preventDefault();
            if (actualMessage.replace(/[\r\n| ]/gm, '') == "") {
                return
            }
            addMessageFunc({
                "text": actualMessage,
                "type": "sent"
            })

            setActualMessage("")
        }
    }

    const renderMessages = () => {
        let messages = []
        conversation.map(function(msg) {
            if (msg["type"] == "sent") {
                messages.push(
                    <li className='chat-panel-sent message-box'>
                        {msg["text"]}
                    </li>
                )
            } else {
                messages.push(
                    <li className='chat-panel-received message-box'>
                        {msg["text"]}
                    </li>
                )
            }
        })
        return messages
    }

    return(
        <section className="chat-panel-container">
            <section className="chat-panel-menu">
                <img src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=826" alt="Avatar"/>
                <p>{userName}</p>
            </section>
            <section className='chat-panel-messages-container'>
                <ul className='chat-panel-messages'>
                    {renderMessages()}
                </ul>
            </section>
            <section className='chat-panel-textbox'>
                <FontAwesomeIcon className='icon' icon={faFaceSmileWink} />
                <div className='chat-panel-textbox-container'>
                    <div className='chat-panel-textbox-group'>
                        <ContentEditable id="chat-panel-input-text"
                            contentEditable="plaintext-only"
                            innerRef={innerRef}
                            disabled={false}
                            html={actualMessage}
                            onChange={handleMessageChange} 
                            onKeyPress={handleKeyUp}
                        />
                        <div className='chat-panel-placeholder'>Type a message</div>
                    </div>
                </div>
            </section>
        </section>
    )
}