import React from 'react'

function ArrayEx(){
     let arr=["apple","mango","pineapple","orange"]
    //  let res=arr.map((val,index)=>{
    //     return <li key={index}>{val}</li>
    //  })
    
    
    return(
     <>
     {/* <ul>{res}</ul> */}
     <ul>{arr.map((val,index)=>{
        return <li key={index}>{val}</li>
     })}</ul>
     </>
    )
}
export default ArrayEx