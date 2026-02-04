function UserDetails(props){
    // let user={
    //     username:props.name,
    //     city:props.city
    // }
    return(
        <>
        <h2>User Details</h2>
        <h3>Username: {props.userinfo.uname}</h3>
        <h3>City: {props.userinfo.city}</h3>
        </>
    ); 
}
export default UserDetails;