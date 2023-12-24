import React from "react";
import First from "../Routers/First";
import Second from "../Routers/Second";
 export default function ConRender(props){
    let res=props.num==="hi" ? <First/> : <Second/>
    
    return(
        <>
        {res}
        
        </>
    )
}