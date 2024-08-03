import React, { PureComponent } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Content from './Components/Content'
import Services from './Components/Services'
import Features from './Components/Features'
import List from './Components/List'
import Feedback from './Components/Feedback'
import Contact from './Components/Contact'

export class App extends PureComponent {
  render() {
    return (
      <>
      <Navbar />
      <Hero />
      <About />
      <Content />
      <Services />
      <Features />
      <List />
      <Feedback />
      <Contact />
      </>
    )
  }
}

export default App
