import { t, Trans } from '@lingui/macro'
import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../../components/Footer'
import { Form } from '../../../components/Form/Form'
import { FormInput } from '../../../components/FormInput'
import { FormSubmit } from '../../../components/FormSubmit'
import { FormTextArea } from '../../../components/FormTextArea'
import { Header } from '../../../components/Header'
import { ContactItem } from './_components/ContactItem'

export const Contact = () => (
  <main>
    <Header title={<Trans>Contacto</Trans>} />
    <section id="contact" className="contact-area after-none contact-bg pt-20 pb-120 p-relative fix">
      <div className="container">
        <div className="row justify-content-center align-items-start">
          <div className="col-lg-4 order-1">
            <div className="contact-info">
              {/* <ContactItem
                title="Office Address"
                description={
                  <>
                    380 St Kilda Road, Melbourne <br />
                    VIC 3004, Australia
                  </>
                }
              />
              <ContactItem
                title="Working Hours"
                description={
                  <>
                    Monday to Friday 09:00 to 18:30 <br />
                    Saturday 15:30
                  </>
                }
              />*/}
              <ContactItem
                title={<Trans>Correo electrónico</Trans>}
                description={
                  <>
                    <Link to="#">tdmapartamentos@gmail.com</Link>
                    {/* <br />
                    <Link to="#">info@example.com</Link>*/}
                  </>
                }
              />
            </div>
          </div>
          <div className="col-lg-8 order-2">
            <Form title={<Trans>Contáctanos</Trans>}>
              <FormInput key="firstn" placeholder={t`Nombre`} />
              <FormInput key="email" placeholder={t`Correo electrónico`} />
              <FormInput key="phone" placeholder={t`Número de teléfono`} />
              <FormInput key="subject" placeholder={t`Asunto`} />
              <div className="col-lg-12">
                <FormTextArea key="message" placeholder={t`Escribe tu mensaje`} />
                <FormSubmit text={<Trans>Enviar</Trans>} />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
    {/*<section className="newslater-area p-relative pt-120 pb-120" style={{ background: '#f7f5f1' }}>
      <div className="animations-01">
        <img src={animationImage7} alt="contact-bg-an-05" />
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <Newsletter />
        </div>
      </div>
    </section>*/}
    <Footer />
  </main>
)
