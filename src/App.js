import  './App.css';
import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import AnimationType from './TypingAnimation';


function App(){


  const [name1, setName]=useState('');
  const zero1=0;
  const maxDigit=1000;
  const [count,setCount]=useState(0);
  const [_target,setTarget]=useState('');

  const handleTarget=(event)=>{
    setTarget(event.target.value)

  }
  const [cliMax, setTarget1]=useState('');
  const handleMin=(event)=>{
    setTarget1(parseInt(event.target.value));
  }
  const [topValue,setMinus]=useState=(0);
  
  
  const [maxNumber,setReduce]=useState('0');
  
  
  
  const alert1=()=>{
    alert("hello world");
  }

  
    
  
  
  return(
    <div className="App">
     <div className='bgradient text-blue-700 p-8 text-3xl rounded'>
      <p className='font-semibold'>
      <AnimationType />
      </p>
      
     </div>
     <div className='justify-center'>
     
     </div>
     <div className='flex ' >
     <div className='bg w-1/2 mt-4 mr-10 ml-10 '>
     <p>LETS START</p>
     </div>
     <div className='grid gap-3 shadow-lg mt-4 w-1/2'>
      <div className='bgradient rounded-md hover:bg-slate-400'>
      <span className='text-3xl rounded-lg  text-blue-800 bgradient pl-2 pr-2 mt-4 mb-4'>{count}</span>
      <span className='text-3xl rounded-lg bgradient pl-2 pr-2 mt-4 mb-4'>/{_target}</span>
        <br></br>
        <p className=''>Tap + to count</p>
       
        <br></br>
        <input type='number' className='text-center pb-3 text-4xl w-1/2 rounded-lg ' 
        value={_target}
        onChange={handleTarget}
        placeholder='Target: 1-1000' min={zero1} max={maxDigit}></input>
        <br></br>
        <button className='text-blue-600 text-4xl w-1/3 rounded-lg mt-3 bg-white mb-5' onClick={()=>setCount(count+1)}>+</button>
     // <button onClick className='bg-white text-blue-600 rounded-lg pl-3 pr-3 ml-10' onClick={()=>{setCount(count,)}}>reset</button>
      </div>
      <div className='bgradient rounded-md'>
      <div className='bgradient rounded-md  hover:bg-slate-400'>
      <span className='text-3xl bgradient rounded-lg pl-2 pr-2  mt-6 mb-4'>{cliMax}</span>
      <span className='text-3xl bgradient rounded-lg pl-2 pr-2 mt-6 mb-4'>/{cliMax}</span>
        <br></br>
        <p className=''>Tap - to subtract</p>
       
        <br></br>
        <input type='number' 
        value={cliMax}
        onChange={handleMin} className='text-center pb-3 text-4xl w-1/2 rounded-lg ' placeholder='1-1000'min={zero1} max={maxDigit}></input>
        <br></br>
        <button   className='text-blue-600 text-4xl w-1/3 rounded-lg mt-3 bg-white mb-5'>-</button>
      </div>
      </div>
     </div>
     
      

    
     
    
     

     </div>
     
     
     
    </div>
  
  );
  
};
export default App;




      
    
