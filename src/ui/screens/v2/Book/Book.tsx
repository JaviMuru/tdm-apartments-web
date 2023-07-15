import { t, Trans } from '@lingui/macro'
import React from 'react'
import { Footer } from '../../../components/Footer'
import { Form } from '../../../components/Form/Form'
import { FormInput } from '../../../components/FormInput'
import { FormSubmit } from '../../../components/FormSubmit'
import { FormTextArea } from '../../../components/FormTextArea'
import { Header } from '../../../components/Header'

export const Book = () => (
  <main>
    <Header title={<Trans>Reserva tu apartamento</Trans>} />
    <section id="contact" className="contact-area after-none contact-bg pt-20 pb-120 p-relative fix">
      <div className="container">
        <div className="row justify-content-center align-items-start">
          <div className="col-lg-12 order-2">
            <Form title={<Trans>Reserva tu apartamento</Trans>}>
              <FormInput key="firstn" placeholder={t`Nombre`} />
              <FormInput key="email" placeholder={t`Correo electrónico`} />
              <FormInput key="phone" placeholder={t`Número de teléfono`} />
              <FormInput key="subject" placeholder={t`Asunto`} />
              <FormInput key="apartment" placeholder={t`Apartamento`} />
              <FormInput key="numberOfPeople" placeholder={t`Número de personas`} />
              <div className="col-lg-12">
                <FormTextArea key="message" placeholder={t`Escribe tu mensaje`} />
                <FormSubmit text={<Trans>Enviar</Trans>} />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
)
