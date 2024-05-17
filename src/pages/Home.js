import React, { useContext } from 'react';
import Header from '../components/header'
import Body from '../components/body';
import Footer from '../components/footer';
import './Home.css';

function Home() {

  return (
    <React.Fragment>
      <Header/>
      <Body/>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;
