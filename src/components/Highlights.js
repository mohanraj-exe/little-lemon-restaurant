import '../styles/Highlights.css';

function Highlights() {
    return (
        <>
            <section className='highlights-section'>
                <section className='container'>
                    <h2 className='highlights-title'>This week specials!</h2>
                    <article className='dish-info'>
                        <aside>
                            <h4 className='dish-title'>Greek salad</h4>
                            <p className='dish-description'>
                                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons
                            </p>
                            <p className='dish-price'>$12.99</p>
                            <p className='dish-delivery'>Order a delivery</p>
                        </aside>
                        <img src="greek-salad.jpg" alt="restaurant-food-serving" />
                    </article>

                    <article className='dish-info'>
                        <aside>
                            <h4 className='dish-title'>Bruchetta</h4>
                            <p className='dish-description'>
                                Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <p className='dish-price'>$5.99</p>
                            <p className='dish-delivery'>Order a delivery</p>
                        </aside>
                        <img src="greek-salad.jpg" alt="restaurant-food-serving" />
                    </article>

                    <article className='dish-info'>
                        <aside>
                            <h4 className='dish-title'>Lemon dessert</h4>
                            <p className='dish-description'>
                            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                            <p className='dish-price'>$5.00</p>
                            <p className='dish-delivery'>Order a delivery</p>
                        </aside>
                        <img src="greek-salad.jpg" alt="restaurant-food-serving" />
                    </article>
                </section>
            </section>
        </>
    )
}

export default Highlights