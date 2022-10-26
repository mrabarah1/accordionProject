import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import questions from './data';

const Question = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  
  return(
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p> }
      
    </article>
  )
};

export default Question;




// const Question = ({title, info}) => {
//   const[showInfo, setShowInfo] = useState(false);
  
//   return (
//     <article className='question'>
//       <header>
//         <h4>{title}</h4>
//       <button className='btn' onClick={() => setShowInfo(!showInfo)}>
//         {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
//       </button>
//       </header>
//       {showInfo && <p>{info}</p>}
      
//     </article>
    
//   )
// };

// export default Question;


// if showInfo is true, i will display my message
// if showInfo is false, i will hide my message