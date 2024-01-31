import $ from 'jquery'
import {useSelector} from "react-redux";
import  {horNav} from 'addons/function/general.fuc.js';
 
function AllButton(props) {
  const thColor = useSelector((state) => state.theme.value);
  let btn2 = thColor.bgColor2+' laucher';
  let btn1 = thColor.bgColor1+' laucher';
  
    return (
      <>
      <div className='j-vertical-scroll j-home-padding'style={{margin:'5px 0px',padding:'0px 15px'}}>
        <div style={{padding:'10px 0px'}}>
          <span id='t_about_me'className={btn2}style={{margin:'0px 5px 0px 0px'}}onClick={() => horNav('about_me',$('#t_about_me'))}>
            <span className="j-padding j-clickable j-btn j-round">
            <b>About Me</b>
            </span>
          </span>
          <span id='t_project'className={btn1}style={{margin:'0px 5px'}} onClick={() => horNav('project',$('#t_project'))}>
            <span className="j-padding j-clickable j-btn j-round">
            <b>Projects</b>
            </span>
          </span>
          <span id='t_contact_me'className={btn1}style={{margin:'0px 5px'}}onClick={() => horNav('contact_me',$('#t_contact_me'))}>
            <span className="j-padding j-clickable j-btn j-round">
            <b>Contact Me</b>
            </span>
          </span>
        </div>
      </div>
      </>
    );
  }
  
  export default AllButton;