import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Component, useState } from 'react';
import { NewsComponent } from './components/NewsComponent';


export class App extends Component{
  render(){
    return(
      <>
      <NavBar />
      <NewsComponent/>
      </>
    )
  }
} 

export default App;
