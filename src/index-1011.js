
import React from 'react';
import ReactDOM from 'react-dom/client';

const SideMenu = (props) => {
  console.log(props.showMenu);
  return (
    <>
      <div style={{
        border: '1px solid red',
        width: '200px',
        height: '94vh',  //viewport height, vw : viewport width
        padding: '10px',
        textAlign: props.direction,
        textTransform: 'uppercase',

      }}>
        {props.direction}
      
        <ul style={{listStyle:'none', paddingLeft:'0px', lineHeight:'2.6rem'}}>
          <li>Lorem.</li>
          <li>Quae.</li>
          <li>Magni?</li>
          <li>Nostrum.</li>
          <li>Tenetur.</li>
          <li>Eaque?</li>
          <li>Voluptas? </li>
          <li>Ipsam.</li>
          <li>Consequatur!</li>
          <li>Ab.</li>
          <li>Commodi.</li>
          <li>Nemo?</li>
          <li>Debitis.</li>
          <li>Expedita?</li>
          <li>Nam?</li>
          </ul>
        
        </div>
    </>
  );
}

const App = (props) => {
  const { showMenu } = props;
  return (
    <showMenu/> && <SideMenu direction='left'/>
  );
}


ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
  <App showMenu={true} />
  </>
);
