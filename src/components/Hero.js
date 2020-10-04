import React from 'react';
import { Switch, Route } from 'react-router-dom'
import navData from '../data/navData'
import Title from './Title'
import video from '../media/f1.webm'
import videoCont from '../images/home1cont.png'
import videoContVert from '../images/home1contVert.png'

const Hero = () => {

  const firstPath = (path) => {
    if (path.name === 'home') {
      return (
        <>
          <video src={video} muted autoPlay loop></video>
          <img className='first' src={window.innerHeight <= window.innerWidth ? videoContVert : videoCont} alt="cont"></img>
          {/* <img src={videoCont} alt="cont"></img> */}

        </>
      )
    }
  }


  const paths = navData.map((path, id) => (
    <Route
      key={id}
      path={path.path}
      render={() => (
        <>
          {firstPath(path)}
          <img className={id === 0 ? 'first' : 'other'} src={path.img} alt={path.name}></img>
          <Title text={path.name} />
        </>
      )}
      exact={id === 0 ? true : false}
    />
  ))
  return (
    <>
      <Switch>
        {paths}
        <Route
          render={() => (<img src={navData[3].img} alt={navData[0].name}></img>)}
        />
      </Switch>
    </>
  );
}

export default Hero;

