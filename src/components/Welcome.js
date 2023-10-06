//[1] function 컴포넌트명(props){return 결과;}

// function Welcome() {
//   //JSX
//   return (
//     <p>안녕하세요 일본과</p>
//   );
// }



// [2] const 컴포넌트명 = function(props){}
// const Welcome = function () {
//   return (
//     <p>const 안녕하세요 일본과</p>
//   );
// }


//[3] const 컴포넌트명 = (props) => {}
const Welcome = ({ city, population } ) => {  //부모 컴포넌트로 부터 전달받은 재료
  // console.log(data);
  // console.log(typeof (data));

  return <>
    {/* JSX에서 {} 내부는 JS소스코드를 의미 */}
    <p>const 안녕하세요 일본과{city}( 인구수: {population}만명)</p>
    </>
};


//[4] export default function 컴포넌트명(props){return 결과;}
//     export default Welcome랑 합친 코드임
// export default function Welcome() {
//   return <p>Welcome to korea</p>;
// }


export default Welcome;
