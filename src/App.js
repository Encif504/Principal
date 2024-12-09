import React, {useState} from 'react'
import './App.css';
import background from './logo.svg'


 
  function App(){
  const [count,setCount]=useState(0)
  return(
    <div>
    <h1 className='text-red-950'>Count: {count}</h1>
    <button className=' pl-6 w-4 bg-blue-400' onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}
export default App;





