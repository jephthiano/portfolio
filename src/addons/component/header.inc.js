import $ from 'jquery'
import {useSelector, useDispatch} from "react-redux";
import {changeTheme} from "addons/state/reducer";
import  {horNav} from 'addons/function/general.fuc.js';
import  {toggle_modal} from 'addons/function/general.fuc.js';

function Header(props) {
    const thColor = useSelector((state) => state.theme.value);
    let sidebar =thColor.bgColor1+" j-hide-medium j-hide-large j-hide-xlarge j-center j-sidebar j-bar-block j-xlarge j-padding";

    const updateState = useDispatch();
    const changeColor = () => {
        if(thColor.bgColor1 === 'j-color4'){
            var themeData = {
                bgColor1: 'j-color3', 
                bgColor2: 'j-color4', 
                border: 'j-border-2 j-border-color7'
            }
        }else{
            var themeData = {
                bgColor1: 'j-color4', 
                bgColor2: 'j-color3', 
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
            <a href=""className='j-btn j-round-large j-margin-small 'style={{backgroundColor:'rgba(0,0,0,0)'}}>
                <span>Home</span>
            </a>
            <div className='j-right j-hide-small'>
                <div onClick={() => horNav('about_me',$('#t_about_me'))}className='j-btn j-round-large j-margin-small j-hide-small 'style={{marginRight:'8px',backgroundColor:'rgba(0,0,0,0)'}}>
                    <span>About Me</span>
                </div>
                <div onClick={() => horNav('project',$('#t_project'))}className='j-btn j-round-large j-margin-small j-hide-small 'style={{marginRight:'8px',backgroundColor:'rgba(0,0,0,0)'}}>
                    <span>Projects</span>
                </div>
                <div onClick={() => horNav('contact_me',$('#t_contact_me'))}className='j-btn j-round-large j-margin-small j-hide-small 'style={{marginRight:'8px',backgroundColor:'rgba(0,0,0,0)'}}>
                    <span>Contact Me</span>
                </div>
            </div>
            <span  id="mo"className="j-hide-medium j-hide-large j-hide-xlarge j-bar-item j-right j-xlarge j-clickable"onClick={() => toggle_modal('show','menu_modal')} style={{position:'relative',top:'-10px'}}>
                &#9776;
            </span>
            <span className='j-xlarge j-right j-clickable'style={{marginRight:'40px'}}onClick={() => changeColor()}>
                <i className="fas fa-sun"></i>
            </span>
            <div>
                <div id="menu_modal"className={sidebar}style={{width:'100%',top:'0px',right:'0px',display:'none',lineHeight:'45px'}}>
                    <div className='j-right j-margin j-xxlarge'onClick={() => toggle_modal('hide','menu_modal')}>X</div>
                    <br className='j-clearfix'/>
                    <div onClick={() => {toggle_modal('hide','menu_modal');horNav('about_me',$('#t_about_me'))}}style={{opacity:'100%'}}className="j-bar-item j-button j-padding-16">About Me</div>
                    <div onClick={() => {toggle_modal('hide','menu_modal');horNav('project',$('#t_project'))}}style={{opacity:'100%'}}className="j-bar-item j-button j-padding-16">Projects</div>
                    <div onClick={() => {toggle_modal('hide','menu_modal');horNav('contact_me',$('#t_contact_me'))}}style={{opacity:'100%'}}className="j-bar-item j-button j-padding-16">Contact Me</div>
                </div>
            </div>
        </div>
      </nav>
      </div>
      </>
    );
  }
  
  export default Header;