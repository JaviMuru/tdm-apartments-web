import React from 'react'

export const Newsletter = () => {
  return (
    <div className="col-xl-9 col-lg-9">
      <div
        className="section-title center-align mb-40 text-center wow fadeInDown animated"
        data-animation="fadeInDown"
        data-delay=".4s">
        <h5>Newsletter</h5>
        <h2>Get Best Offers On The Hotel</h2>
        <p>With the subscription, enjoy your favourite Hotels without having to think about it</p>
      </div>
      <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
        <div className="form-group">
          <input
            className="form-control"
            id="email3"
            name="email"
            type="email"
            placeholder="Your Email Address"
            required={undefined}
          />
          <button type="submit" className="btn btn-custom" id="send2">
            Subscribe Now
          </button>
        </div>
      </form>
    </div>
  )
}
