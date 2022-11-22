import room2 from '../../assets/images/rooms/2.jpg'
import room8 from '../../assets/images/rooms/8.jpg'

export const About = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
            <span>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
            </span>
            <div className="section-subtitle">The Cappa Luxury Hotel</div>
            <div className="section-title">Enjoy a Luxury Experience</div>
            <p>
              Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam
              justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere
              blane.
            </p>
            <p>
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque
              penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.
            </p>
            <div className="reservations">
              <div className="icon">
                <span className="flaticon-call"></span>
              </div>
              <div className="text">
                <p>Reservation</p> <a href="tel:855-100-4444">855 100 4444</a>
              </div>
            </div>
          </div>
          <div className="col col-md-3 animate-box" data-animate-effect="fadeInUp">
            <img src={room8} alt="" className="mt-90 mb-30" />
          </div>
          <div className="col col-md-3 animate-box" data-animate-effect="fadeInUp">
            <img src={room2} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
