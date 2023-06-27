import { Link } from 'react-router-dom'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  url: string
}

export const ServiceCard = ({ title, description, image, url }: ServiceCardProps) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="services-08-item mb-30">
        <div className="services-icon2">
          <img src={image} alt="img" />
        </div>
        <div className="services-08-thumb">
          <img src={image} alt="img" />
        </div>
        <div className="services-08-content">
          <h3>
            <Link to={url}>{title}</Link>
          </h3>
          <p>{description}</p>
          <Link to={url}>
            Ver <i className="fal fa-long-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
