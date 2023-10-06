import './App.css';
import Abc from './components/Abc';
import Box from './components/Box';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
//import Welcome from './components/Welcome';

function App() {
  // 작업처리를 하고 그걸 바탕으로 리턴
  return (  //이안에 적는것은 html에 추가
    //JSX 해당하는 내용
    <div className='App'>
      <h1>일본IT과 AI소프트웨어반(2JI-A) 화이팅</h1>
      {/* Abc컴포넌트를 부름 */}
      <Abc />  
      <Box name='파란상자' color='#0000ff' />
      <Box name='녹색상자' color='green' />
      <Box name='노란상자' color='yellow' />
      <Box name='??상자' color='rgb(200,140,45,0.5)' />
      <Box />
      <br />
      <Box1 name='1번 무명상자' color='rgb(111,111,111,0.5)'>
        어떤게 나타나냐
        <p>잘 보일까요</p>
      </Box1>
      <Box1 name='2번 무명상자' color='rgb(111,90,111,0.5)'>
        어떤게 나타나냐
        <p>잘 보일까요</p>
      </Box1>
      <Box1 name='3번 무명상자' color='rgb(111,50,111,0.5)'>
        어떤게 나타나냐
        <p>잘 보일까요</p>
      </Box1>
      <Box1 name='4번 무명상자' color='rgb(111,10,111,0.5)'>
        어떤게 나타나냐
        <p>잘 보일까요</p>
      </Box1>
      <Box1 name='5번 무명상자' color='rgb(111,0,111,0.5)'>
        어떤게 나타나냐
        <p>잘 보일까요</p>
      </Box1>

      <br />
      <Box2 name='2번 상자' color='rgb(155,35,50,0.7)'>
        
      </Box2>
      <Box2 name='2번 상자' color='rgb(155,35,50,0.7)'>

      </Box2>
      <Box2 name='2번 상자' color='rgb(155,35,50,0.7)'>

      </Box2>
      <Box2 name='2번 상자' color='rgb(155,35,50,0.7)'>

      </Box2>
      <Box2 name='2번 상자' color='rgb(155,35,50,0.7)'>

      </Box2>

   </div>
  );
}

export default App;
