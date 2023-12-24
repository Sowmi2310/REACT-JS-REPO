import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UseEffect() {

    const [item,setItem]=useState([])
    useEffect(()=>{ 
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setItem(data)
            
        });
        },[]);
  return (
    <>
    <div>
    {
        item.map((a,b)=>{
            return(
                <div>
                    <h1>{a.title}</h1>
                    <img src={a.image} alt='' style={{height:"200px"}}/>
                    <br></br>
                    <p>{a.price}</p>
                    <p>{a.description}</p>
                    <Link className='bg-success' to={`/single/${a.id}`}>click</Link>

                </div>
            )
        })
    }

    </div>


    </>
  )
  
}

export default UseEffect