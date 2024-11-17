import $ from 'jquery'
import {useSelector} from "react-redux";
import  {horNav} from 'addons/function/general.fuc.js';
import { downloadFile } from 'addons/query/api';
import { server } from 'addons/global_variable.inc';

function Myself(props) {
  const thColor = useSelector((state) => state.theme.value);

  const cVURL = `${server}dcv/`;

    return (
      <>
        <div id='myself'title='About Oladejo Jephthah'className='j-home-padding'>
          <div className='j-panel'>
            <div className='j-large'>Hello</div>
            <div className='j-xxlarge j-bolder'style={{fontFamily:'Sofia'}}>I'm Jephthah Oladejo</div>
            <div className='j-large'style={{fontFamily:'Kurale'}}>Full Stack Web Application/Software Developer</div>
            <div style={{marginTop:'20px'}}>
              <span className={thColor.bgColor2} style={{fontFamily:'Sofia,sans-serif',margin:'5px 10px 5px 0px'}}>
                <a href="#contact_me" className='j-round j-btn j-bolder j-padding'>
                  Contact Me
                </a> 
              </span>
              <span className={thColor.bgColor2} style={{fontFamily:'Sofia,sans-serif'}}>
                <div className='j-round j-btn j-bolder j-padding'onClick={() => downloadFile('OLADEJO JEPHTHAH CV.pdf')}>
                  Download CV
                </div>
                {/* <a href={cVURL}className='j-round j-btn j-bolder j-padding'>
                  Download CV
                </a> */}
              </span>
            </div>
          </div>
          <br/>
        </div>
      </>
    );
  }
  
  export default Myself;