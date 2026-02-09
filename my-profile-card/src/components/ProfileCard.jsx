import "./ProfileCard.css"


const ProfileCard =({profile})=>{
 
 return(
    <div className="profile-card">
     <div className="profile-header"></div>
     <div className="profile-image">
        <img src={profile.image} alt={`${profile.username}'s profile`} />
     </div>
     <div className="profile-content">
        <h2>{profile.username}</h2>
        <p>{profile.title}</p>
        <p>{profile.description}</p>
        <div className="profile-skills">
            <h3>Skills:</h3>
            <ul>
              {profile.skills.map((skill,index)=>
              <li key={index}>{skill}</li>
            )}
            </ul>
            
        </div>
     </div>

    </div>
 )


}
export default ProfileCard;