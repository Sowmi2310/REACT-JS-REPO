import React from "react"
function  OnchangeEX(){
    function clickch(a){
     console.log(a)
    }
    
    
    return(
        <>
        <input type="text" onChange={(e)=>clickch(e.target.value)} />
        
        </>
    )
}
export default OnchangeEX