

import TestProps from "./components/exam1/TestProps"

const App = (props) => {
  return (
    // <>
    //   <TestProps first='한글' second="123" third="&&&"></TestProps>
    //   <TestProps first='dr.hong' second="홍박사" third={1000}></TestProps>
    //   <TestProps first='dr.hong' second="홍박사" third={true}></TestProps>
    //   {/* 숫자, 부울형을 프롭스로 전달시에는 {}가 필요 */}
    // </>
    // <>
    // <TestProps first="asd"></TestProps>
    // <TestProps first="asd" second="zxc"></TestProps>
    //</>

    <>
      <TestProps first='dr.hong' second="홍박사" third={12} four="남"/>
      <TestProps first='risun' second="이순신" third={34}/>
      <TestProps first='dr.hong' second="홍박사" third={12} four="여"/>
    </>
  )
}

export default App;