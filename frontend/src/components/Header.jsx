import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout =()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'> GoalSetter </Link>
            </div>
            <ul>
                {user ? (
                    <button className="btn" onClick={onLogout}>
                        <li>
                            <FaSignOutAlt /> Logout
                        </li>
                    </button>

                ) : (
                    <>
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
                    </>
                )}
            </ul >
        </header >
    )
}

export default Header