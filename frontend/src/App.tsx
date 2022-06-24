import React from 'react';

import { About,Footer,Header,Skills, Testimonial, Work } from "./containers";
import { Navbar } from './components'

const App:React.FC = ()=> {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;