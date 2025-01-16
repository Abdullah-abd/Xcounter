import './App.css';
import react,{useState} from "react"
import Decrement from './components/Decrement';
import Increment from './components/Increment';

function App() {
  const [value,setValue]= useState(0)
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count {value}</p>
      <Decrement setValue={setValue}/>
      <Increment setValue={setValue}/>
    </div>
  );
}

export default App;
