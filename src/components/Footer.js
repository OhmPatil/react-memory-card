import '../styles/footer.css'
import {FaGithub} from 'react-icons/fa'

function Footer(){
    return(
        <div id='footer'>
            <p id='footer-text'>Made by Ohm Patil<a href='https://github.com/OhmPatil' target='_blank' rel='noopener noreferrer'><FaGithub size={'1.5rem'}/></a></p>
        </div>
    )
}

export default Footer