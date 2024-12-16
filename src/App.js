import React, {useState} from 'react';
import LoginPage from "./Login"


import me from './images/me.jpeg'




 
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
        <a className=' text-white ' href='Login.js'>{_service}</a>
        <a className='text-white' href='#'>{_process}</a>
        <a className='text-white' href='#'>{_About}</a>
        <a className='text-white' href='#'>{_Work}</a>
        <a className='text-white' href='#'>{_Contact}</a>
      </nav>

      <br></br>
      
      
        
        <div>
        <LoginPage />
          </div>
        
        </div>
        
     
     
    
     
      
  

  

    
   
  );
}
export default App;
