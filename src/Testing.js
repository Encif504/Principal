import React, { useState } from "react";
import ReactDom from 'react-dom';
import img2 from './images/sample.jpg';


function display(){
    const wer=React.createElement('div');
     wer.createContext("hello world");
    
    
}

const Testing=()=>{
    return(
    <div>
        <p className='bg-slate-800 pt-4 PB-10 text-white  text-center items-center'>
            WE WELCOME YOU HERE
        </p>
        <button onClick={display}>click here</button>
    </div>
);
};
export default Testing;