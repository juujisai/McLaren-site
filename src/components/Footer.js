import React from 'react';
import { FaGlobeEurope as Web, FaFacebook as Fb, FaTwitter as Twt, FaInstagram as Ig } from 'react-icons/fa';

import MyName from '../components/MyName'
import Partners from '../components/Partners'

const Footer = () => {
  const social = [
    { name: <Web />, fullName: 'website', path: 'https://www.mclaren.com/' },
    { name: <Fb />, fullName: 'facebook', path: 'https://www.facebook.com/McLaren.Racing/' },
    { name: <Twt />, fullName: 'twitter', path: 'https://twitter.com/McLarenF1/' },
    { name: <Ig />, fullName: 'instagram', path: 'https://www.instagram.com/mclaren/?hl=en' },
  ]

  const socialLinks = social.map((item, id) => (
    <div className='socials' key={id}><a href={item.path} target='_blank' rel='noopener noreferrer'> {item.name}  {item.fullName} </a></div>
  ))



  return (
    <footer>
      <div className="social">
        <h3>McLaren social media</h3>
        {socialLinks}
      </div>
      <Partners />
      <MyName />
    </footer>
  );
}

export default Footer;