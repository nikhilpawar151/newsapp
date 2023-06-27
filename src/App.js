import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export class App extends Component {
  pageSize = 3
  apiKey = process.env.REACT_APP_NEWS_API_KEY
  //apiKey = "3ce91dc780134a939154f1f051c27223"
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<News key="/" apiKey={this.apiKey} category="general" pageSize={this.pageSize} country="in"/>}></Route>
            <Route path='/business' element={<News key="business" apiKey={this.apiKey} category="business" pageSize={this.pageSize} country="in"/>}></Route>
            <Route path='/entertainment' element={<News key="entertainment" apiKey={this.apiKey} category="entertainment" pageSize={this.pageSize} country="in"/>}></Route>
            <Route path='/general' element={<News key="general" apiKey={this.apiKey} category="general" pageSize={this.pageSize} country="in"/>}></Route>
            <Route path='/health' element={<News key="health" apiKey={this.apiKey} category="health" pageSize={this.pageSize} country="in"/>}></Route>
            <Route path='/science' element={<News key="science" apiKey={this.apiKey} category="science" pageSize={this.pageSize} country="in"/>}></Route>
            <Route path='/sports' element={<News key="sports" apiKey={this.apiKey} category="sports" pageSize={this.pageSize} country="in"/>}></Route>
            <Route path='/technology' element={<News key="technology" apiKey={this.apiKey} category="technology" pageSize={this.pageSize} country="in"/>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
