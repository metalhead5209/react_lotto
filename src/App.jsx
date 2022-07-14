
import './App.css'
import Ball from './components/Ball/Ball';
import Lottery from './components/Lottery/Lottery';

function App() {
  

  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
    </div>
  )
}

export default App
