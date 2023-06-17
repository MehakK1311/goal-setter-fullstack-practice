import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'> GoalSetter </Link>
            </div>
            <ul>
                <Link to='/login'>
                    <li>
                        <FaSignInAlt /> Login
                    </li>
                </Link>
                <Link to='/register'>
                    <li>
                        <FaUser /> Register
                    </li>
                </Link>
            </ul>
        </header>
    )
}

export default Header