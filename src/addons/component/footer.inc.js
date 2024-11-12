import {useSelector} from "react-redux";
import SocialHandle from 'addons/component/sub_component/social_handle.sinc';

function Footer(props) {
    const theme = useSelector((state) => state.theme.value);
    const d = new Date(); let year = d.getFullYear();

    return (
      <>
      <div className='j-home-padding'>
        <div id="footer"title='footer'className="dmt3 j-center j-padding">
            <div><h4 style={{fontSize:'20px'}}>Oladejo Jephthah</h4></div>
            <SocialHandle bgColor={theme.bgColor1}/>
            <p className="j-tiny"style={{margin:'0px',padding:'5px',fontFamily:'Open Sans'}}>Copyright &copy {year} Jephthiano. All rights reserved.</p>
            <center><span className='j-bolder j-underline'href="">Designed & Developed by Oladejo Jephthah</span></center>
        </div>
      </div>
      </>
    );
  }
  
  export default Footer;