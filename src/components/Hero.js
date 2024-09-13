import '../styles/Hero.css';

export default function Hero() {
  return (
    <>
      <section className='hero-section'>
        <section className='container'>
          <h2 className='res-title'>Little lemon</h2>
          <h3 className='res-location'>Chicago</h3>
          <article className='cta'>
            <aside>
              <p>
                We are a family owned Meditteranean restaurant, focused on traditional recipes served
                with a modern twist.
              </p>
              <button>Reserve a table</button>
            </aside>
            <img className='banner-img' src="restauranfood.jpg" alt="restaurant-food-serving" />
          </article>
        </section>
      </section>
    </>
  )
}
