import Courses from "./Courses";
import "./Courses.css";
import GreetMessage from "./GreetMessage";

function Header(props) {
  let tag = props.tagline;
  const subtitle = <h3 className="tagclass">{tag}</h3>
 return(
  <>
    <h1>Shristi Tech Academy</h1>
    {subtitle}
    <Courses ></Courses>
  </>

 );
}
export default Header;