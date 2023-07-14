import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import portfolio1 from '../../../assets/img/gallery/protfolio-img01.png'
import portfolio3 from '../../../assets/img/gallery/protfolio-img03.png'
import portfolio4 from '../../../assets/img/gallery/protfolio-img04.png'
import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'
import { SimpleMap } from './_components/Map'
import { whatToSeeData } from './_data/WhatToSeeData'

export const WhatToSee = () => {
  const [siteNumber, setSiteNumber] = useState<number>(0)

  return (
    <>
      <main>
        <Header title="Qué ver" />
        <div className="about-area5 about-p p-relative">
          <div className="container pt-120 pb-90">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-5 order-1">
                <aside className="sidebar services-sidebar">
                  <div className="sidebar-widget categories">
                    <div className="widget-content">
                      <h2 className="widget-title">Qué ver</h2>
                      <ul className="services-categories">
                        {whatToSeeData.map((beach, index) => (
                          <li
                            key={index}
                            className={siteNumber === index ? 'active' : ''}>
                            <Link
                              onClick={() => {
                                setSiteNumber(index)
                              }}
                              to="#">
                              {beach.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 order-2">
                <div className="service-detail">
                  <div className="content-box">
                    <h2>{whatToSeeData[siteNumber].title}</h2>
                    <p>{whatToSeeData[siteNumber].description}</p>
                    <div className="two-column">
                      <div className="row">
                        <div className="image-column col-xl-6 col-lg-12 col-md-12">
                          <figure className="image">
                            <img src={portfolio4} alt="" />
                          </figure>
                        </div>
                        <div className="text-column col-xl-6 col-lg-12 col-md-12">
                          <figure className="image">
                            <img src={portfolio3} alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="two-column">
                      <div className="row">
                        <div className="image-column col-xl-12 col-lg-12 col-md-12">
                          <figure className="image">
                            <img src={portfolio1} alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="two-column">
              <div className="row">
                <SimpleMap />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
