import UserDetails from "./UserDetails";

function Courses(){
  let training = "Java Full Stack";
  const coursesArr = ["MERN", "MEAN", "Spring with React", "Java with Angular"];
   //0.9*4 =3.6
    //Math.floor(3.6)=3
  let choice = Math.floor(Math.random()*coursesArr.length);
  let course = coursesArr[choice];
  let userinfo = {uname:"Priya", city:"Bangalore"};
    return(
        <>
    <h2> Online Coaching in {training}</h2>
    <h3> Todays Course : {course}</h3>
    <UserDetails userinfo={userinfo}></UserDetails>
    </>
    );
}
export default Courses;