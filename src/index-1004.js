
import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';


//ReactDOM.createRoot(document.getElementById('root')).render(
// ReactDOM.createRoot(document.querySelector('#root')).render(

// );

//옛날방식
// const name = 'dr.hong';
// const element = <h1>안녕하세요</h1>
// ReactDOM.render(
//   element,
//   document.querySelector('#root')  //표시될 위치
// );

//최신방식
// const element = <h1>안녕하세요</h1>
// ReactDOM.createRoot(document.querySelector('#root')).render(
//   <>{element}</>
// );


//--------------------------------------------------------------------------------------

// const person = {
//   name: '홍박사',
//   address: '대구',
//   age: 25,
// };

// const name = 'dr.hong';
// const element = <h1>안녕하세요{printPerson(person)}</h1>

// function printPerson(person) {
//   const { name, address, age } = person;

//   return (` ${name} 입니다. ${address}에서 살고, 나이는 ${age}입니다`);
// }

// const App = (props) => {
//   return (
//     <>
//       name
//       <hr />
//       {name}
//       <hr />
//       {element}
//     </>
//   )
// };

// ReactDOM.createRoot(document.querySelector('#root')).render(
//   <App />
  
// );


//--------------------------------------------------------------------------------------
// function printPerson({ name, age, address }) {
//   return (` ${name} 입니다. ${address}에서 살고, 나이는 ${age}입니다`);
// }

// const person = {
//      name: '홍박사',
//      address: '대구',
//      age: 25,
// };
   
// const element = (
//   <h1>
//     안녕하세요{printPerson(person)}
//   </h1>
// );
// const photoURl = 'https://img.freepik.com/free-photo/seoraksan-national-park-the-best-of-mountain-in-south-korea_335224-469.jpg'

// const element1 = <a href='https://www.google.com/'>클릭</a>
// const element2 = <img src={photoURl}/>


const MyObj = {
  ColorPicker: function ColorPicker(props) {
    return (
      <div style={{ backgroundColor: props.color }}>
            선택한 색상은 <b>{props.color}</b>
      </div>
    );
  }
}

function BlueColorPicker() {
  return <MyObj.ColorPicker color ='skyblue'/>
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  // <>
  //   {element1}
  //   <hr/>
  //   {element2}
  
  // </>
  <>
  
    <BlueColorPicker />
    
  </>
);
