
import PropTypes from 'prop-types';
export default function TestProps({first, second, third, four='미입력'}) {
  return (
    <>
      <p>첫 번째 Props: {first}</p>
      <p>두 번째 Props: {second}</p>
      <p>세 번째 Props: {third}</p>
      {four ? <p>네 번째 Props: {four}</p> : null}
      
    </>
  );
}

TestProps.propTypes = {
  first : PropTypes.string.isRequired, //first라는 props값은 string이고 필수 props이다
  second: PropTypes.string.isRequired,
  third : PropTypes.string.isRequired,    //any: 모든타입
  four : PropTypes.oneOf(['남','여'])
}

TestProps.defaultProps = {
  first : '영진', //first라는 props값은 string이고 필수 props이다
  second: '컴정',
  third : '하이'    //any: 모든타입
}