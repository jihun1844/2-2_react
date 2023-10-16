import React, { useState } from 'react';

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

const Counter = (props) => {
  const [num, setNum] = useState(props.count);
  //num: 상태관리용 변수
  //setNum: num의 Setter 함수
  // num은 setNum 으로만 값 변경 가능
  // const [변수명, set변수명(camelCase)]=useState(초기값);
  const inCrease = () => {
    setNum(num + 1);
  };

  const inDecrease = () => {
    if (num == 0) {
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


export default Counter;