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

   
  
  return(
    <div className='App'>
      
      <nav className='pt-7 flex gap-5 shadow-xl shadow-green-400 bg-slate-800 pb-3'>
      <p className='flex text-4xl animate-pulse duration-300  leading-tight text-white'>{myname}</p>
        <a className=' text-white bg-green-600' href='#'>{_service}</a>
        <a className='text-white' href='#'>{_process}</a>
        <a className='text-white' href='#'>{_About}</a>
        <a className='text-white' href='#'>{_Work}</a>
        <a className='text-white' href='#'>{_Contact}</a>
      </nav>
      <br>
      </br>
      <div className='flex flex-row gap-10 pt-7'>
        <div className='border-green-700 w-6/12'>
        <p className='text-center' >GET IN TOUCH</p>
        
        <input type='text' className='float-end text-left placeholder-green-700' placeholder='Enter your Name'></input>
          <img className='rounded size-32' src={port1} alt='sample'></img>
          <input type='email' className='hover:required:'placeholder='email'></input>
        </div>
       
        <div className=' grid-cols-4'>
          <img className='rounded size-52' src={port1} alt='sample'></img>
        </div>
      </div>
 
     
        </div>
        
     
     
    
     
      
  

  

    
   
  )
}
export default App;





