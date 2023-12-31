// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App_propsValidation';
// // import App from `./App.js`; //상기 소스코드와 같은 효과


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // JSX
//   <>  
//     {/* <App /> */}
//     {/* <App></App> */}
//     {/* <h1>일본반 화이팅ㅇㅇㅇ</h1> */}
    
//     <App></App>
//   </>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';


const SomeComponent = (props) => {
  //return (<>{ props.data }</>);
  return (
    <div>
      {/* <input type='text'
        //value={props.searchText} value는 html에서
        defaultValue={props.searchText}
      /> */}
      <input
        type='text'
        defaultValue={props.data[2] }
        style={
          {
            marginTop: '50px',
            marginBottom: '50px',
            marginLeft: '50px',
            marginRight: '50px',
            padding: '25px',
            borderRadius: '4px',
            border: '1px solid #f75211',
          }
        }
      />
      <span>{typeof (props.data[2])}</span>
    </div>
  )
};

SomeComponent.propTypes = {
  //data: PropTypes.arrayOf(PropTypes.number),
  //searchText:PropTypes.oneOf(['male','female'])
  //숫자든 문자든 애러안나게 값을 보냄
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]))
  
};


//ReactDOM.createRoot(document.getElementById('root')).render(
ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    {/* <h1>헬로우</h1> */}
    <SomeComponent data={[1, 2, 3, 4, 5,true]} />
    <SomeComponent data={['k','u','5',1,2,3]} />
    {/*  props로 배열 전달할때 {배열명} */}
    {/* <SomeComponent searchText="female" /> */}
    
  </>
);
