import GoogleMapReact from 'google-map-react'
import React from 'react'

export const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 41.733186441579385,
      lng: 2.9512533731481856
    },
    zoom: 11
  }

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  )
}
