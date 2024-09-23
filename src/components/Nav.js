import '../styles/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <header id='home'>
                <nav className='container nav'>
                    <img src="hamburger.svg" alt="hamburger-icon" width="30px" />
                    <img id='home' src="logo-final.jpg" alt="restaurant-logo" width="200" height="50" />
                    <img src="basket.svg" alt="basket-icon" width="40px" />
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutus-section">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><Link to='/booking-page'>Reservations</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav;