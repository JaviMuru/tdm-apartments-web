interface Props {
  title: string
  description: string
  image: string
  linkText: string
}

export const Slide = ({ title, description, image, linkText }: Props) => {
  return (
    <div className="text-center item bg-img" data-overlay-dark="1" data-background={image}>
      <div className="v-middle caption">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <span>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </span>
              <h4>{title}</h4>
              <h1>{description}</h1>
              <div className="butn-light mt-30 mb-30">
                <a href="https://github.com/JaviMuru" data-scroll-nav="1">
                  <span>{linkText}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
