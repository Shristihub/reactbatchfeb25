import Dashboard from "./components/Dashboard"
import { activitiesList } from "./data/activities"

function App() {

  return (
    <>
     <h1>My Habit Tracker </h1>
      <Dashboard activityList={activitiesList}/>
    </>
  )
}

export default App
