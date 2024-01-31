import {useSelector} from "react-redux";
import SocialHandle from 'addons/component/social_handle.sinc';

function Footer(props) {
    const theme = useSelector((state) => state.theme.value);
    const d = new Date(); let year = d.getFullYear();

    return (
      <>
      <div className={theme.bgColor2}>
        <div id="footer"title='footer'className="dmt3 j-center j-padding">
            <div><h4 style={{fontSize:'20px'}}>Oladejo Jephthah</h4></div>
            <SocialHandle bgColor={theme.bgColor2}/>
            <p className="j-tiny"style={{margin:'0px',padding:'5px',fontFamily:'Open Sans'}}>Copyright &copy {year} Jephthiano. All rights reserved.</p>
            <center><a className='j-bolder j-underline'href="">Designed & Developed by Oladejo Jephthah</a></center>
        </div>
      </div>
      </>
    );
  }
  
  export default Footer;