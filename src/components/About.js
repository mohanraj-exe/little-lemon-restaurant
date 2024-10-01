import '../styles/Aboutus.css';

function About() {
    return (
        <>
            <section className='aboutus-section'>
                <section className='container'>
                    <article>
                        <h2 className='aboutus-title'>Who we are?</h2>
                        <img src="Mario-and-Adrian-A.jpg" alt="restaurant-owners-img" />
                        <h3 className='aboutus-owners-title'>Mario and adrian</h3>
                        <p className='aboutus-owners-description'>
                            Mario and Adrian, lifelong friends with a shared love for culinary arts, founded Little Lemon with a simple mission is to bring fresh, vibrant Mediterranean flavors to their community. With roots deeply embedded in Italian and Greek traditions, they wanted to create a space where every dish tells a story of their heritage, combined with modern twists that excite the palate.
                        </p>
                    </article>
                </section>
            </section>
        </>
    )
}

export default About