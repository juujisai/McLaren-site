import React from 'react';
import { Switch, Route } from 'react-router-dom'
import navData from '../data/navData'
import Title from './Title'
import video from '../media/f1.webm'
import videoCont from '../images/home1cont.png'

const Hero = () => {
  console.log(navData)

  const firstPath = (path) => {
    if (path.name === 'home') {
      return (
        <>
          <video src={video} muted autoPlay loop></video>
          <img src={videoCont} alt="cont"></img>

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
          <img src={path.img} alt={path.name}></img>
          <Title text={path.name} />
        </>
      )}
      exact
    />
  ))


  return (
    <>



      <Switch>

        {paths}
        <Route
          render={() => (<img src={navData[0].img} alt={navData[0].name}></img>)}
        />
      </Switch>
    </>
  );
}

export default Hero;


