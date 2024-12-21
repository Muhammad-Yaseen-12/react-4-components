// import React from 'react'

// function News() {
//   return (
//     <div>
//         <section class="newsletter">
//     <div class="newsletter-content">
//         <div class="newsletter-text">
//             <h2>Let's Get In Touch</h2>
//             <p>Sign up for our newsletter and receive 10% off your</p>
//         </div>
//         <form action="">
//             <input type="email" placeholder="Enter Your Email..." required>
//             <input type="submit" placeholder="Subscribe" class="btnn">
//         </form>
//     </div>
// </section>
//     </div>
//   )
// }

// export default News
import React from 'react';

function News() {
  return (
    <div>
      <section className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Let's Get In Touch</h2>
            <p>Sign up for our newsletter and receive 10% off your</p>
          </div>
          <form action="">
            <input type="email" placeholder="Enter Your Email..." required />
            <input type="submit" value="Subscribe" className="btnn" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default News;
