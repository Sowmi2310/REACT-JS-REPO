import React from 'react'
let temp={
name:"not defined",
pic:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Floading&psig=AOvVaw1JmAML5S90KL-fGW9Z2ExN&ust=1703227842195000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjwwIH5n4MDFQAAAAAdAAAAABAE",
price:"-----"
}
function PropsEX({details=temp}) {
    let{name,pic,price}=details
  return (
    <>
   <h1>{name}</h1>
   <img src={pic} alt='loading'/>
   <h1>{price}</h1>
   
   
    </>
  )
}

export default PropsEX