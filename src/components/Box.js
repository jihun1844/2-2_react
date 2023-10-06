const Box = (data) => {
  return (
    <div className="box">
       <img className="img" src="img/b.jpg"></img>
     
      <div className="text">
       
        <p>
          사이다
        </p>
      </div>
    </div>
  );
};

//네모박스
/* <div className="box" style={{ backgroundColor: data.color }}>
{data.name}
</div>
*/

//디폴트값 지정하기
Box.defaultProps = {
  name: '기본상자',
  color:'yellow'
}

export default Box;