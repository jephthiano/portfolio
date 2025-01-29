import { useSelector } from "react-redux";
import  Skill  from 'addons/component/sub_component/skill.sinc'
import { initialNeededData } from 'addons/global_variable.inc';

function Skills(props) {
  //getting theme color
  const thColor = useSelector((state) => state.theme.value);
  const skillData = initialNeededData.skillData;
  
  return (
      <>
      <div id='skill'title='oladejo jephthah skills'className='j-home-padding'>
        <div style={{padding:"50px 0px"}}>
          <div className='j-xxlarge j-bolder j-center'><b>SKILLS</b></div>
          <br/>
          <div className="j-padding">
            {
              skillData.map((skill,index) => (
                <div key={index} className='j-bold'style={{marginBottom:'10px'}}>
                  <div className='j-bolder j-large'><b>{skill.name}</b></div>
                  {/* get each skills */}
                  <Skill type={skill.short}/> 
                </div>
              ))
            }
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Skills;