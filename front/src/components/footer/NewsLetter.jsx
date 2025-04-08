

import React from 'react'
import '../../styles/footer.css'


const NewsLetter = () => {
  return (
    <>
      <div className="footer-newsletter p-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2>Join Our Newsletter</h2>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form action="forms/newsletter.php" method="post" className="php-email-form">
            <div className="newsletter-form d-flex justify-content-center">
              <input className='inputnl p-2' type="email" name="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </div>
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your subscription request has been sent. Thank you!</div>
          </form>
        </div>
      </div>
    </div>
  </div>
        
    </>
  )
}

export default NewsLetter