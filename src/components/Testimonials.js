import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    username: "John doe",
    img: 'https://avatar.iran.liara.run/public',
    rating: "Rating : 3.5/5",
    review: "The bruschetta was a delightful start to our meal. The bread was perfectly toasted, and the tomato topping was fresh and flavorful with just the right amount of garlic and basil. A simple dish, but it was executed flawlessly."
  },
  {
    id: 2,
    username: "Peter",
    img: 'https://avatar.iran.liara.run/public/6',
    rating: "Rating : 3/5",
    review: "A classic Greek salad done right! The crunchy cucumbers, juicy tomatoes, and briny olives were delicious, and the red onions added a nice kick. The feta cheese was generously portioned, and the olive oil dressing tied it all together beautifully."
  },
  {
    id: 3,
    username: "Aaron",
    img: 'https://avatar.iran.liara.run/public/16',
    rating: "Rating : 4/5",
    review: "This lemon dessert was absolutely divine! The tartness of the lemon was balanced perfectly with just the right amount of sweetness. It had a lovely velvety texture that melted in your mouth. I could eat this every day!"
  },
  {
    id: 4,
    username: "Maria",
    img: 'https://avatar.iran.liara.run/public/91',
    rating: "Rating : 4.5/5",
    review: "Loved the bruschetta! The combination of ripe tomatoes, fresh basil, and a drizzle of balsamic glaze made for an explosion of flavors. The bread was crispy but not too hard, making each bite a pleasure."
  }
]

function Testimonials() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      nextTestimonial();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevTestimonial = () => {
    setCurrentIndex((preValue) => (
      preValue === 0 ? testimonials.length - 1 : preValue - 1
    ))
  };

  const nextTestimonial = () => {
    setCurrentIndex((preValue) => (
      preValue === testimonials.length - 1 ? 0 : preValue + 1
    ))
  };

  return (
    <>
      <section className='testimonials-section'>
        <section className='container'>
          <h2 className='testimonials-title'>Testimonials!</h2>

          <section className='testimonial-col'>
            
            <article key={testimonials[currentIndex].id} className='testimonial-card'>

              <h3 className='username'>{testimonials[currentIndex].username}</h3>
              <img src={testimonials[currentIndex].img} alt="user-profile-img" />
              <h4 className='rating'>{testimonials[currentIndex].rating}</h4>
              <p className='review'>{testimonials[currentIndex].review}</p>
            </article>

            <aside className='controls'>
              <button onClick={prevTestimonial}>Previous</button>
              <button onClick={nextTestimonial}>Next</button>
            </aside>

          </section>
        </section>
      </section>
    </>
  )
}

export default Testimonials