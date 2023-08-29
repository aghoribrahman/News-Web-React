import './App.css';
import NavBar from './components/NavBar';
import { Component, useState } from 'react';
import { NewsComponent } from './components/NewsComponent';
import { BrowserRouter , Routes, Route, Switch, Link } from 'react-router-dom';


export class App extends Component{
  render(){
    return(
      <>
        <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route path='/' element={<NewsComponent key='general' country='in' category='general' />}></Route>
          <Route path='/business' element={<NewsComponent key='general' country='in' category='business' />}></Route>
          <Route path='/technology' element={<NewsComponent key='technology' country='in' category='technology' />}></Route>
          <Route path='/sports' element={<NewsComponent key='sports' country='in' category='sports' />}></Route>
          <Route path='/entertainment' element={<NewsComponent key='entertainment' country='in' category='entertainment' />}></Route>
          <Route path='/science' element={<NewsComponent key='science' country='in' category='science' />}></Route>
          </Routes>       
        </BrowserRouter>
      </>
    )
  }
} 

export default App;
