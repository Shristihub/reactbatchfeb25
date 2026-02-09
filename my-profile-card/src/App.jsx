// import ProfileCard from "./components/ProfileCard"
import ProfileDashboard from "./components/ProfileDashboard.jsx"
import {profilesList} from "./data/Profiles.js"

function App() {

  return (
    <>
      <h1>My Profile Card</h1>
      <ProfileDashboard profiles={profilesList}></ProfileDashboard>
    </>
  )
}

export default App
