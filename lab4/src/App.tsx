import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Features from './components/Features/Features';
import Tours from './components/Tours/Tours';
import Stories from './components/Stories/Stories';

class App extends Component {
  render() {
    return(<div>
            <Header/>
            <About/>
            <Features/>
            <Tours/>
            <Stories/>
            <Footer/>
          </div>);
  }
}

export default App;
