import '../styles/Nav.css';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    return (
        <>
            <header>
                <nav className='container nav'>
                    {/* <img src="hamburger.svg" alt="hamburger-icon" width="30px" /> */}
                    <Link to='/'>
                        <img id='logo' src="logo-final.jpg" alt="restaurant-logo" />
                    </Link>
                    {/* <img src="basket.svg" alt="basket-icon" width="40px" /> */}
                    <ul className='nav-quick-links'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/booking-page'>Reservation</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav;