import '../styles/Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <img src="mdi--copyright.png" alt="copyright" width="20px" height="20px" />
                <img src="logo-final.jpg" alt="restaurant-logo" width="200" height="50" />
                <nav>
                    <aside>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Menu</a></li>
                            <li><a href="/">Reservations</a></li>
                            <li><a href="/">Order online</a></li>
                            <li><a href="/">Login</a></li>
                        </ul>
                    </aside>
                    <aside>
                        <ul>
                            <li><a href="/">Address</a></li>
                            <li><a href="/">Phone no.</a></li>
                            <li><a href="/">Email</a></li>
                        </ul>
                    </aside>
                    <aside>
                        <ul>
                            <li><a href="/">Address</a></li>
                            <li><a href="/">Phone no.</a></li>
                            <li><a href="/">Email</a></li>
                        </ul>
                    </aside>
                </nav>
            </footer>
        </>
    );
}

export default Footer;
