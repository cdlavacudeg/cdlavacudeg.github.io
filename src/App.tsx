import React from 'react'

import { About, Footer, Header, Skills, Work } from './containers'
import { Navbar } from './components'
import './App.scss'
const App: React.FC = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}

export default App
