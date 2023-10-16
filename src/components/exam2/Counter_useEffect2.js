import React, { useState, useEffect } from 'react';

const CounterE2 = (props) => {
  const [num, setNum] = useState(props.count);
  const [oneHundred, setOneHundred] = useState(100);
  const [oneThousand, setOneThousand] = useState(1000);
  useEffect(
    () => { console.log('Effect 호출') },
    [num],
    
  );
  useEffect(
    () => { console.log('100 이상의 Effect 호출') },
    [num, oneHundred, oneThousand]
  );

  return (
    <>
      <h1>{num}</h1>
      <button onClick={(e) => { setNum(num + 1) }}>1증가</button>
      <button onClick={(e) => { setNum(num - 1) }}>1감소</button>
      <br />
      <h1>{oneHundred}</h1>
      <button onClick={(e) => { setOneHundred(oneHundred + 100) }}>100증가</button> 
      
      <br />
      <h1>{oneThousand}</h1>
      <button onClick={(e) => { setOneThousand(oneThousand + 1000) }}>1000증가</button> 
      
      <br />
    </>
  )
}


export default CounterE2;