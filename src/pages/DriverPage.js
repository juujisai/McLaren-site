import React from 'react';
import { useParams, Link } from 'react-router-dom'

import { DriverContext } from '../context/DriverContext'

import Loader from '../components/Loader'

import { FaFacebookF as Facebook, FaTwitter as Twitter, FaTwitch as Twitch, FaInstagram as Instagram, FaYoutube as Youtube, FaGlobeEurope as Website } from 'react-icons/fa'


const socialIcons = [<Website />, <Facebook />, <Twitter />, <Instagram />, <Youtube />, <Twitch />]

const DriverPage = () => {

  const { name } = useParams()

  const { driversInfo, loading } = React.useContext(DriverContext)

  console.log(driversInfo)

  const driver = driversInfo.find(one => `${one.name}${one.secondName}` === name)
  console.log(driver)

  if (loading || typeof driver === 'undefined') {
    return <Loader />
  }

  if (typeof driver !== 'undefined') {
    const { name, secondName, image, imagePng, number, f1Debut, birth, homeCity, video, info, socialMedia } = driver


    let randomId1 = Math.floor(Math.random() * socialMedia.length) - 1
    let randomId2 = Math.floor(Math.random() * socialMedia.length) - 1

    if (randomId1 <= 0) {
      randomId1 = 0
    }

    if (randomId2 <= 0) {
      randomId2 = 0
    }


    if (randomId1 === randomId2) {
      randomId2 = Math.floor(Math.random() * socialMedia.length) - 1
    }


    const paragraphs = info.map((par, id) => {
      return (
        <div key={id} className='text-cont-flex'>
          <p >{par}</p>
          {randomId1 === id && <div className="photos"><img src={image[0]} alt={`${name} ${secondName}`} className="full-img" /></div>}
          {randomId2 === id && <div className="photos"><img src={image[1]} alt={`${name} ${secondName}`} className="full-img" /></div>}
        </div>
      )
    })

    const socials = socialMedia.map((social, id) => (
      <div key={id}>
        <a href={social.path} target='_blank' rel='noopener noreferrer'>{socialIcons[social.id]}</a>
      </div>
    )
    )


    return (
      <div className="driver-page">

        <div className="driver-full-info">
          <div className="img-cont-driver">
            <img className={`full-img`} src={imagePng} alt={`${name} ${secondName}`} />
          </div>

          <h2 className="name-full">{name} {secondName} #{number}</h2>
          <div className="about-driver">
            <h3>About</h3>
            <p>Home City: <span>{homeCity}</span></p>
            <p>Birth: <span>{birth}</span></p>
            <p>F1 debut: <span>{f1Debut}</span></p>
          </div>
        </div>
        <div className="driver-socials">
          <div className="video">
            <img className='full-img' src={video} alt={`${name} ${secondName}`} />
          </div>
          <div className="social-media">
            {socials}
          </div>
        </div>

        <div className="info-page">
          {paragraphs}
        </div>

        <div className='link-back'>
          <Link className={'btn-link'} to="/drivers">Go back to drivers</Link>
        </div>
      </div>
    );
  }

}

export default DriverPage;