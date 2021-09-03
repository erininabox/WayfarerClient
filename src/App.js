import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './config/Routes'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
      
    </div>
  );
}

export default App;
