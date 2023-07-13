import FsLightbox from 'fslightbox-react'
import React, { useState } from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Hotel from '../../../assets/img/bg/an-img-01.png'
import About from '../../../assets/img/bg/an-img-02.png'
import Resort from '../../../assets/img/bg/an-img-02.png'
import pricing1 from '../../../assets/img/bg/an-img-02.png'
import Booking from '../../../assets/img/bg/booking-img.png'
import Play from '../../../assets/img/bg/play-button.png'
import BGVideo from '../../../assets/img/bg/video-bg.png'
import About1 from '../../../assets/img/features/about_img_02.png'
import About2 from '../../../assets/img/features/about_img_03.png'
import Resort1 from '../../../assets/img/features/feature.png'
import Hotel1 from '../../../assets/img/icon/fe-icon01.png'
import Hotel2 from '../../../assets/img/icon/fe-icon04.png'
import Hotel3 from '../../../assets/img/icon/fe-icon05.png'
import videoBackground from '../../../assets/videos/videoBg.mp4'
import { Footer } from '../../../components/Footer'
import { apartmentsData } from '../Apartments/_data/ApartmentsData'
import { RoomSlide } from './_components/RoomSlide/RoomSlide'
import { ServiceCard } from './_components/ServiceCard'
import { Testimonials } from './_components/Testimonials'
import { service } from './data'

