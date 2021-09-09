import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './config/Routes'


//we installed npm install jquery popper.js
//carousel implementation 'https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121/'
//Bootstrap stuff!
//  import Bootstrap from '/node_modules/react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'
import CityCarousel from './partials/CityCarousel'

function App() {
  return (
    <div 
    className="App">
     
      <Header/>
      <Routes/>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
