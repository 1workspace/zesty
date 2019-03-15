import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Block from './Block'
import Profile from './Profile'

class App extends Component {


  render () {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <h1> Welcome to Zesty! </h1>
          </header>
          <Route exact path='/' component={Block}/>
		  <Route exact path='/profile' component={Profile}/>
        </div>
      </Router>
		

    )
  }
}

export default App
