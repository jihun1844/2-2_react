import { Fragment } from "react";
import Welcome from "./Welcome";


function Abc() {
  
  return (   //리턴문이 여러줄이면 소괄호 치기
  // <h2>
  //   열심히 합시다
  // </h2>
    <>
      <Welcome city='Seoul' population='940' />
      <Welcome city='Daegu' population='230'></Welcome>
    
    </>
  );
}

export default Abc;
