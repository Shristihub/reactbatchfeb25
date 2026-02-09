import ProfileCard from "./ProfileCard";
import "./ProfileDashboard.css"
const ProfileDashboard=({profiles})=>{
    return (
        <>
        <h2>Profile Dashboard</h2>
        <div className="main-container">
            {profiles.map((userprofile,index)=>
            <ProfileCard key={index} profile={userprofile}/>
            )}
        </div>
        </>
    )

}
export default ProfileDashboard;