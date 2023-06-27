import React from 'react'
import { SocialButton } from '../SocialButton/SocialButton'

export const Copyright = () => (
  <div
    style={{
      background: '#282828',
      color: '#fff',
      fontSize: '15px',
      padding: 10,
      textAlign: 'center'
    }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">Copyright &copy; TDM apartments 2023 . Todos los derechos reservados.</div>
        <div className="col-lg-6 col-md-6 text-right text-xl-right">
          <div className="footer-social">
            <SocialButton
              icon="fa-facebook-f"
              url="https://www.facebook.com/people/TdM-Apartments-Tossa-de-Mar/100068091622060"
            />
            <SocialButton icon="fa-instagram" url="https://www.instagram.com/tdmapart" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
