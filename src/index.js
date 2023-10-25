import React,{useState, useEffect,useRef} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const someData = { //중첩 객체의 정의
  a:'KT',
  b:[
    {
      name:'홍길동',
      sns:[],
      address:'대구 북구 아파트 201호',
      email:'asd'
    },
    {
      name:'김철수',
      sns:[],
      address:'서울 북구 아파트 201호',
      email:'hhh@123.com'
    },
  ],
  c:'...',
  d:'...',
};
// const App = ()=>{
//   const [n,setN] = useState(0);
//   const todoIdx = useRef(0); // todoIdx = {current:0}
//   console.log(todoIdx);
//   useEffect(
//     ()=>{
//       console.log('렌더링')
//     }
//     //,[]
//   );

//   const addTodo = ()=>{
//     todoIdx.current=todoIdx.current+1;
//     console.log(todoIdx.current);
//   };
//   return (
//     <>
//       <h1>카운터: {n}</h1>
//       <button onClick={  ()=>setN(n+1) }>
//         +1
//       </button>
//       <hr />
//       <h1>todoIdx:{todoIdx.current}</h1>
//       <button onClick={ 
//         ()=>{
//           addTodo();  // useRef의 State
//           setN(n+1);  // useState의 State
//         }
//         }>
//         새로할일추가
//       </button>


//     </>
//   )

// };

ReactDOM.createRoot(document.querySelector('#root')).render( 
  <>
   <App />
  </>
);
