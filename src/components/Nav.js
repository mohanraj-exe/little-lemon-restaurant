import '../styles/Nav.css';

function Nav() {
    return (
        <>
            <header>
                <nav className='container nav'>
                    <img src="hamburger.svg" alt="hamburger-icon" width="30px" />
                    <img src="logo-final.jpg" alt="restaurant-logo" width="200" height="50" />
                    <img src="basket.svg" alt="basket-icon" width="40px" />
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav;