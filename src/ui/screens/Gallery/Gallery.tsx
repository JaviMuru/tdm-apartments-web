import sliderImage1 from '../../assets/images/slider/1.jpg'
import sliderImage2 from '../../assets/images/slider/2.jpg'
import sliderImage3 from '../../assets/images/slider/3.jpg'
import sliderImage4 from '../../assets/images/slider/4.jpg'
import sliderImage7 from '../../assets/images/slider/7.jpg'

import '../Home/Home.styles.css'
import '../Home/Home.new.styles.css'
import { Navbar } from '../../components/Navbar'
import React from 'react'
import { Footer } from '../../components/Footer'
import { ImageGallery } from './components/ImageGallery'

export const Gallery = () => {
  return (
    <>
      <Navbar />
      <ImageGallery />
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">Videos</div>
              <div className="section-title">Video Gallery</div>
            </div>
            <div className="col-md-6">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={sliderImage2} alt="YouTube" />
                  <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso">
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={sliderImage3} alt="Vimeo" />
                  <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso">
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={sliderImage4} alt="YouTube" />
                  <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso">
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={sliderImage7} alt="YouTube" />
                  <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso">
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img src={sliderImage1} alt="YouTube" />
                  <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso">
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>
                  </a>
                </div>
              </div>
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
