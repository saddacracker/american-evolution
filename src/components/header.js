import React from 'react'
import Link from 'gatsby-link'
import FA from 'react-fontawesome'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#0d0d0d',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <div style={{
        color: '#696969',
        fontSize: 14,
        fontWeight: 'bold',
        padding: '8px 0'
      }}>
        <span style={{
          marginRight: 40
        }}><FA name="phone" /> 425 750-7483</span>
        <span><FA name="envelope" /> testa0602@gmail.com</span>
        <span style={{
          display: 'block',
          float: 'right'
        }}><FA name="map-marker" /> 22611 39th Ave SE, Bothell, WA 98021</span>
      </div>
    </div>
  </div>
)

export default Header
