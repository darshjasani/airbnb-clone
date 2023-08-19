import React from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './searchPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    // BEM Naming Convention
    <div className='app'>

    <Router>
        <Header/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<SearchPage/>} />
        </Routes>

        <Footer/>
    </Router>
    {/** Home */}
    
      {/** Header */}
      
      {/** Banner */}
        {/** Search Date */}
      {/** Card */}

      {/** Footer */}

    {/** SearchPage*/}
      {/** Header */}

      {/** ... */}
    </div>
  )
}

export default App