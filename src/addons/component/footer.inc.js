import {useSelector} from "react-redux";
import SocialHandle from 'addons/component/sub_component/social_handle.sinc';

function Footer(props) {
    const thColor = useSelector((state) => state.theme.value);
    const classData = `${thColor.bgColorAlt1} j-home-padding`
    const d = new Date(); let year = d.getFullYear();

    return (
      <>
      <div className={classData}>
        <div id="footer"title='footer'className="dmt3 j-center j-padding">
            <div><h4 style={{fontSize:'20px'}}>Oladejo Jephthah</h4></div>
            <SocialHandle bgColor={thColor.bgColor1}/>
            <p className="j-tiny"style={{margin:'0px',padding:'5px',fontFamily:'Open Sans'}}>Copyright &copy {year} Jephthiano. All rights reserved.</p>
            <center><span className='j-bolder j-underline'href="">Designed & Developed by Oladejo Jephthah</span></center>
        </div>
      </div>
      </>
    );
  }
  
  export default Footer;