import React from 'react'
import design from '../components/Newstyle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
function Second() {
  return (
    <>
    <h1 style={{textAlign:'center',color:'goldenrod',textShadow:'3px 5px 3px red'}}><FontAwesomeIcon icon={faReact} size='20px' spin/>REACT JS</h1>
    <p className={design.para}>React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.</p>
    </>
  )
}

export default Second