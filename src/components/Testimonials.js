import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <>
      <section className='testimonials-section'>
        <section className='container review-grid'>
          <h2 className='testimonials-title'>Testimonials!</h2>

          <article className='review-section'>
            <h3 className='username'>Username</h3>
            <img src="greek-salad.jpg" alt="user-profile-img" />
            <h4 className='rating'>Rating</h4>
            <p className='review'>
              "The bruschetta was a delightful start to our meal.
              The bread was perfectly toasted, and the tomato topping was fresh and flavorful with just the right amount of garlic and basil.
              A simple dish, but it was executed flawlessly."
            </p>
          </article>

          <article className='review-section'>
          <h3 className='username'>Username</h3>
          <img src="greek-salad.jpg" alt="user-profile-img" />
            <h4 className='rating'>Rating</h4>
            <p className='review'>
              "A classic Greek salad done right! The crunchy cucumbers, juicy tomatoes, and briny olives were delicious, and the red onions added a nice kick.
              The feta cheese was generously portioned, and the olive oil dressing tied it all together beautifully."
            </p>
          </article>

          <article className='review-section'>
          <h3 className='username'>Username</h3>
          <img src="lemon-dessert.jpg" alt="user-profile-img" />
            <h4 className='rating'>Rating</h4>
            <p className='review'>
              "This lemon dessert was absolutely divine!
              The tartness of the lemon was balanced perfectly with just the right amount of sweetness.
              It had a lovely velvety texture that melted in your mouth. I could eat this every day!"
            </p>
          </article>

          <article className='review-section'>
          <h3 className='username'>Username</h3>
          <img src="greek-salad.jpg" alt="user-profile-img" />
            <h4 className='rating'>Rating</h4>
            <p className='review'>
              "Loved the bruschetta! The combination of ripe tomatoes, fresh basil, and a drizzle of balsamic glaze made for an explosion of flavors.
              The bread was crispy but not too hard, making each bite a pleasure."
            </p>
          </article>
        </section>
      </section>
    </>
  )
}

export default Testimonials