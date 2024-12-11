import React, {useState} from 'react';


import me from './images/me.jpeg'
import port1 from './images/sample.jpg'



 
  function App(){
    const myname='SAMUEL SIFUNA';
    const _service="Service";
   const  _process="Process";
   const  _About="About";
    const _Work="Work";
   const  _Contact="Contact";
   const hello=()=>{
    console.log("Hello world")
   }

   
  
  return(
    <div className='App'>
      
      <nav className='pl-10 pr-10 pt-7 flex justify-around shadow-xl shadow-green-400 bg-slate-800 pb-3'>
      <p className='flex text-4xl animate-pulse duration-300  leading-tight text-white'>{myname}</p>
        <a className=' text-white bg-green-600' href='#'>{_service}</a>
        <a className='text-white' href='#'>{_process}</a>
        <a className='text-white' href='#'>{_About}</a>
        <a className='text-white' href='#'>{_Work}</a>
        <a className='text-white' href='#'>{_Contact}</a>
      </nav>

      <br></br>
      
      <div className='flex'>
        <div className='w-1/2 bg-gradient-to-br from-slate-500 to-green-400'>
          <p className='text-center uppercase font-bold text-3xl'>here we are</p>
          <br></br>
        </div>
        <div className='w-1/2'>
          <p className='text-center uppercase font-bold text-3xl'>we are you</p>
        </div>
     
        </div>
        </div>
        
     
     
    
     
      
  

  

    
   
  );
}
export default App;
