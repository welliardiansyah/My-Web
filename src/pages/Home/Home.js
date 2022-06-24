import React from 'react'
import { HomeObject, HomeObjectTwo } from './Data';
import { InfoSection, InfoSections } from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObject}/>
      <InfoSections {...HomeObjectTwo}/>
    </>
  )
}

export default Home
