
import React from 'react'
import '../../styles/body.css'



const MainBody = () => {
  return (
    <>
        <section className="contentt container py-5 d-flex flex-column flex-md-row align-items-center m-10">
        {/* Left Side */}
        <div className="left col-md-6">
          <span className="promo-badge badge bg-dark text-white mb-2">New Collection 2025</span>
          <h1 className="mb-5 mainTitle">
            Discover Stylish <span className="text-primary">Fashion</span> For Every Season
          </h1>
          <p className="mb-5 fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
           Vestibulum ante ipsum primis in faucibus.
          </p>
  
          {/* Call to Action */}
          <div className="hero-cta mb-4 d-flex gap-3">
            <a href="h" className="btn btn-primary fs-4 p-2">
              Shop Now <i className="bi bi-arrow-right"></i>
            </a>
            <a href="h" className="btn btn-outline-secondary fs-4 p-2">
              View Collection
            </a>
          </div>
  
          {/* Features */}
          <div className="hero-features d-flex gap-4">
            <div className="feature-item d-flex align-items-center gap-2">
              <i className="bi bi-truck fs-4"></i>
              <span className='fs-5'>Free Shipping</span>
            </div>
            <div className="feature-item d-flex align-items-center gap-2">
              <i className="bi bi-shield-check fs-4"></i>
              <span className='fs-5'>Secure Payment</span>
            </div>
            <div className="feature-item d-flex align-items-center gap-2">
              <i className="bi bi-arrow-repeat fs-4"></i>
              <span className='fs-5'>Easy Returns</span>
            </div>
          </div>
        </div>
  
        {/* Right Side */}
        <div className="right col-md-6 d-flex justify-content-center mt-4 mt-md-0">
  <div className="hero-image position-relative" data-aos="fade-left" data-aos-delay="200">
    <img
      src="assets/wom.png"
      alt="Fashion Product"
      className="main-product img-fluid rounded"
      loading="lazy"
    />

    {/* Floating Product 1 */}
    <div
      className="d-flex product-1 position-absolute product-info bg-white p-2 rounded shadow-sm"
      data-aos="fade-up"
      data-aos-delay="300"
      style={{ top: '10%' }}
    >
      <img src="assets/hoodie.png" alt="Product 2" className="img-fluid img-decor" />
      <div className="text-center">
        <h6 className="mb-1">Summer Collection</h6>
        <span className="price text-primary">$89.99</span>
      </div>
    </div>

    {/* Floating Product 2 */}
    <div
      className="d-flex product-2 position-absolute product-info bg-white p-2 rounded shadow-sm "
      data-aos="fade-up"
      data-aos-delay="400"
      style={{ bottom: '10%', right: '5%' }}
    >
      <img src="assets/glasses.png" alt="Product 3" className="img-fluid img-decor" />
      <div className="text-center">
        <h6 className="mb-1">Casual Wear</h6>
        <span className="price text-primary">$59.99</span>
      </div>
    </div>

    {/* Discount Badge */}
    <div
      className="discount-badge position-absolute bg-danger text-white text-center rounded-circle d-flex flex-column justify-content-center align-items-center"
      data-aos="zoom-in"
      data-aos-delay="500"
      style={{
        width: '60px',
        height: '60px',
        top: '10px',
        right: '10px',
      }}
    >
      <span className="percent fw-bold">30%</span>
      <span className="text small">OFF</span>
    </div>
  </div>
</div>

      </section>
    
    </>
  )
}

export default MainBody