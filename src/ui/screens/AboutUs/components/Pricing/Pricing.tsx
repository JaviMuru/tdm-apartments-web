import pricing1 from "../../../../assets/images/pricing/1.jpg"
import pricing2 from "../../../../assets/images/pricing/2.jpg"
import pricing3 from "../../../../assets/images/pricing/3.jpg"
import pricing4 from "../../../../assets/images/pricing/4.jpg"

export const Pricing = () => {
  return (
    <section className="pricing section-padding bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="section-subtitle"><span>Best Prices</span></div>
            <div className="section-title"><span>Extra Services</span></div>
            <p className="color-2">The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame
              odion elementum sceisue the aucan.</p>
            <p className="color-2">Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus
              nellen etesque habitant morbine.</p>
            <div className="reservations mb-30">
              <div className="icon"><span className="flaticon-call"></span></div>
              <div className="text">
                <p className="color-2">For information</p> <a href="tel:855-100-4444">855 100 4444</a>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="owl-carousel owl-theme">
            </div>
            <div className="pricing-card">
              <img src={pricing1} alt=""/>
              <div className="desc">
                <div className="name">Room cleaning</div>
                <div className="amount">$50<span>/ month</span></div>
                <ul className="list-unstyled list">
                  <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
                  <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
                  <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                </ul>
              </div>
            </div>
            <div className="pricing-card">
              <img src={pricing2} alt=""/>
              <div className="desc">
                <div className="name">Drinks included</div>
                <div className="amount">$30<span>/ daily</span></div>
                <ul className="list-unstyled list">
                  <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
                  <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
                  <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                </ul>
              </div>
            </div>
            <div className="pricing-card">
              <img src={pricing3} alt=""/>
              <div className="desc">
                <div className="name">Room Breakfast</div>
                <div className="amount">$30<span>/ daily</span></div>
                <ul className="list-unstyled list">
                  <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
                  <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
                  <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                </ul>
              </div>
            </div>
            <div className="pricing-card">
              <img src={pricing4} alt=""/>
              <div className="desc">
                <div className="name">Safe & Secure</div>
                <div className="amount">$15<span>/ daily</span></div>
                <ul className="list-unstyled list">
                  <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
                  <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
                  <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
