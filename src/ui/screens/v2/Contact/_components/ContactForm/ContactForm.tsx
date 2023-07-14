import { t, Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React from 'react'

export const ContactForm = () => {
  useLingui()

  return (
    <div className="contact-bg02">
      <div
        className="section-title center-align mb-40 text-center wow fadeInDown animated"
        data-animation="fadeInDown"
        data-delay=".4s">
        <h2>
          <Trans>Contáctanos</Trans>
        </h2>
      </div>
      <form action="mail.php" method="post" className="contact-form mt-30">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact-field p-relative c-name mb-20">
              <input
                type="text"
                id="firstn"
                name="firstn"
                placeholder={t`Nombre`}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact-field p-relative c-subject mb-20">
              <input
                type="text"
                id="email"
                name="email"
                placeholder={t`Correo electrónico`}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact-field p-relative c-subject mb-20">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder={t`Número de teléfono`}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact-field p-relative c-subject mb-20">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder={t`Asunto`}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-field p-relative c-message mb-30">
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder={t`Escribe tu mensaje`}
              />
            </div>
            <div className="slider-btn">
              <button
                className="btn ss-btn"
                data-animation="fadeInRight"
                data-delay=".8s">
                <span>
                  <Trans>Enviar</Trans>
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
