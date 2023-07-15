import { t, Trans } from '@lingui/macro'
import React from 'react'
import { Footer } from '../../components/Footer'
import { Form } from '../../components/Form/Form'
import { FormInput } from '../../components/FormInput'
import { FormSubmit } from '../../components/FormSubmit'
import { FormTextArea } from '../../components/FormTextArea'
import { Header } from '../../components/Header'

export const Book = () => (
  <main>
    <Header title={<Trans>Reserva tu apartamento</Trans>} />
    <section id="contact" className="contact-area after-none contact-bg pt-20 pb-120 p-relative fix">
      <div className="container">
        <div className="row justify-content-center align-items-start">
          <div className="col-lg-12 order-2">
            <Form title={<Trans>Reserva tu apartamento</Trans>}>
              <FormInput field="firstn" placeholder={t`Nombre`} />
              <FormInput field="email" placeholder={t`Correo electrónico`} />
              <FormInput field="phone" placeholder={t`Número de teléfono`} />
              <FormInput field="subject" placeholder={t`Asunto`} />
              <FormInput field="apartment" placeholder={t`Apartamento`} />
              <FormInput field="numberOfPeople" placeholder={t`Número de personas`} />
              <div className="col-lg-12">
                <FormTextArea field="message" placeholder={t`Escribe tu mensaje`} />
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
