import { Trans } from '@lingui/macro'
import FsLightbox from 'fslightbox-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BGImg from '../../assets/img/bg/bdrc-bg.jpg'
import portfolioImage1 from '../../assets/img/gallery/protfolio-img01.png'
import portfolioImage2 from '../../assets/img/gallery/protfolio-img02.png'
import portfolioImage3 from '../../assets/img/gallery/protfolio-img03.png'
import portfolioImage4 from '../../assets/img/gallery/protfolio-img04.png'
import portfolioImage5 from '../../assets/img/gallery/protfolio-img05.png'
import portfolioImage6 from '../../assets/img/gallery/protfolio-img06.png'
import portfolioImage7 from '../../assets/img/gallery/protfolio-img07.png'
import portfolioImage8 from '../../assets/img/gallery/protfolio-img08.png'
import portfolioImage9 from '../../assets/img/gallery/protfolio-img09.png'
import { Header } from '../../components/Header'

export const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1)

  const [images] = useState([
    '../../../assets/img/gallery/protfolio-img02.png',
    '../../../assets/img/gallery/protfolio-img03.png',
    '../../../assets/img/gallery/protfolio-img01.png',
    '../../../assets/img/gallery/protfolio-img04.png',
    '../../../assets/img/gallery/protfolio-img05.png',
    '../../../assets/img/gallery/protfolio-img06.png',
    '../../../assets/img/gallery/protfolio-img07.png',
    '../../../assets/img/gallery/protfolio-img08.png',
    '../../../assets/img/gallery/protfolio-img09.png',
    '../../../assets/img/gallery/protfolio-img10.png'
  ])

  const [toggler, setToggler] = useState(false)

  const [tabMenu, tabActive] = useState<{
    all: boolean
    financial: boolean
    banking: boolean
    insurance: boolean
    family: boolean
    business: boolean
  }>({
    all: true,
    financial: false,
    banking: false,
    insurance: false,
    family: false,
    business: false
  })

  const galleryHeight = () => {
    if (tabMenu.all) {
      return 'h1200'
    } else if (tabMenu.financial) {
      return 'h600'
    } else {
      return 'h300'
    }
  }

  return (
    <>
      <main>
        <Header title={<Trans>Galería</Trans>}></Header>
        <section className="profile fix pt-120">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="my-masonry text-center mb-50">
                  <div className="button-group filter-button-group ">
                    <button
                      className={`${tabMenu.all && 'active'}`}
                      onClick={() =>
                        tabActive({
                          all: true,
                          financial: false,
                          banking: false,
                          insurance: false,
                          family: false,
                          business: false
                        })
                      }
                      data-filter="*">
                      All
                    </button>
                    <button
                      className={`${tabMenu.financial && 'active'}`}
                      onClick={() =>
                        tabActive({
                          all: false,
                          financial: true,
                          banking: false,
                          insurance: false,
                          family: false,
                          business: false
                        })
                      }
                      data-filter=".financial">
                      Room
                    </button>
                    <button
                      className={`${tabMenu.banking && 'active'}`}
                      onClick={() =>
                        tabActive({
                          all: false,
                          financial: false,
                          banking: true,
                          insurance: false,
                          family: false,
                          business: false
                        })
                      }
                      data-filter=".banking">
                      Hall
                    </button>
                    <button
                      className={`${tabMenu.insurance && 'active'}`}
                      onClick={() =>
                        tabActive({
                          all: false,
                          financial: false,
                          banking: true,
                          family: false,
                          business: false,
                          insurance: true
                        })
                      }
                      data-filter=".insurance">
                      Guardian
                    </button>
                    <button
                      className={`${tabMenu.family && 'active'}`}
                      onClick={() =>
                        tabActive({
                          all: false,
                          financial: false,
                          banking: true,
                          insurance: false,
                          business: false,
                          family: true
                        })
                      }
                      data-filter=".family">
                      Hotel
                    </button>
                    <button
                      className={`${tabMenu.business && 'active'}`}
                      onClick={() =>
                        tabActive({
                          all: false,
                          financial: false,
                          banking: true,
                          insurance: false,
                          family: false,
                          business: true
                        })
                      }
                      data-filter=".business">
                      Event Hall
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="masonry-gallery-huge">
                  <div className={`grid col2 ${galleryHeight()}`} style={{ position: 'relative' }}>
                    {tabMenu.banking && (
                      <div
                        className="grid-item banking"
                        style={{
                          position: 'absolute',
                          left: '0%',
                          top: '0px'
                        }}>
                        <Link to="#" className="popup-image">
                          <figure
                            className="gallery-image"
                            onClick={() => {
                              setToggler(!toggler)
                              setActiveImage(1)
                            }}>
                            <img src={portfolioImage2} alt="img" className="img" />
                          </figure>
                        </Link>
                      </div>
                    )}
                    {tabMenu.insurance && (
                      <div
                        className="grid-item insurance"
                        style={{
                          position: 'absolute',
                          left: '0%',
                          top: '0px'
                        }}>
                        <Link to="#" className="popup-image">
                          <figure
                            className="gallery-image"
                            onClick={() => {
                              setActiveImage(2)
                              setToggler(!toggler)
                            }}>
                            <img src={portfolioImage3} alt="img" className="img" />
                          </figure>
                        </Link>
                      </div>
                    )}
                    {tabMenu.financial && (
                      <div
                        className="grid-item financial"
                        style={{
                          position: 'absolute',
                          left: '0%',
                          top: '0px'
                        }}>
                        <Link to="#" className="popup-image">
                          <figure
                            className="gallery-image"
                            onClick={() => {
                              setActiveImage(3)
                              setToggler(!toggler)
                            }}>
                            <img src={BGImg} alt="img" className="img" />
                          </figure>
                        </Link>
                      </div>
                    )}
                    {tabMenu.family && (
                      <div className="grid-item family" style={{ position: 'absolute', left: '0%', top: '0' }}>
                        <Link to="#" className="popup-image">
                          <figure
                            className="gallery-image"
                            onClick={() => {
                              setActiveImage(4)
                              setToggler(!toggler)
                            }}>
                            <img src={portfolioImage4} alt="img" className="img" />
                          </figure>
                        </Link>
                      </div>
                    )}
                    {tabMenu.business && (
                      <div className="grid-item business" style={{ position: 'absolute', left: '0%', top: '0' }}>
                        <Link to="#" className="popup-image">
                          <figure
                            className="gallery-image"
                            onClick={() => {
                              setActiveImage(5)
                              setToggler(!toggler)
                            }}>
                            <img src={portfolioImage5} alt="img" className="img" />
                          </figure>
                        </Link>
                      </div>
                    )}
                    {tabMenu.financial && (
                      <div
                        className="grid-item financial"
                        style={{
                          position: 'absolute',
                          left: '49.922%',
                          top: '0px'
                        }}>
                        <Link to="#" className="popup-image">
                          <figure
                            className="gallery-image"
                            onClick={() => {
                              setActiveImage(6)
                              setToggler(!toggler)
                            }}>
                            <img src={portfolioImage6} alt="img" className="img" />
                          </figure>
                        </Link>
                      </div>
                    )}
                    {tabMenu.banking && (
                      <div
                        className="grid-item banking"
                        style={{
                          position: 'absolute',
                          left: '24.961%',
                          top: '0'
                        }}>
                        <Link to="#" className="popup-image">
                          <figure
                            className="gallery-image"
                            onClick={() => {
                              setActiveImage(7)
                              setToggler(!toggler)
                            }}>
                            <img src={portfolioImage7} alt="img" className="img" />
                          </figure>
                        </Link>
                      </div>
                    )}
                    {tabMenu.insurance && (
                      <div
                        className="grid-item insurance"
                        style={{
                          position: 'absolute',
                          left: '24.961%',
                          top: '0'
                        }}>
                        <Link to="#" className="popup-image">
                          <figure
                            className="gallery-image"
                            onClick={() => {
                              setActiveImage(8)
                              setToggler(!toggler)
                            }}>
                            <img src={portfolioImage8} alt="img" className="img" />
                          </figure>
                        </Link>
                      </div>
                    )}
                    {tabMenu.family && (
                      <div
                        className="grid-item family"
                        style={{
                          position: 'absolute',
                          left: '24.961%',
                          top: '0'
                        }}>
                        <Link to="#" className="popup-image">
                          <figure
                            className="gallery-image"
                            onClick={() => {
                              setActiveImage(9)
                              setToggler(!toggler)
                            }}>
                            <img src={portfolioImage9} alt="img" className="img" />
                          </figure>
                        </Link>
                      </div>
                    )}
                    {tabMenu.business && (
                      <div
                        className="grid-item business"
                        style={{
                          position: 'absolute',
                          left: '24.961%',
                          top: '0'
                        }}>
                        <Link to="#" className="popup-image">
                          <figure
                            className="gallery-image"
                            onClick={() => {
                              setActiveImage(10)
                              setToggler(!toggler)
                            }}>
                            <img src="assets/img/gallery/protfolio-img10.png" alt="img" className="img" />
                          </figure>
                        </Link>
                      </div>
                    )}

                    {tabMenu.all && (
                      <>
                        <div
                          className="grid-item banking"
                          style={{
                            position: 'absolute',
                            left: '0%',
                            top: '0px'
                          }}>
                          <Link to="#" className="popup-image">
                            <figure
                              className="gallery-image"
                              onClick={() => {
                                setActiveImage(1)
                                setToggler(!toggler)
                              }}>
                              <img src="assets/img/gallery/protfolio-img02.png" alt="img" className="img" />
                            </figure>
                          </Link>
                        </div>

                        <div
                          className="grid-item insurance"
                          style={{
                            position: 'absolute',
                            left: '24.961%',
                            top: '0px'
                          }}>
                          <Link to="#" className="popup-image">
                            <figure
                              className="gallery-image"
                              onClick={() => {
                                setActiveImage(2)
                                setToggler(!toggler)
                              }}>
                              <img src={portfolioImage3} alt="img" className="img" />
                            </figure>
                          </Link>
                        </div>
                        <div
                          className="grid-item family"
                          style={{
                            position: 'absolute',
                            left: '49.922%',
                            top: '0px'
                          }}>
                          <Link to="#" className="popup-image">
                            <figure
                              className="gallery-image"
                              onClick={() => {
                                setActiveImage(3)
                                setToggler(!toggler)
                              }}>
                              <img src={portfolioImage1} alt="img" className="img" />
                            </figure>
                          </Link>
                        </div>
                        <div
                          className="grid-item family"
                          style={{
                            position: 'absolute',
                            left: '0%',
                            top: '300px'
                          }}>
                          <Link to="#" className="popup-image">
                            <figure
                              className="gallery-image"
                              onClick={() => {
                                setActiveImage(4)
                                setToggler(!toggler)
                              }}>
                              <img src={portfolioImage4} alt="img" className="img" />
                            </figure>
                          </Link>
                        </div>
                        <div
                          className="grid-item business"
                          style={{
                            position: 'absolute',
                            left: '24.961%',
                            top: '300px'
                          }}>
                          <Link to="#" className="popup-image">
                            <figure
                              className="gallery-image"
                              onClick={() => {
                                setActiveImage(5)
                                setToggler(!toggler)
                              }}>
                              <img src={portfolioImage5} alt="img" className="img" />
                            </figure>
                          </Link>
                        </div>
                        <div
                          className="grid-item financial"
                          style={{
                            position: 'absolute',
                            left: '0%',
                            top: '600px'
                          }}>
                          <Link to="#" className="popup-image">
                            <figure
                              className="gallery-image"
                              onClick={() => {
                                setActiveImage(6)
                                setToggler(!toggler)
                              }}>
                              <img src={portfolioImage6} alt="img" className="img" />
                            </figure>
                          </Link>
                        </div>
                        <div
                          className="grid-item banking"
                          style={{
                            position: 'absolute',
                            left: '49.922%',
                            top: '600px'
                          }}>
                          <Link to="#" className="popup-image">
                            <figure
                              className="gallery-image"
                              onClick={() => {
                                setActiveImage(7)
                                setToggler(!toggler)
                              }}>
                              <img src={portfolioImage7} alt="img" className="img" />
                            </figure>
                          </Link>
                        </div>
                        <div
                          className="grid-item insurance"
                          style={{
                            position: 'absolute',
                            left: '74.883%',
                            top: '600px'
                          }}>
                          <Link to="#" className="popup-image">
                            <figure
                              className="gallery-image"
                              onClick={() => {
                                setActiveImage(8)
                                setToggler(!toggler)
                              }}>
                              <img src={portfolioImage8} alt="img" className="img" />
                            </figure>
                          </Link>
                        </div>
                        <div
                          className="grid-item family"
                          style={{
                            position: 'absolute',
                            left: '49.922%',
                            top: '900px'
                          }}>
                          <Link to="#" className="popup-image">
                            <figure
                              className="gallery-image"
                              onClick={() => {
                                setActiveImage(9)
                                setToggler(!toggler)
                              }}>
                              <img src="assets/img/gallery/protfolio-img09.png" alt="img" className="img" />
                            </figure>
                          </Link>
                        </div>
                        <div
                          className="grid-item business"
                          style={{
                            position: 'absolute',
                            left: '74.883%',
                            top: '900px'
                          }}>
                          <Link to="#" className="popup-image">
                            <figure
                              className="gallery-image"
                              onClick={() => {
                                setActiveImage(10)
                                setToggler(!toggler)
                              }}>
                              <img src="assets/img/gallery/protfolio-img10.png" alt="img" className="img" />
                            </figure>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FsLightbox toggler={toggler} sources={images} slide={activeImage} />
    </>
  )
}
