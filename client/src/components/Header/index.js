import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import closeFriends1 from '../../assets/images/closeFriends1.png';

const Header = () => (
    <div className='nav-bar'>
        <div className='parent'>
            <NavLink exact="true" className='profileLogo' to='/profile'>
                <FontAwesomeIcon icon={faUser} color="#F54242" />
            </NavLink>
            <Link className='logo' to='/'>
            <img src={closeFriends1} alt="logo" />
        </Link>
        <NavLink exact="true" className='settingsLogo' activeclassname="active" to="settings">
                <FontAwesomeIcon icon={faGear} color="#F54242" />
            </NavLink>
        </div>
        {/* </div> */}

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