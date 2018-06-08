import React from 'react'
import Link from 'gatsby-link'
import FA from 'react-fontawesome'

import HeroImage from "../images/three-two-five_2a.jpg"
import LoveItKoteItImage from "../images/LoveitKoteitLRG.png"
import AELogoImage from '../images/AELogo.png'

import './css/fontawesome-all.min.css'


const IndexPage = () => (
  <div>
    <div style={{
      backgroundImage: `url( ${HeroImage} )`,
      height: '600px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
    }}>
      {/* <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div> */}

      <div style={{
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#FFF',
      }}>
        {/* <h1 style={{
          textTransform: 'uppercase'
        }}>American Evolution Cerakoting</h1> */}
        <div style={{
          background: 'transparent',
          backgroundImage: `url( ${AELogoImage} )`,
          height: '141px',
          width: '500px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          position: 'relative',
          padding: '50px',
          margin: '40px auto'
        }} />
        <p>Offering the Best in Local Custom Cerakote Solutions!</p>
        <a href="mailto:testa0602@gmail.com?subject=Cerakote%20Inquiry" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid #fff',
          padding: '1em 2em',
          cursor: 'pointer',
          color: '#FFF',
          textTransform: 'uppercase',
          display: 'inlineBlock',
          textDecoration: 'none'
        }}>Contact Us!</a>
      </div>
    </div>
    <div style={{
      background: '#171717',
      backgroundImage: `url( ${LoveItKoteItImage} )`,
      height: '64px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      position: 'relative',
      padding: '50px'
    }}>
    </div>
  </div>
)

export default IndexPage
