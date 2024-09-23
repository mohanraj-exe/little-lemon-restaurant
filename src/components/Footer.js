import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <section className='container'>
                    {/* <img src="mdi--copyright.png" alt="copyright" width="20px" height="20px" /> */}
                    <aside className='img'>
                        <img src="Logo-2.svg" alt="restaurant-logo" width="200" height="50" />
                    </aside>
                    <nav className='footer-nav'>
                        <aside>
                            <h3>Follow us</h3>
                            <ul className='social-media-links'>
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">YouTube</a></li>
                            </ul>
                        </aside>
                        <aside>
                            <h3>Quick links</h3>
                            <ul className='quick-links'>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#aboutus-section">About</a></li>
                                <li><a href="#menu">Menu</a></li>
                                <li><Link to='/booking-page'>Reservations</Link></li>
                            </ul>
                        </aside>
                        <aside>
                            <h3>Contact us</h3>
                            <ul className='contactus-links'>
                                <li><a href="/">Address</a></li>
                                <li><a href="/">Phone no.</a></li>
                                <li><a href="/">Email</a></li>
                            </ul>
                        </aside>
                    </nav>
                </section>
            </footer>
        </>
    );
}

export default Footer;
