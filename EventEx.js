import React from "react";
function EventEx(){
      function click(a,b){
        document.write("WELCOME",a,b)
      }
      return(
      <>
      <button onClick={()=>click(" to"," REACT JS")}>click</button>
      
      
      
      
      </>
      );
}
export default EventEx