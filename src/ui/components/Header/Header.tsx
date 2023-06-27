import React from 'react'
import { Link } from 'react-router-dom'
import BGImg from '../../assets/img/bg/bdrc-bg.jpg'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => (
  <section className="breadcrumb-area d-flex align-items-center" style={{ background: `url(${BGImg})` }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-12 col-lg-12">
          <div className="breadcrumb-wrap text-center">
            <div className="breadcrumb-title">
              <h2>{title}</h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}>
                <li className="breadcrumb-item">
                  <Link
                    to="/"
                    style={{
                      color: '#FFFFFF'
                    }}>
                    Inicio
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
