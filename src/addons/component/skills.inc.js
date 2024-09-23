import { useSelector } from "react-redux";
import  Skill  from 'addons/component/sub_component/skill.sinc'
import { initialNeededData } from 'addons/global_variable.inc';

function Skills(props) {
  //getting theme color
  const thColor = useSelector((state) => state.theme.value);
  const skillData = initialNeededData.skillData;
  
  return (
      <>
      <div id='skill'title='about oladejo jephthah'className='trigger j-round-large' style={{display:'none'}}>
        <div className='j-xlarge j-bolder j-container'><b>SKILLS</b></div>
        <br/>
        <div className="j-padding" style={{position:'relative',top:'-20px'}}>
          {
            skillData.map((skill,index) => (
              <div key={index} className='j-bold'style={{marginBottom:'10px'}}>
                <div className='j-bolder j-large'><b>{skill.name}</b></div>
                <Skill type={skill.short}/> {/* get each skills */}
              </div>
            ))
          }
        </div>
        <br/>
      </div>
      </>
    );
  }
  
  export default Skills;