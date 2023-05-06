import './chat-summary.css'

export const ChatSummary = () => {
    return(
        <section className='chat-summary-section'>
            <img src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=826" alt="Avatar"/>
            <section>
                <p className='chat-summary-name'>Name</p>
                <p className='last-message'>Last message</p>
            </section>
        </section>
    )
}