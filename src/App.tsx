import './App.css'
import GoalProgressPieChart from './PieTracker'

function App() {

  return (
    <>
      <GoalProgressPieChart goalPrice={80000} currentPrice={24000} />
    </>
  )
}

export default App
