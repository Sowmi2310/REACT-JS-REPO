import React from "react";
import Home from "./demo.js";
import "bootstrap/dist/css/bootstrap.css";
import style from "./Newstyle.module.css";
function Day() {
  return (
    <>
      <h1 className="card bg-success text-center text-danger">
        Lets starts Learning
      </h1>
      <p className={style.para}>GOOD TIME WILL COME</p>
      <img src={require("./car.jpg")} height={"100px"} width={"500px"} />
      {/* <marquee behaviour="scroll" direction="right"><h1>WELCOME</h1></marquee> */}
      <Home />
    </>
  );
}
export default Day;
