import { Trans } from '@lingui/macro'
import React from 'react'
import { Link } from 'react-router-dom'
import anImg2 from '../../../assets/img/bg/an-img-02.png'
import anImg5 from '../../../assets/img/bg/an-img-05.png'
import anImg7 from '../../../assets/img/bg/an-img-07.png'
import skillsBackground from '../../../assets/img/bg/skills-img.png'
import aboutImg2 from '../../../assets/img/features/about_img_02.png'
import aboutImg3 from '../../../assets/img/features/about_img_03.png'
import featureImg from '../../../assets/img/features/feature.png'
import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'

export const About = () => {
  return (
    <>
      <main>
        <Header title={<Trans>Sobre nosotros</Trans>} />
        <section className="about-area about-p pt-120 pb-120 p-relative fix">
          <div className="animations-02">
            <img src={anImg2} alt="contact-bg-an-02" />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="s-about-img p-relative  wow fadeInLeft animated"
                  data-animation="fadeInLeft"
                  data-delay=".4s">
                  <img src={aboutImg2} alt="img" />
                  <div className="about-icon">
                    <img src={aboutImg3} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="about-content s-about-content  wow fadeInRight  animated pl-30"
                  data-animation="fadeInRight"
                  data-delay=".4s">
                  <div className="about-title second-title pb-25">
                    <h5>
                      <Trans>Sobre nosotros</Trans>
                    </h5>
                    <h2>8 apartamentos en Tossa de Mar</h2>
                  </div>
                  <p>Párrafo 1</p>
                  <p>Párrafo 2</p>
                  <div className="about-content3 mt-30">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-md-12">
                        <ul className="green mb-30">
                          <li> Check 1</li>
                          <li> Check 1</li>
                          <li> Check 1</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skill" className="skill-area p-relative fix" style={{ background: '#291d16' }}>
          <div className="animations-01">
            <img src={anImg5} alt="contact-bg-an-05" />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="skills-content s-about-content">
                  <div className="skills-title pb-20">
                    <h5>Rio We Use</h5>
                    <h2>We Offer Wide Selection of Hotel</h2>
                  </div>
                  <p>
                    Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus,
                    ac suscipit ipsum consequat porttitor.
                  </p>
                  <div className="skills-content s-about-content mt-20">
                    <div className="skills">
                      <div className="skill mb-30">
                        <div className="skill-name">Qulity Production</div>
                        <div className="skill-bar">
                          <div className="skill-per" id="80" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      <div className="skill mb-30">
                        <div className="skill-name">Maintenance Services</div>
                        <div className="skill-bar">
                          <div className="skill-per" id="90" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div className="skill mb-30">
                        <div className="skill-name">Product Managment</div>
                        <div className="skill-bar">
                          <div className="skill-per" id="70" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                <div className="skills-img wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                  <img src={skillsBackground} alt="img" className="img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-area2 p-relative fix" style={{ background: '#f7f5f1' }}>
          <div className="animations-02">
            <img src={anImg2} alt="contact-bg-an-05" />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                <div className="feature-img">
                  <img src={featureImg} alt="img" className="img" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="feature-content s-about-content">
                  <div className="feature-title pb-20">
                    <h5>Luxury Hotel & Resort</h5>
                    <h2>Pearl Of The Adriatic.</h2>
                  </div>
                  <p>
                    Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus,
                    ac suscipit ipsum consequat porttitor.Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia
                    quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.
                  </p>
                  <p>
                    Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas
                    consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo
                    mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.
                  </p>
                  <div className="slider-btn mt-15">
                    <Link to="/about" className="btn ss-btn smoth-scroll">
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="newslater-area p-relative pt-120 pb-120" style={{ background: '#f7f5f1' }}>
          <div className="animations-01">
            <img src={anImg7} alt="contact-bg-an-05" />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-xl-9 col-lg-9">
                <div
                  className="section-title center-align mb-40 text-center wow fadeInDown animated"
                  data-animation="fadeInDown"
                  data-delay=".4s">
                  <h5>Newsletter</h5>
                  <h2>Obten las mejores ofertas</h2>
                  <p>
                    Subscribiéndote a nuestro newsletter obtendras las mejores ofertas para reservar nuestros
                    apartamentos
                  </p>
                </div>
                <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email3"
                      name="email"
                      type="email"
                      placeholder="Tu correo electrónico"
                      value=""
                    />
                    <button type="submit" className="btn btn-custom" id="send2">
                      Suscríbete
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
