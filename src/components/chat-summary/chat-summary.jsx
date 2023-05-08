import './chat-summary.css'

export const ChatSummary = () => {
    return(
        <section className='chat-summary-section'>
            <section>
                <img src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=826" alt="Avatar"/>
            </section>
            <section className='chat-summary-text'>
                <p className='chat-summary-name'>Name</p>
                <p className='last-message'>Last message</p>
            </section>
        </section>
    )
}