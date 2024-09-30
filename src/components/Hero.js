import { Link } from 'react-router-dom';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <>
      <section className='hero-section'>
        <section className='container cta'>
          <h2 className='res-title item1'>Little lemon</h2>
          <h3 className='res-location item2'>Chicago</h3>
          <p className='item3'>
            We are a family owned Meditteranean restaurant, focused on traditional recipes served
            with a modern twist.
          </p>
          <Link to='/booking-page' className='item4'>
            <button>
              Reserve a table
            </button>
          </Link>
          <img className='banner-img item5' src="restaurantfood.jpg" alt="restaurant-food-serving" />
        </section>
      </section>
    </>
  )
}
