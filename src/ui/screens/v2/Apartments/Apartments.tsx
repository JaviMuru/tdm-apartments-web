import { Trans } from '@lingui/macro'
import FsLightbox from 'fslightbox-react'
import React, { useState } from 'react'
import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'
import { ApartmentCard } from './_components/ApartmentCard'
import { apartmentsData } from './_data/ApartmentsData'

export const Apartments = () => {
  const [yShow, setyShow] = useState<boolean>()
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
      <main>
        <Header title={<Trans>Apartamentos</Trans>} />
        <section id="services" className="services-area pb-90">
          <div className="container">
            <div className="row">
              {apartmentsData.map((apartment, index) => (
                <ApartmentCard key={index} apartment={apartment} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <FsLightbox toggler={toggler} sources={images} slide={activeImage} />
      <Footer />
    </>
  )
}
