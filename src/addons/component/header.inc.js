import {useSelector, useDispatch} from "react-redux";
import {changeTheme} from "addons/state/reducer";
import  {toggle_modal} from 'addons/function/general.fuc.js';

function Header(props) {
    const thColor = useSelector((state) => state.theme.value);
    let sidebar =thColor.bgColor1+" j-hide-medium j-hide-large j-hide-xlarge j-center j-sidebar j-bar-block j-xlarge j-padding";

    const updateState = useDispatch();
    const changeColor = () => {
        if(thColor.bgColor1 === 'j-color4'){
            var themeData = {
                bgColor1: 'j-color10',
                bgColorAlt1: 'j-color11',
                bgColor2: 'j-color4',
                bgColorAlt2: 'j-color6',
                txtColor1: 'j-text-color6',
                txtColor2: 'j-text-color7',
                border: 'j-border-1 j-border-color2'
            }
        }else{
            var themeData = {
                bgColor1: 'j-color4', 
                bgColorAlt1: 'j-color6',
                bgColor2: 'j-color10', 
                bgColorAlt2: 'j-color11',
                txtColor1: 'j-text-color7',
                txtColor2: 'j-text-color6',
                border: 'j-border-2 j-border-color6'
            }
        }
        updateState(changeTheme(themeData));
    }
    return (
      <>
      <div className={thColor.bgColor1}style={{position:'sticky',top:'0',zIndex:'1',height:'90px'}}>
      <nav id="nav"title='oladejo jephthah portfolio header'className="j-bar j-home-padding">
        <div className='j-lage'style={{marginTop:'20px'}}>
            <a href="#nav"className='j-btn j-round-large j-margin-small 'style={{backgroundColor:'rgba(0,0,0,0)'}}>
                <span>Home</span>
            </a>
            <div className='j-right j-hide-small'>
                <a href="#about_me" className='j-btn j-round-large j-margin-small j-hide-small 'style={{marginRight:'8px',backgroundColor:'rgba(0,0,0,0)'}}>
                    <span>About Me</span>
                </a>
                <a href="#skill" className='j-btn j-round-large j-margin-small j-hide-small 'style={{marginRight:'8px',backgroundColor:'rgba(0,0,0,0)'}}>
                    <span>Skills</span>
                </a>
                <a href="#project" className='j-btn j-round-large j-margin-small j-hide-small 'style={{marginRight:'8px',backgroundColor:'rgba(0,0,0,0)'}}>
                    <span>Projects</span>
                </a>
                <a href="#contact_me"className='j-btn j-round-large j-margin-small j-hide-small 'style={{marginRight:'8px',backgroundColor:'rgba(0,0,0,0)'}}>
                    <span>Contact Me</span>
                </a>
            </div>
            <span  id="mo"className="j-hide-medium j-hide-large j-hide-xlarge j-bar-item j-right j-xlarge j-clickable"onClick={() => toggle_modal('show','menu_modal')} style={{position:'relative',top:'-10px'}}>
                &#9776;
            </span>
            <span className='j-xlarge j-right j-clickable'style={{marginRight:'40px'}}onClick={() => changeColor()}>
                <i className="fas fa-sun"></i>
            </span>
            <div>
                <div id="menu_modal"className={sidebar}style={{width:'70%',top:'0px',right:'0px',display:'none',lineHeight:'45px'}}>
                    <div className='j-right j-margin j-xxlarge'onClick={() => toggle_modal('hide','menu_modal')}>X</div>
                    <br className='j-clearfix'/>
                    <a href="#about_me"onClick={() => {toggle_modal('hide','menu_modal');}}style={{opacity:'100%'}}className="j-bar-item j-button j-padding-16">About Me</a>
                    <a href="#skill"onClick={() => {toggle_modal('hide','menu_modal');}}style={{opacity:'100%'}}className="j-bar-item j-button j-padding-16">Skills</a>
                    <a href="#project"onClick={() => {toggle_modal('hide','menu_modal');}}style={{opacity:'100%'}}className="j-bar-item j-button j-padding-16">Projects</a>
                    <a href="#contact_me"onClick={() => {toggle_modal('hide','menu_modal');}}style={{opacity:'100%'}}className="j-bar-item j-button j-padding-16">Contact Me</a>
                </div>
            </div>
        </div>
      </nav>
      </div>
      </>
    );
  }
  
  export default Header;