export const Home = () => {
  const [yShow, setyShow] = useState<boolean>()
  const [hShow, sethShow] = useState<boolean>()
  const [animation, setanimation] = useState()

  const [toggler, setToggler] = useState<boolean>(false)
  const [activeImage, setActiveImage] = useState(1)
  const images = [
    'assets/img/gallery/room-img01.png',
    'assets/img/gallery/room-img02.png',
    'assets/img/gallery/room-img03.png',
    'assets/img/gallery/room-img04.png',
    'assets/img/gallery/room-img05.png',
    'assets/img/gallery/room-img06.png'
  ]

  return (
    <>
      <FloatingWhatsApp accountName="TDM" phoneNumber="34689885990" />
      <main>
        <div className="single-slider slider-bg d-flex align-items-center">
          <video
            src={videoBackground}
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              width: '100wh',
              height: '100vh',
              objectFit: 'cover',
              zIndex: -11,
              top: '-85px'
            }}>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-7 col-md-7">
                  <div className="slider-content s-slider-content mt-80 text-center">
                    <h2
                      className={`${animation && 'animation' && 'fadeInUp'} `}
                      data-animation="fadeInUp"
                      data-delay=".4s"
                      style={{ animationDelay: '0.4s' }}>
                      Enjoy A Luxuary Experience
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      Donec vitae libero non enim placerat eleifend aliquam erat
                      volutpat. Curabitur diam ex, dapibus purus sapien, cursus
                      sed nisl tristique, commodo gravida lectus non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </video>
        </div>
        <section className="about-area about-p pt-120 pb-120 p-relative fix">
          <div className="animations-02">
            <img src={About} alt="contact-bg-an-02" />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="s-about-img p-relative  wow fadeInLeft animated"
                  data-animation="fadeInLeft"
                  data-delay=".4s">
                  <img src={About1} alt="img" />
                  <div className="about-icon">
                    <img src={About2} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="about-content s-about-content  wow fadeInRight  animated pl-30"
                  data-animation="fadeInRight"
                  data-delay=".4s">
                  <div className="about-title second-title pb-25">
                    <h5>Sobre nosotros</h5>
                    <h2>8 apartamentos</h2>
                  </div>
                  <p>Descripcion</p>
                  <p>Descripcion</p>
                  <div className="about-content3 mt-30">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-md-12">
                        <ul className="green mb-30">
                          <li> Check 1</li>
                          <li> Check 2</li>
                          <li> Check 3</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <div className="slider-btn">
                          <Link
                            to="/apartments"
                            className="btn ss-btn smoth-scroll">
                            Ver apartamentos
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="service-details2"
          className="pt-120 pb-90 p-relative"
          style={{ background: '#f7f5f1' }}>
          <div className="animations-01">
            <img src={Hotel} alt="an-img-01" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="section-title center-align mb-50 text-center">
                  <h5>Explora</h5>
                  <h2>Tossa de Mar</h2>
                  <p>Descripción</p>
                </div>
              </div>
              <ServiceCard
                title="Actividades"
                description="Descripcion"
                image={Hotel1}
                url="/activities"
              />
              <ServiceCard
                title="Playa y calas"
                description="Descripcion"
                image={Hotel2}
                url="/beach-details"
              />
              <ServiceCard
                title="Qué ver1"
                description="Descripcion"
                image={Hotel3}
                url="/what-to-see"
              />
            </div>
          </div>
        </section>
        <section id="services" className="services-area pt-113 pb-150">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="section-title center-align mb-50 text-center">
                  <h5>El placer de conocer Tossa de Mar</h5>
                  <h2>Apartamentos</h2>
                  <p>Descripción</p>
                </div>
              </div>
            </div>
            <Slider className="row services-active" {...service}>
              {apartmentsData.map(apartment => (
                <RoomSlide
                  title={apartment.name}
                  description={apartment.description}
                />
              ))}
            </Slider>
          </div>
        </section>
        <section
          className="feature-area2 p-relative fix"
          style={{ background: '#f7f5f1' }}>
          <div className="animations-02">
            <img src={Resort} alt="contact-bg-an-05" />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                <div className="feature-img">
                  <img src={Resort1} alt="img" className="img" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="feature-content s-about-content">
                  <div className="feature-title pb-20">
                    <h5>Explora</h5>
                    <h2>Descubre Tossa de Mar</h2>
                  </div>
                  <p>Descripcion</p>
                  <p>Descripcion</p>
                  <div className="slider-btn mt-15">
                    <Link to="/what-to-see" className="btn ss-btn smoth-scroll">
                      Descubre
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="pricing-area pt-120 pb-60 fix p-relative">
          <div className="animations-01">
            <img src={Hotel} alt="an-img-01" />
          </div>
          <div className="animations-02">
            <img src={pricing1} alt="contact-bg-an-01" />
          </div>
          {/*
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="section-title mb-20">
                  <h5>Mejores precios</h5>
                  <h2>Servicios Extra</h2>
                </div>
                <p>Descripcion</p>
                <p>Descripcion</p>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-box pricing-box2 mb-60">
                  <div className="pricing-head">
                    <h3>Limpieza de apartamento</h3>
                    <div className="month">Diario</div>
                    <div className="price-count">
                      <h2>$39.99</h2>
                    </div>
                    <hr />
                  </div>
                  <div className="pricing-body mt-20 mb-30 text-left">
                    <ul>
                      <li>Hotel quis justo at lorem</li>
                      <li>Fusce sodales, urna et tempus</li>
                      <li>Vestibulum blandit lorem quis</li>
                    </ul>
                  </div>
                  <div className="pricing-btn">
                    <Link to="/contact" className="btn ss-btn">
                      Get Started <i className="fal fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-box pricing-box2 mb-60">
                  <div className="pricing-head">
                    <h3>Drinks included</h3>
                    <p>Perfect for early-stage startups</p>
                    <div className="month">Monthly</div>
                    <div className="price-count">
                      <h2>$59.99</h2>
                    </div>
                    <hr />
                  </div>
                  <div className="pricing-body mt-20 mb-30 text-left">
                    <ul>
                      <li>Hotel quis justo at lorem</li>
                      <li>Fusce sodales, urna et tempus</li>
                      <li>Vestibulum blandit lorem quis</li>
                    </ul>
                  </div>
                  <div className="pricing-btn">
                    <Link to="/contact" className="btn ss-btn">
                      Get Started <i className="fal fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
*/}
        </section>
        <Testimonials />
        <section className="booking pt-120 pb-120 p-relative fix">
          <div className="animations-01">
            <img src={Hotel} alt="an-img-01" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="contact-bg02">
                  <div className="section-title center-align">
                    <h5>tdm apartments</h5>
                    <h2>Reserva tu apartamento</h2>
                  </div>
                  <form
                    action="mail.php"
                    method="post"
                    className="contact-form mt-30">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="contact-field p-relative c-name mb-20">
                          <label>
                            <i className="fal fa-badge-check"></i> Check In
                          </label>
                          <input type="date" id="chackin2" name="date" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="contact-field p-relative c-subject mb-20">
                          <label>
                            <i className="fal fa-times-octagon"></i> Check Out
                          </label>
                          <input type="date" id="chackout2" name="date" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="contact-field p-relative c-subject mb-20">
                          <label>
                            <i className="fal fa-users"></i> Adultos
                          </label>
                          <select name="adults" id="adu2">
                            <option value="sports-massage">Adultos</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="contact-field p-relative c-option mb-20">
                          <label>
                            <i className="fal fa-concierge-bell"></i>{' '}
                            Apartamento
                          </label>
                          <select name="room" id="rm2">
                            <option value="sports-massage">Apartamento</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="slider-btn mt-15">
                          <button
                            className="btn ss-btn"
                            data-animation="fadeInRight"
                            data-delay=".8s">
                            <span>Reserva</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="booking-img">
                  <img src={Booking} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="video"
          className="video-area pt-150 pb-150 p-relative"
          style={{
            backgroundImage: `url(${BGVideo})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover'
          }}>
          <div className="content-lines-wrapper2">
            <div className="content-lines-inner2">
              <div className="content-lines2"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="s-video-wrap">
                  <div className="s-video-content">
                    <Link
                      to="#"
                      className="popup-video"
                      onClick={() => setyShow(true)}>
                      <img src={Play} alt="circle_right" />
                    </Link>
                  </div>
                </div>
                <div className="section-title center-align text-center">
                  <h2>Un tour por tossa</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FsLightbox toggler={toggler} sources={images} slide={activeImage} />
      {yShow && (
        <>
          <div className="mfp-bg mfp-ready"></div>
          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
            tabIndex={-1}
            style={{ overflow: 'hidden' }}>
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                    onClick={() => setyShow(false)}>
                    ×
                  </button>
                  <iframe
                    className="mfp-iframe"
                    src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1"
                    allowFullScreen={undefined}
                  />
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>
        </>
      )}
      {hShow && (
        <>
          <div className="mfp-bg mfp-ready"></div>
          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
            tabIndex={-1}
            style={{ overflow: 'hidden' }}>
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                    onClick={() => sethShow(false)}>
                    ×
                  </button>
                  <iframe
                    className="mfp-iframe"
                    src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1"
                    allowFullScreen={true}
                  />
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  )
}
