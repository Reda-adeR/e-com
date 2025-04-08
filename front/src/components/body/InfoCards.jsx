
import React from 'react'

const cardData = [
    {
      icon: "bi-truck",
      title: "Free Shipping",
      description: "Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus. Ut quis tempor felis sed nunc viverra.",
      delay: 200,
    },
    {
      icon: "bi-piggy-bank",
      title: "Money Back Guarantee",
      description: "Nullam gravida felis ac nunc tincidunt, sed malesuada justo pulvinar. Vestibulum nec diam vitae eros.",
      delay: 300,
    },
    {
      icon: "bi-percent",
      title: "Discount Offers",
      description: "Nulla ipsum nisi vel adipiscing amet, dignissim consectetur ornare. Vestibulum quis posuere elit auctor.",
      delay: 400,
    },
    {
      icon: "bi-headset",
      title: "24/7 Support",
      description: "Ipsum dolor amet sit consectetur adipiscing, nullam vitae euismod tempor nunc felis vestibulum ornare.",
      delay: 500,
    },
  ];


const InfoCards = () => {
  return (
    <>
        <section id="info-cards" className="info-cards section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
        {cardData.map((card, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={card.delay}
            >
              <div className="info-card text-center">
                <div className="icon-box m-5">
                  <i className={`bi ${card.icon} fs-1`}></i>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default InfoCards