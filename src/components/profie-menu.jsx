import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export const ProfileMenu = () => {
    return ( 
        <section className='profile-config-menu'>
            <img src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=826" alt="Avatar"/>
            <FontAwesomeIcon id="dots-icon" icon={faEllipsisVertical} />
        </section>
    )
}