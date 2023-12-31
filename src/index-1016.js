
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
    const ch = ['안녕', '영진', '컴정', this.props.name, '님'];
    return (
      React.createElement('div', { id: 'hello2' }, [...ch])
    );
  }
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <Greeting name='김영진' />
    <Greeting2 name='이영진' />
    <Greeting3 name='박영진' />
    <Greeting3 name='최영진' />
  </>

);