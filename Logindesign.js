import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'



function Logindesign() {
  
  let pic="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_640.jpg";
  return (
    <>
    <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zmnuGwPsX5RYOzNAlE6YfeHnUkVauz0802aw_KwDmDXQRWIzUmHtIdR7Ia0yw0KzdTg&usqp=CAU')",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"580px",width:"1200px"}}>

    <div className='container'>
     <div className='row'>
     <div className='col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
     <div style={{backgroundColor:'lightskyblue',marginLeft:"50px",height:"400px",width:"700px",position:'relative',top:"90px",border:"2px solid white",borderRadius:"10px",display:"flex",padding:"10px"}}>
     
      <div style={{marginLeft:"40px",marginTop:"100px"}}>
      <img src={pic} alt='' height="200px" width="200px"style={{border:"10px solid lightgray",borderRadius:"50px"}}/>
      
      
      </div>
     
     <div style={{marginLeft:"200px",marginTop:"90px"}}  >
     <h2>Member Login</h2>
     <h5 style={{background:"lightgray",padding:"5px",borderRadius:"10px"}}><FontAwesomeIcon icon={faEnvelope} style={{color: "#212121",}} />      Email</h5>
     <h5 style={{background:"lightgray",padding:"5px",borderRadius:"10px"}}><FontAwesomeIcon icon={faLock} style={{color: "#1b1c1d",}} />        .....</h5>
     <h5 style={{background:"green",padding:"5px",borderRadius:"10px",textAlign:"center"}}>LOGIN</h5>
     <p style={{textAlign:"center"}}>Forgot<span style={{color:"green"}}> UserName/Password ?</span></p>
     <p style={{color:"green",textAlign:"center"}}>Create your account</p>
     
     </div>
     </div>
     </div>
     </div>
     </div>
     
    </div>
    </>
   


  )
}

export default Logindesign