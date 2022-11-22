import './Facilities.styles.css'

export const Facilities = () => {
  return (
    <section className="facilties section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">Our Services</div>
            <div className="section-title">Hotel Facilities</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="single-facility animate-box" data-animate-effect="fadeInUp">
              <span className="flaticon-world"></span>
              <h5>Pick Up & Drop</h5>
              <p>We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.</p>
              <div className="facility-shape">
                <span className="flaticon-world"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-facility animate-box" data-animate-effect="fadeInUp">
              <span className="flaticon-car"></span>
              <h5>Parking Space</h5>
              <p>Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
              <div className="facility-shape">
                <span className="flaticon-car"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-facility animate-box" data-animate-effect="fadeInUp">
              <span className="flaticon-bed"></span>
              <h5>Room Service</h5>
              <p>Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
              <div className="facility-shape">
                <span className="flaticon-bed"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-facility animate-box" data-animate-effect="fadeInUp">
              <span className="flaticon-swimming"></span>
              <h5>Swimming Pool</h5>
              <p>Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.</p>
              <div className="facility-shape">
                <span className="flaticon-swimming"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-facility animate-box" data-animate-effect="fadeInUp">
              <span className="flaticon-wifi"></span>
              <h5>Fibre Internet</h5>
              <p>Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
              <div className="facility-shape">
                <span className="flaticon-wifi"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-facility animate-box" data-animate-effect="fadeInUp">
              <span className="flaticon-breakfast"></span>
              <h5>Breakfast</h5>
              <p>Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant</p>
              <div className="facility-shape">
                <span className="flaticon-breakfast"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
