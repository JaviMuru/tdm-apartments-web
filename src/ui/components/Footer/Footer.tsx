import { Trans } from '@lingui/macro'
import React from 'react'
import { Link } from 'react-router-dom'
import BGImg from '../../assets/img/bg/footer-bg.png'
import footerLogo from '../../assets/img/logo/logo1.png'
import { Copyright } from './_components/Copyright'
import { FooterLink } from './_components/FooterLink'

export const Footer = () => {
  return (
    <>
      <footer className="footer-bg footer-p">
        <div
          className="footer-top  pt-90 pb-40"
          style={{
            backgroundColor: '#644222',
            backgroundImage: `url(${BGImg})`
          }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title mb-30">
                    <img src={footerLogo} alt="img" />
                  </div>
                  <div className="f-contact">
                    <ul>
                      {/*      <li>
                        <i className="icon fal fa-phone"></i>
                        <span>
                          1800-121-3637
                          <br />
                          +91-7052-101-786
                        </span>
                      </li>*/}
                      <li>
                        <span>
                          <i className="icon fal fa-envelope"></i>
                          <Link to="#">tdmapartamentos@gmail.com</Link>
                        </span>
                      </li>
                      {/*<li>
                        <i className="icon fal fa-map-marker-check"></i>
                        <span>
                          1247/Plot No. 39, 15th Phase,
                          <br /> LHB Colony, Kanpur
                        </span>
                      </li>*/}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Enlaces</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <FooterLink title={<Trans>Inicio</Trans>} url="/" />
                      <FooterLink title={<Trans>Sobre nosotros</Trans>} url="/about" />
                      <FooterLink title={<Trans>Apartamentos</Trans>} url="/apartments" />
                      <FooterLink title={<Trans>Servicios</Trans>} url="/services" />
                      <FooterLink title={<Trans>Contacto</Trans>} url="/contact" />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Servicios</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <FooterLink title={<Trans>FAQ</Trans>} url="/faq" />
                      <FooterLink title={<Trans>Soporte</Trans>} url="#" />
                      <FooterLink title={<Trans>Privacidad</Trans>} url="#" />
                      <FooterLink title={<Trans>Terminos y condiciones</Trans>} url="#" />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Localización</h2>
                  </div>
                  {/*
                  <div className="footer-link">
                    <p>Subscribe our newsletter to get our latest update &amp; News</p>
                    <div className="subricbe p-relative" data-animation="fadeInDown" data-delay=".4s">
                      <form action="news-mail.php" method="post" className="contact-form ">
                        <input
                          type="text"
                          id="email2"
                          name="email2"
                          className="header-input"
                          placeholder="Your Email..."
                          required
                        />
                        <button className="btn header-btn">
                          <i className="fas fa-location-arrow"></i>
                        </button>
                      </form>
                    </div>
                  </div>
*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  )
}
