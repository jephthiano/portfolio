import $ from 'jquery'
import { useSelector } from "react-redux";
import { horNav } from 'addons/function/general.fuc';

function AboutMe(props) {
  //getting theme color
  const thColor = useSelector((state) => state.theme.value);
  
  return (
      <>
      <div id='about_me'title='about oladejo jephthah'className='trigger j-round-large'>
        <div className='j-xlarge j-bolder j-container'><b>ABOUT ME</b></div>
        {/* <br/> */}
        {/* <div className='j-row'>
          <div className='j-col m4 j-padding'>
            <center>
              <Image />
            </center>
          </div>
          <div className='j-col m8 j-padding'>
            <div className='j-large'style={{lineHeight:'30px'}}>
              <div style={{marginBottom:'10px'}}>
                I'm a Fullstack Web Application & Website Developer with over 3 years of experience in developing modern, mobile first,
                responsive, scalable and fast web applications and software. 
              </div>
              <div style={{marginBottom:'10px'}}>
                In addition to being a web developer, I'm passionate about transforming creative ideas into digital solutions. My strength lies in creativity, innovation 
                and problem-solving to deliver the best result for user experience.
              </div>
              <div style={{marginBottom:'10px'}}>
                I would love to work with you on your next project.
              </div>
              <center>
                <span className={thColor.bgColor2} style={{fontFamily:'Sofia,sans-serif',margin:'5px 10px 5px 0px'}}>
                  <div className='j-round j-btn j-bolder j-padding'onClick={() => horNav('contact_me',$('#t_contact_me'))}>
                    Contact Me
                  </div>
                </span>
              </center>
            </div>
          </div>
        </div> */}
        <div className='j-large j-padding'style={{lineHeight:'30px'}}>
              <div style={{marginBottom:'10px'}}>
                I'm a Fullstack Software/ Web Application Developer with over 4 years of experience in developing modern, mobile first,
                responsive, scalable and fast softwares and APIs.
              </div>
              <div style={{marginBottom:'10px'}}>
                I am an individual with passion for learning and transforming creative ideas into digital solutions and dedicated to delivering high-quality results. My strength lies in creativity, innovation 
                and problem-solving to deliver the best result for user experience.
              </div>
              <div style={{marginBottom:'10px'}}>
              <div className="j-bolder">My expertise are in the following aspects.</div>
                <div className="j-padding">
                  <div><span className="fas fa-arrow-right" style={{marginRight:"10px"}}></span>Fullstack Development</div>
                  <div><span className="fas fa-arrow-right" style={{marginRight:"10px"}}></span>Frontend Development</div>
                  <div><span className="fas fa-arrow-right" style={{marginRight:"10px"}}></span>Backend Logics/APIs Development</div>
                  <div><span className="fas fa-arrow-right" style={{marginRight:"10px"}}></span>Database Architecture</div>
                </div>
              </div>
              <div style={{marginBottom:'10px'}}>
                I would love to work with you on your next project.
              </div>
              <center>
                <span className={thColor.bgColor2} style={{fontFamily:'Sofia,sans-serif',margin:'5px 10px 5px 0px'}}>
                  <div className='j-round j-btn j-bolder j-padding'onClick={() => horNav('contact_me',$('#t_contact_me'))}>
                    Contact Me
                  </div>
                </span>
              </center>
            </div>
      </div>
      </>
    );
  }
  
  export default AboutMe;