

import img1 from '../images/home12.jpg'
import img11 from '../images/home1Vert2.png'
import img2 from '../images/drivers.jpg'
import img3 from '../images/schedule.jpg'
import img4 from '../images/shop.jpg'
import img5 from '../images/game.jpg'



const image1 = window.innerHeight <= window.innerWidth ? img11 : img1

export default [
  {
    path: '/',
    name: 'home',
    img: image1
  },
  {
    path: '/drivers',
    name: 'drivers',
    img: img2
  },
  {
    path: '/schedule',
    name: 'schedule',
    img: img3
  },
  {
    path: '/shop',
    name: 'shop',
    img: img4
  },
  {
    path: '/game',
    name: 'game',
    img: img5
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   img: img1
  // },
]