import React from 'react'
import {  Link, Route, Routes } from 'react-router-dom'
import Second from './Second'
import First from './First'
import Third from './third'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Whole() {
  return (
    <>
    <FontAwesomeIcon icon={faReact} size='xl' spin style={{color:'violet'}}/>
     <nav>
        <Link to="/f">FRIST</Link>  
        <Link to="/s">SECOND</Link>  
        <Link to="/t">THIRD</Link> 
     </nav>
     <Routes>
        <Route path="/f" element={<First/>}/>
        <Route path="/s" element={<Second/>}/>
        <Route path="/t" element={<Third/>}/>
     </Routes>
     
     
     
     </>
  )
}

export default Whole