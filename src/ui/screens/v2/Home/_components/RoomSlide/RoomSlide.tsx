import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../../../../../assets/img/gallery/room-img01.png'
import icon1 from '../../../../../assets/img/icon/sve-icon1.png'
import icon2 from '../../../../../assets/img/icon/sve-icon2.png'
import icon3 from '../../../../../assets/img/icon/sve-icon3.png'
import icon4 from '../../../../../assets/img/icon/sve-icon4.png'
import icon5 from '../../../../../assets/img/icon/sve-icon5.png'
import icon6 from '../../../../../assets/img/icon/sve-icon6.png'

interface RoomSlideProps {
  title: string
  description: string
}

export const RoomSlide = ({ title, description }: RoomSlideProps) => (
  <div>
    <div className="single-services mb-30">
      <div className="services-thumb">
        <Link
          to="#"
          className="gallery-link popup-image"
          onClick={() => {
            /*setToggler(!toggler)
            setActiveImage(1)*/
          }}>
          <img src={service1} alt="img" />
        </Link>
      </div>
      <div className="services-content">
        <div className="day-book">
          <ul>
            <li>$600/Night</li>
            <li>
              <Link to="/contact">Book Now</Link>
            </li>
          </ul>
        </div>
        <h4>
          <Link to="/room-details">{title}</Link>
        </h4>
        <p>{description}</p>
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
