import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
    <div className='nav-bar'>
        <Link exact="true" className='logo' to='/profile'>
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link>
        <nav>
        <NavLink exact="true" activeclassname="active" to="settings">
                <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
            </NavLink>
        </nav>
        {/* <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/joshua-muniz-b8491025b/'>
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Joshuamun97'>
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
        </ul> */}

    </div>
)

export default Header;