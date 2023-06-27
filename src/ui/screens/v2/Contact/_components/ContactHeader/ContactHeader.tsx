import React from 'react'
import { Link } from 'react-router-dom'
import BGImg from '../../../../../assets/img/bg/bdrc-bg.jpg'

export const ContactHeader = () => {
  return (
    <section className="breadcrumb-area d-flex align-items-center" style={{ background: `url(${BGImg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12">
            <div className="breadcrumb-wrap text-center">
              <div className="breadcrumb-title">
                <h2>Contacto</h2>
                <div className="breadcrumb-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb" style={{ backgroundColor: 'none' }}>
                      <li className="breadcrumb-item">
                        <Link to="/">Inicio</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Contacto
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
