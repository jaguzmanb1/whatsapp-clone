import './actual-chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export const ChatPanel = () => {

    const [ actualMessage, setActualMessage ] = useState("")

    return(
        <>
            <section className="chat-panel-menu">
                <img src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=826" alt="Avatar"/>
                <p>Text</p>
            </section>
            <section className='chat-panel-messages'>
                dd
            </section>
            <section className='chat-panel-textbox'>
                <FontAwesomeIcon className='icon' icon={faFaceSmileWink} />
                <textarea value={actualMessage} onChange={ e => setActualMessage(e.target.value) }/>
            </section>
            </>
    )
}