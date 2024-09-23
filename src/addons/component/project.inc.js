import $ from 'jquery'
import {useSelector} from "react-redux";
import  ProjectSec  from 'addons/component/sub_component/projectsec.sinc'
import  {horNav} from 'addons/function/general.fuc';

function Project(props) {
  const thColor = useSelector((state) => state.theme.value);

  let btn2 = thColor.bgColor2+' laucherpro'; let btn1 = thColor.bgColor1+' laucherpro';

    return (
      <>
      <div id='project'title='Oladejo Jephthah Previous Projects'className='trigger'style={{display:'none'}}>
        <div className=''>
          <div className='j-xlarge j-bolder j-container'><b>PROJECTS</b></div>
          <div className='j-vertical-scroll j-padding'>
            <div style={{padding:'10px 0px'}}>
              <span id='t_website'className={btn2}style={{margin:'0px 5px 0px 0px'}}onClick={() => horNav('website',$('#t_website'),'pro')}>
                <span className="j-padding j-clickable j-btn j-round">
                <b>Websites</b>
                </span>
              </span>
              <span id='t_app'className={btn1}style={{margin:'0px 5px 0px 0px'}}onClick={() => horNav('app',$('#t_app'),'pro')}>
                <span className="j-padding j-clickable j-btn j-round">
                <b>Apps</b>
                </span>
              </span>
            </div>
          </div>
            
            <div style={{marginLeft:'5px'}}>
              <div id='website'className='triggerpro'>
                  <div className="j-row">
                    <ProjectSec type='web'/>
                  </div>
              </div>
              <div id='app'className='triggerpro'style={{display:'none'}}>
                  <div className="j-row">
                    <ProjectSec type='app'/>
                  </div>
              </div>
            </div>
        </div>
        <br/>
      </div>
      </>
    );
  }
  
  export default Project;