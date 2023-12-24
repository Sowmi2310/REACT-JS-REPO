import React, { useState } from 'react'





export default function ListAll(){
const [Colors,setColors]=useState(["pink","red"])

const [extra,setExtra]=useState('')
const [newadd,setNewadd]=useState('')

   function add(){
    
    setColors([...Colors,extra])
    document.getElementById("one").value='';
   }  
   function getadd(){
   let a=setColors([...Colors,...extra,newadd])
   let b=a.filter()
    
   
   } 
   
return(
    <>
    <h1>{extra}</h1>
    <input type='text' id='one'  onChange={e=>setExtra(e.target.value)} />
    <button onClick={()=>add()}>click</button>
   <button onClick={()=>getadd()}>get</button>
    <ul>{Colors.map((a,b)=>{
        return<li onChange={e=>setNewadd(e.target.value)} key={b}>{a}</li> 
    })}
       
    </ul>
    </>
)
}