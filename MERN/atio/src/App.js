import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
// import About from './pages/about'
// import Services from './pages/services'
// import Contact from './pages/contact'
// import SignUp from './pages/signup'

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  )
}

export default App
