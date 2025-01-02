import React, { useState, useEffect } from "react";
import ReactDOM  from "react-dom";
import logoo from "./images/logo2.jpg";
import bgimage from "./images/me.jpeg";
import Animatiotyping from "./TypingAnimation";

function App(){

  const backgroundStyle={backgroundImage:"url('./images/logo2.jpg')"};
 

  return(
    <div className="App p-1">
      <div className="flex  pt-8 rounded-md justify-between shadow-xl pb-3">
        <img className=" ml-2 size-20 rounded-full mb-2" src={logoo}></img>
        <div className="flex gap-6 float-right max-h-fit text-white font tracking-wider bg-slate-900 pt-6 rounded-2xl pr-10 font-extrabold pl-10 mr-8" >
          <p className=" hover:bg-green-500">LIST</p>
          <p className="">|</p>
          <p className="">RECORDS</p>
        </div>
        </div>
        <div className=" flex font-bold text-4xl">
        <Animatiotyping  speed={800} />
        
        <div className="">
          <label className=""></label>
          <input type="text" placeholder="Jonh"></input>
        </div>
        </div>
        
     
        
        
      
     
       
        
     
       
       

    </div>
  )
}
export default App;