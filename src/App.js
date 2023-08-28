import './App.css';
import NavBar from './components/NavBar';
import { Component, useState } from 'react';
import { NewsComponent } from './components/NewsComponent';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';


export class App extends Component{
  render(){
    return(
      <>

        <NavBar />
        <NewsComponent category='health' country='in'/>
      
      </>
    )
  }
} 

export default App;
