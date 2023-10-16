import React, { useState, useEffect } from 'react';

// const Counter = (props) => {
//   let num = props.count;
//   const inCrease = () => {
//     num = num + 1;
//     //props.count++; //props는 읽기 전용
//     const h1Tag = document.querySelector('h1');
//     h1Tag.innerText = num;
//   }
//   return(
//     <>
//       <h1>{num}</h1>
//       <button onClick={inCrease}>클릭</button>
//     </>
//   );
// };

const CounterEffect = (props) => {
  const [num, setNum] = useState(props.count);
  /*
  빈배열이 없는경우
  useEffect(()=>{
    console.log('useEffect 호출')
  })
  
  빈배열이 있는 경우
  useEffect(()=>{
    console.log('useEffect 호출')
    
  })
  
  */
  const useEffect = () => {
    return (
      <>

      </>
    )
  }

  useEffect(() => {
    console.log('use호출')
   },[num]);

  const inCrease = () => {
    setNum(num + 1);
  };

  const inDecrease = () => {
    if (num === 0) {
      alert('0보다 작게는 안됨');
      return;
    }
    setNum(num - 1);
  }

  

  return (
    <>
       <h1>{num}</h1>
      <button onClick={inCrease}>증가</button> 
      <button onClick={inDecrease}>감소</button>
    </>
  )
}


export default CounterEffect;