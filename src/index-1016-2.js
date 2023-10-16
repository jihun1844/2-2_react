
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";


//1. with JSX
// const element1 = (
//   <>
//     <h1 className='App'>
//       영진 컴정 일본 IT JI-A (AI SW)반
//     </h1>
//   </>
// );
// //2. Non JSX
// const element2 = React.createElement(
//   'h1',
//   { className: 'App', name:'김영진' },
//   '영진 컴정 일본 IT JI-A (AI SW)반 화이팅','ㅁ'
// );

// console.log(typeof (element1));
// console.log(typeof (element2));
// console.log(element1.props.className);
// console.log(element2.props.className);
// console.log(element1.children);
// console.log(element2.children);

// ReactDOM.createRoot(document.querySelector('#root')).render(
//   <>
//     {element1}
//     {element2}
//   </>
// );

/*
// [1] Function style - non JSX

const Greeting = (props) => {
  return (
    React.createElement('div', { id: 'Hello' }, '안녕', 'bey', props.name, 'gd')
  );
};

// [2] class 
class Greeting2 extends React.Component{
  render(){
     // 반드시 render 함수 구현이 되어 있어야 함
     const ch = ['안녕','영진','컴정',this.props.name,'님'];
     return (
        React.createElement('div',{id:'hello'},[...ch])
     );
  }
}

//[3]fun
const Greeting3 = (props) => {
  return (
    <>
      <div id='Hello3'>
        `안녕 ${props.name}님`
      </div>
    </>
  )
}

//[4]class type with JSX
class Greeting4 extends React.Component{
  render() {
   return (
    <>
      <div id='Hello3'>
        `안녕 ${props.name}님`
      </div>
    </>
    )
    );
  }
}
*/

//[1] if 문 사용
// const App = () => {
//   let result = null;
//   const loginCheck = 'n';
//   if (loginCheck === 'Y') {
//     result = <h3>홍박사님 환영 합니다.</h3>
//   } else {
//     result = <h3>게스트님 회원가입을 합시다</h3>
//   }

//   return (
//     <> {/* JSX */}
//       {result}
//     </>
//   );
// }

//[2]삼항연산자 or &&(And)
// const App = () => {
//   const loginCheck = 'y';
//   return (
//     <>
//       {
//         //삼항연산자
//         loginCheck === 'y' ?
//           (<h3>홍박사님 환영 합니다.</h3>) :
//           (<h3>게스트님 회원가입을 합시다.</h3>)
        
//       }
//       {/*&&*/}
//       {loginCheck === 'y' && (<h3>홍박사님 환영 합니다.</h3>)}
//     </>
//   )
// }
//[3] IIFE(Immediately invoked function expression): 즉시 호출괴는 함수 표현식
//형식: (이름없는 함수정의)()
//이름없는 함수를 정의하고 곧 바로 호출
const App = () => {
  const loginCheck = 'y';
  return (
    <>
      {//JSX내에서 js코드 실행
        (() => { //이름없는 함수 정의
          //if 문, 삼항연산자, &&
          return (loginCheck==='y'? <h3>홍박사 회원님 환영</h3>:<h3>게스트님 회원가입을 합시다.</h3>)
        })()
      }
    </>
  )
}


ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <App/>
  </>

);