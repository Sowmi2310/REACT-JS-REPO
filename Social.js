import React from 'react'

function Social() {
    
  return (
   <>
   <div style={{backgroundImage:"url('https://images.pexels.com/photos/266688/pexels-photo-266688.jpeg?auto=compress&cs=tinysrgb&w=600')",height:'840px'}}>
    
    <div style={{padding:'200px'}}>
<h1 style={{color:'white'}}>SOCIAL BUTTON</h1>
<div className='container'>
    <div className='row'>
    <div className='col col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 '>
<button style={{border:'1px solid yellow',borderRadius:'10px ',backgroundColor:'yellow',color:'white'}}>LIKE</button> 
</div>
<div className='col col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 '>
<button style={{border:'1px solid white',borderRadius:'10px',backgroundColor:'white',color:'black'}}>COMMENT</button> 
</div>
<div className='col col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 '>
<button style={{border:'1px solid blue',borderRadius:'10px',backgroundColor:'blue',color:'white'}}>SHARE</button> 
</div>
</div>
</div>
</div>
    </div>
   </>
  )
}

export default Social