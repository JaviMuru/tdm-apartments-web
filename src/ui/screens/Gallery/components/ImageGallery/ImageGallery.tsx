import sliderImage7 from '../../../../assets/images/slider/7.jpg'
import sliderImage5 from '../../../../assets/images/slider/5.jpg'
import sliderImage4 from '../../../../assets/images/slider/4.jpg'
import sliderImage2 from '../../../../assets/images/slider/2.jpg'
import sliderImage1 from '../../../../assets/images/slider/1.jpg'
import room8 from '../../../../assets/images/rooms/8.jpg'
import room5 from '../../../../assets/images/rooms/5.jpg'
import room10 from '../../../../assets/images/rooms/10.jpg'
import React from 'react'

export const ImageGallery = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">Images</div>
            <div className="section-title">Image Gallery</div>
          </div>
          <div className="col-md-4 gallery-item">
            <a href="img/slider/7.jpg" title="" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={sliderImage7} className="img-fluid mx-auto d-block" alt="work-img" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item">
            <a href="img/slider/5.jpg" title="" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={sliderImage5} className="img-fluid mx-auto d-block" alt="work-img" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item">
            <a href="img/slider/4.jpg" title="" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={sliderImage4} className="img-fluid mx-auto d-block" alt="work-img" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 gallery-item">
            <a href="img/slider/2.jpg" title="" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={sliderImage2} className="img-fluid mx-auto d-block" alt="work-img" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 gallery-item">
            <a href="img/slider/1.jpg" title="" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={sliderImage1} className="img-fluid mx-auto d-block" alt="work-img" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item">
            <a href="img/rooms/8.jpg" title="" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={room8} className="img-fluid mx-auto d-block" alt="work-img" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item">
            <a href="img/rooms/5.jpg" title="" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={room5} className="img-fluid mx-auto d-block" alt="work-img" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item">
            <a href="img/rooms/10.jpg" title="" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={room10} className="img-fluid mx-auto d-block" alt="work-img" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
