import './App.css';
import Stories from './components/Stories'

const App = () => {

  return (
    <div className="App">
      <h1>💸 Market Update 💸</h1>
      <h2>Here's some info on how major stories are affecting the financial markets</h2>
      <Stories />
    </div>
  )
}

export default App