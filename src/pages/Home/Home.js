import React from 'react'
import { HomeObject, HomeObjectTwo } from './Data';
import { InfoSection } from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObject}/>
      <InfoSection {...HomeObjectTwo}/>
    </>
  )
}

export default Home
