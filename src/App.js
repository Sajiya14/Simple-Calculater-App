import './App.css';
import {useState} from 'react';

const App = () => {
  const [result, setResult] = useState("");

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setResult(eval(result).toString());
  }

  return (
    <div className="container">
      <div className='appName'> Simple Calculater 

      <div className='calculater'>
        <form>
          <div className ="display">
            <input type='text' value ={result} />
          </div>
          </form>

          <div className='keypad'>
            <button value="AC" onClick={clear}>AC</button>
            <button value="C" onClick={backspace}>C</button>
            <button value="." onClick={e => setResult(result + e.target.value)}>.</button>
            <button value="/" onClick={e => setResult(result + e.target.value)}>/</button>
          </div>

          <div className='keypad'>
            <button value="7" onClick={e => setResult(result + e.target.value)}>7</button>
            <button value="8" onClick={e => setResult(result + e.target.value)}>8</button>
            <button value="9" onClick={e => setResult(result + e.target.value)}>9</button>
            <button value="*" onClick={e => setResult(result + e.target.value)}>*</button>
          </div>

          <div className='keypad'>
            <button value="4" onClick={e => setResult(result + e.target.value)}>4</button>
            <button value="5" onClick={e => setResult(result + e.target.value)}>5</button>
            <button value="6" onClick={e => setResult(result + e.target.value)}>6</button>
            <button value="+" onClick={e => setResult(result + e.target.value)}>+</button>
          </div>

          <div className='keypad'>
            <button value="1" onClick={e => setResult(result + e.target.value)}>1</button>
            <button value="2" onClick={e => setResult(result + e.target.value)}>2</button>
            <button value="3" onClick={e => setResult(result + e.target.value)}>3</button>
            <button value="-" onClick={e => setResult(result + e.target.value)}>-</button>
          </div>

        <div className='keypad'>
            <button value="00" onClick={e => setResult(result + e.target.value)}>00</button>
            <button value="0" onClick={e => setResult(result + e.target.value)}>0</button>
            <button value="=" className="equal" onClick={calculate}>=</button>
          </div>
      </div>
      </div>
  </div>
  );
}

export default App;
