import $ from 'jquery'
import { useSelector } from "react-redux";
import { skillData } from 'addons/data.inc';
import { horNav } from 'addons/function/general.fuc';
import  Skill  from 'addons/component/skill.sinc'
import Image from 'addons/component/image.sinc';


function AboutUs(props) {
  //getting theme color
  const thColor = useSelector((state) => state.theme.value);

  return (
      <>
      <div id='about_me'title='about oladejo jephthah'className='trigger j-round-large'>
        <div className='j-xlarge j-bolder j-container'><b>ABOUT ME</b></div>
        <br/>
        <div className='j-row'>
          {/* about me */}
          <div className='j-col l6'>
            <div className='j-row'>
              <div className='j-col m4 j-padding'>
                <center>
                  <Image />
                </center>
              </div>
              <div className='j-col m8 j-padding'>
                <div className='j-jutify'>
                  I'm a Fullstack Web Application/Websites Developer with over 3 years of experience in developing modern, mobile first,
                  responsive, scalable and fast web applications and software. 
                  <br/>
                  In addition to being a web developer, I'm passionate about transforming creative ideas into digital solutions. My strength lies in creativity, innovation 
                  and problem-solving to deliver the best result for user experience.
                  <br/>
                  I would love to work with you on your next project.
                  <br/>
                    <br />
                    <span className={thColor.bgColor2} style={{fontFamily:'Sofia,sans-serif',margin:'5px 10px 5px 0px'}}>
                      <div className='j-round j-btn j-bolder j-padding'onClick={() => horNav('contact_me',$('#t_contact_me'))}>
                        Contact Me
                      </div>
                    </span>
                </div>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className='j-col l6 j-padding'>
            <div className='j-xlarge j-bolder'style={{fontFamily:'sofia,sans-serif'}}>Skills</div>
            <div style={{position:'relative',to:'-20px'}}>
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
        </div>
      </div>
      </>
    );
  }
  
  export default AboutUs;