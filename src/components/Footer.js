import { Link, NavLink } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <section className='container'>
                    <aside className='img'>
                        <Link to='/'>
                            <img id='logo' src="logo-final.jpg" alt="restaurant-logo" width="200" height="50" />
                        </Link>
                    </aside>
                    <nav className='footer-nav'>
                        <aside>
                            <h3>Quick links</h3>
                            <ul className='quick-links'>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/booking-page'>Reservation</NavLink></li>
                            </ul>
                        </aside>
                        <aside>
                            <h3>Follow us</h3>
                            <ul className='social-media-links'>
                            <li><NavLink to='https://www.facebook.com' target='blank'>Facebook</NavLink></li>
                            <li><NavLink to='https://www.instagram.com' target='blank'>Instagram</NavLink></li>
                            <li><NavLink to='https://www.youtube.com' target='blank'>YouTube</NavLink></li>
                            </ul>
                        </aside>
                    </nav>
                </section>
            </footer>
        </>
    );
}

export default Footer;
