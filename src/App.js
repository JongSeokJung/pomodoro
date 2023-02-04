import './App.css';
import Timer from './Timer';

const App = () => {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 600)
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
