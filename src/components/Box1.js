const Box1 = (data) => {
  console.log(data.children);
  return (
    <div className="box">
      <img className="img" src="img/c.jpg"></img>
      <div>
        {data.children}
      </div>
    </div>
  );
};

//디폴트값 지정하기
Box1.defaultProps = {  
  name: '기본상자',
  color:'yellow'
}

export default Box1;