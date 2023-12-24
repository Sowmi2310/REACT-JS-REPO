import React from 'react'
import Card from 'react-bootstrap/Card';

function Congrats() {
  return (
      <>
       
      {/* <div style={{backgroundImage:"url('https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png')",height:'640px'}}> */}
     
      <div className='container'>
       <div className='row'>
       <div className='col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
       <div style={{backgroundImage:"url('https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png')",height:'640px'}}> 
      
      <h1>CONGRATULATIONS</h1>
      {/* <div className='col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'> */}
     <div >
     
      <Card style={{ width: '18rem',marginLeft:'20px',marginTop:'30px',padding:'40px',backgroundColor:'skyblue'}}>
      <Card.Img variant="top" src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" height='100px'/>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Kiran V</Card.Title>
        <Card.Text style={{textAlign:'center'}}>
          Vishnu Institute of Computer Education and Technology.
        </Card.Text>
      </Card.Body>
      <Card.Img variant="top" src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" height='90px'/>
      </Card>
      </div>
      </div>
      </div>
      </div>
      </div>
      </>
  )
}

export default Congrats