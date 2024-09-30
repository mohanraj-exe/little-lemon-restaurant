import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    username: "John doe",
    img: 'greek-salad.jpg',
    rating: "Rating",
    review: "The bruschetta was a delightful start to our meal. The bread was perfectly toasted, and the tomato topping was fresh and flavorful with just the right amount of garlic and basil. A simple dish, but it was executed flawlessly."
  },
  {
    id: 2,
    username: "Peter",
    img: 'greek-salad.jpg',
    rating: "Rating",
    review: "A classic Greek salad done right! The crunchy cucumbers, juicy tomatoes, and briny olives were delicious, and the red onions added a nice kick. The feta cheese was generously portioned, and the olive oil dressing tied it all together beautifully."
  },
  {
    id: 3,
    username: "Maria",
    img: 'greek-salad.jpg',
    rating: "Rating",
    review: "This lemon dessert was absolutely divine! The tartness of the lemon was balanced perfectly with just the right amount of sweetness. It had a lovely velvety texture that melted in your mouth. I could eat this every day!"
  },
  {
    id: 4,
    username: "Kate",
    img: 'greek-salad.jpg',
    rating: "Rating",
    review: "Loved the bruschetta! The combination of ripe tomatoes, fresh basil, and a drizzle of balsamic glaze made for an explosion of flavors. The bread was crispy but not too hard, making each bite a pleasure."
  }
]

function Testimonials() {
  return (
    <>
      <section className='testimonials-section'>
        <section className='container'>
          <h2 className='testimonials-title'>Testimonials!</h2>
          <section className='review-grid'>

            {
              testimonials.map(user => (
                  <article key={user.id} className='review-section'>
                    <h3 className='username'>{user.username}</h3>
                    <img src={user.img} alt="user-profile-img" />
                    <h4 className='rating'>{user.rating}</h4>
                    <p className='review'>{user.review}</p>
                  </article>
              ))
            }

          </section>
        </section>
      </section>
    </>
  )
}

export default Testimonials