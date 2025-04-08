
import React from 'react'

const BottomFooter = () => {
  return (
    <>
      <div className="footer-bottom p-5">
    <div className="container">

      <div className="payment-methods d-flex align-items-center justify-content-center">
        <span>We Accept:</span>
        <div className="payment-icons">
          <i className="bi bi-credit-card m-2" aria-label="Credit Card"></i>
          <i className="bi bi-paypal m-2" aria-label="PayPal"></i>
          <i className="bi bi-apple m-2" aria-label="Apple Pay"></i>
          <i className="bi bi-google m-2" aria-label="Google Pay"></i>
          <i className="bi bi-shop m-2" aria-label="Shop Pay"></i>
          <i className="bi bi-cash m-2" aria-label="Cash on Delivery"></i>
        </div>
      </div>

      <div className="legal-links d-flex justify-content-center">
        <a href="tos.html">Terms of Service</a>
        <a href="privacy.html">Privacy Policy</a>
        <a href="tos.html">Cookies Settings</a>
      </div>

      <div className="copyright text-center">
        <p>© <span>Copyright</span> <strong className="sitename">eStore</strong>. All Rights Reserved.</p>
      </div>

      <div className="credits d-flex justify-content-center">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>

    </div>
  </div>
    </>
  )
}

export default BottomFooter