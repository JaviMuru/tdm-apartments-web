import { Navbar } from '../../components/Navbar'
import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export const Contact = () => {
  return (
    <>
      <Navbar />
      <Header title="Contact Us" subtitle="Get in touch" image="backgroundGallery.jpg" />
      <section className="contact section-padding">
        <div className="container">
          <div className="row mb-90">
            <div className="col-md-6 mb-60">
              <h3>The Cappa Luxury Hotel</h3>
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque
                penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.
              </p>
              <div className="reservations mb-30">
                <div className="icon">
                  <span className="flaticon-call"></span>
                </div>
                <div className="text">
                  <p>Reservation</p> <a href="tel:855-100-4444">855 100 4444</a>
                </div>
              </div>
              <div className="reservations mb-30">
                <div className="icon">
                  <span className="flaticon-envelope"></span>
                </div>
                <div className="text">
                  <p>Email Info</p> <a href="mailto:info@luxuryhotel.com">info@luxuryhotel.com</a>
                </div>
              </div>
              <div className="reservations">
                <div className="icon">
                  <span className="flaticon-location-pin"></span>
                </div>
                <div className="text">
                  <p>Address</p> 1616 Broadway NY, New York 10001
                  <br />
                  United States of America
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-30 offset-md-1">
              <h3>Get in touch</h3>
              <form method="post" className="contact__form" action="mail.php">
                <div className="row">
                  <div className="col-12">
                    <div className="alert alert-success contact__msg" style={{ display: 'none' }} role="alert">
                      {' '}
                      Your message was sent successfully.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input name="name" type="text" placeholder="Your Name *" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="email" type="email" placeholder="Your Email *" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="phone" type="text" placeholder="Your Number *" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="subject" type="text" placeholder="Subject *" required />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea name="message" id="message" placeholder="Message *" />
                  </div>
                  <div className="col-md-12">
                    <button className="butn-dark">
                      <a href="#0">
                        <span>Send Message</span>
                      </a>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 map animate-box" data-animate-effect="fadeInUp">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573147.7480448114!2d-74.84628175962355!3d41.04009641088412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856139b3d33%3A0xb2739f33610a08ee!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1646760525018!5m2!1str!2str"
                width="100%"
                height="600"
                style={{ border: 0 }}
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div
          className="background bg-img bg-fixed section-padding pb-0"
          data-background="img/slider/2.jpg"
          data-overlay-dark="2">
          <div className="container">
            <div className="row">
              <div className="col-md-5 mb-30 mt-30">
                <p>
                  <i className="star-rating"></i>
                  <i className="star-rating"></i>
                  <i className="star-rating"></i>
                  <i className="star-rating"></i>
                  <i className="star-rating"></i>
                </p>
                <h5>
                  Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.
                </h5>
                <div className="reservations mb-30">
                  <div className="icon color-1">
                    <span className="flaticon-call"></span>
                  </div>
                  <div className="text">
                    <p className="color-1">Reservation</p>{' '}
                    <a className="color-1" href="tel:855-100-4444">
                      855 100 4444
                    </a>
                  </div>
                </div>
                <p>
                  <i className="ti-check"></i>
                  <small>Call us, it's toll-free.</small>
                </p>
              </div>
              <div className="col-md-5 offset-md-2">
                <div className="booking-box">
                  <div className="head-box">
                    <h6>Rooms & Suites</h6>
                    <h4>Hotel Booking Form</h4>
                  </div>
                  <div className="booking-inner clearfix">
                    <form action="rooms2.html" className="form1 clearfix">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input1_wrapper">
                            <label>Check in</label>
                            <div className="input1_inner">
                              <input type="text" className="form-control input datepicker" placeholder="Check in" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input1_wrapper">
                            <label>Check out</label>
                            <div className="input1_inner">
                              <input type="text" className="form-control input datepicker" placeholder="Check out" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="select1_wrapper">
                            <label>Adults</label>
                            <div className="select1_inner">
                              <select className="select2 select" style={{ width: '100%' }}>
                                <option value="0">Adults</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="select1_wrapper">
                            <label>Children</label>
                            <div className="select1_inner">
                              <select className="select2 select" style={{ width: '100%' }}>
                                <option value="0">Children</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="btn-form1-submit mt-15">
                            Check Availability
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
