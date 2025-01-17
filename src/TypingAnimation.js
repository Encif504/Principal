import React, { useState, useEffect } from 'react';
 const TypingAnimation = ({ text }) => { const [displayText, setDisplayText] = useState('');
   const [index, setIndex] = useState(0); useEffect(() => { if (index < text.length) { const timeoutId = setTimeout(() => { setDisplayText(prevText => prevText + text[index]); setIndex(prevIndex => prevIndex + 1); }, 200); 

    return () => clearTimeout(timeoutId); } }, [index, text]); return <span>{displayText}</span>; }; function App() { return ( <div className="App">
       <TypingAnimation  text="This application provides a means to capture customers data"  /> </div> ); }
       
       export default App;