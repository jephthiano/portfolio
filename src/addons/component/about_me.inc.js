import { useSelector } from "react-redux";

function AboutMe(props) {
  //getting theme color
  const thColor = useSelector((state) => state.theme.value);
  const classData = `${thColor.bgColorAlt1} j-home-padding`
  
  return (
      <>
      <div id='about_me'title='about oladejo jephthah'className={classData}>
        <div style={{padding:"50px 0px"}}>
          <div className='j-xxlarge j-bolder j-center'><b>ABOUT ME</b></div>
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
            <div>
              I would love to work with you on your next project.
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default AboutMe;