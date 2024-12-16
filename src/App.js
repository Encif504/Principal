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
        <a className=' text-white ' href='#'>{_service}</a>
        <a className='text-white' href='#'>{_process}</a>
        <a className='text-white' href='#'>{_About}</a>
        <a className='text-white' href='#'>{_Work}</a>
        <a className='text-white' href='#'>{_Contact}</a>
      </nav>

      <br></br>
      
      <div className='flex gap-1'>
        <div className='w-1/2 bg-gradient-to-br from-slate-500 rounded-md to-green-400'>
          
          <br></br>
          <p className=' -tracking-wider p-3 text-justify text-ellipsis font-thin text-6xl leading-loose'>
         DESIGNER &
         DIGITAL ENTHUSIAST

          </p>
        </div>
        <div className='w-1/2 bg-gradient-to-br rounded-md from-slate-500 to-green-400'>
          <p className='text-center uppercase font-bold text-3xl'>we are you</p>
          <p className='animate-bounce'>IM HERE TO SERVE YOU</p>
          <img className='rounded-full size-40 float-end mr-3' src={me} alt='me'></img>
        </div>
     
        </div>
        <br></br>
        <div className='outline-slate-900 border-red-50'>AVAILABLE FOR PROJECTS</div>
        
        </div>
        
     
     
    
     
      
  

  

    
   
  );
}
export default App;
