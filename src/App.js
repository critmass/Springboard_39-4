import answers from "./answers"
import Magic8Ball from "./Magic8Ball"
import './App.css';

function App() {
  return (
    <div className="App">
      <Magic8Ball answers = {answers} />
    </div>
  );
}

export default App;
