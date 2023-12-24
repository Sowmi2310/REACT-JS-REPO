import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'


function Home() {
    return (
        <>
            <h1 className="bg-primary">WELCOME TO REACT JS</h1>
            <p style={{
                color:'pink',
                background:'grey',
                textShadow:'3px 2px 3px green',
                fontSize:'50px',
                
            }}>React Js contains many modules and packages</p>
            <About/>
        </>
    );
}
export function About(){
    return(
        <>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdHtP2TCccokEERA5PlgbB-zLk6rSNCgGun-2BkCeEg&s" alt=''/>
        </>
    )
}
export default Home