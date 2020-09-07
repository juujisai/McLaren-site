import React from 'react';
import { Switch, Route } from 'react-router-dom'
import navData from '../data/navData'
import Title from './Title'


const Hero = () => {
  console.log(navData)

  const paths = navData.map((path, id) => (
    <Route
      key={id}
      path={path.path}
      render={() => (
        <>
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


