import './App.css';
import react,{useState} from "react"
import Decrement from './components/Decrement';
import Increment from './components/Increment';

function App() {
  const [count,setCount]= useState(0)
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count {count}</p>
      <Decrement setValue={setCount}/>
      <Increment setValue={setCount}/>
    </div>
  );
}

export default App;
