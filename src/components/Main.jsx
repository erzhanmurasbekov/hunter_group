import React from 'react'
import Products from './Products'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Services from './Services'

const Main = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Services/>
        <Products/>
        <Contact/>
    </div>
  )
}

export default Main