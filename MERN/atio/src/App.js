import React, { useState } from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import About from './pages/about'
import StudioProject from './pages/studioProject'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AnimatePresence initial={true} exitBeforeEnter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/studio' component={StudioProject} exact />
        </Switch>
      </AnimatePresence>
      <Footer />
    </Router>
  )
}

export default App
