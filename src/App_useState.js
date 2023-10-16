import './App.css';
import './common.css';
import Counter from "./components/exam2/Counter_useState"
import Info from "./components/exam2/info_useState"
import CounterE from "./components/exam2/Counter_useEffect"
import CounterE2 from "./components/exam2/Counter_useEffect2"


const App = (props) => {
  return (
    <>
      {/* <p>
        안녕하세요
      </p>
      <br />
      <br />
      <div className='textBox'></div>
      <div className='textBox2'></div> */}
    
      <Counter count={0} />
      <Counter count = {666}/>
      <hr />
      <Info></Info>
      <hr />
      <CounterE const={0} />
      
      <CounterE2 const = {0}/>
    </>
  );
}

export default App;