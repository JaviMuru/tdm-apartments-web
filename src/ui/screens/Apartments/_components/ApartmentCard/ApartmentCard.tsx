import { Trans } from '@lingui/macro'
import React, { useState } from 'react'
import Lightbox from 'react-18-image-lightbox'
import { Link } from 'react-router-dom'
import icon1 from '../../../../assets/img/icon/sve-icon1.png'
import icon2 from '../../../../assets/img/icon/sve-icon2.png'
import icon3 from '../../../../assets/img/icon/sve-icon3.png'
import icon4 from '../../../../assets/img/icon/sve-icon4.png'
import icon5 from '../../../../assets/img/icon/sve-icon5.png'
import icon6 from '../../../../assets/img/icon/sve-icon6.png'

interface ApartmentCardProps {
  apartment: any
}

export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  const [isLightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div className="col-xl-4 col-md-6">
      <div className="single-services ser-m mb-30">
        <div className="services-thumb" onClick={() => {}}>
          <Link to="#" onClick={() => setLightboxOpen(true)} className="gallery-link popup-image">
            <img src={apartment.image} alt="img" />
          </Link>
          {isLightboxOpen && (
            <Lightbox
              mainSrc={apartment.image}
              // nextSrc={images[(photoIndex + 1) % images.length]}
              // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setLightboxOpen(false)}
              /*onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }*/
            />
          )}
        </div>
        <div className="services-content">
          <div
            style={{
              background: '#644222',
              color: '#fff',
              fontSize: '20px',
              fontWeight: 600,
              width: '100%',
              marginBottom: '30px',
              marginTop: '-70px',
              position: 'relative',
              textAlign: 'center',
              paddingTop: '15px',
              paddingBottom: '15px'
            }}>
            <Link
              to="/book"
              style={{
                color: '#fff'
              }}>
              <Trans>Reservar</Trans>
            </Link>
          </div>
          <h4>
            <Link to="/apartment-details">{apartment.name}</Link>
          </h4>
          <p>{apartment.description}</p>
          <div className="icon">
            <ul>
              <li>
                <img src={icon1} alt="img" />
              </li>
              <li>
                <img src={icon2} alt="img" />
              </li>
              <li>
                <img src={icon3} alt="img" />
              </li>
              <li>
                <img src={icon4} alt="img" />
              </li>
              <li>
                <img src={icon5} alt="img" />
              </li>
              <li>
                <img src={icon6} alt="img" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
