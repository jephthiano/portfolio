import React from 'react';
import { useState } from 'react';
import $ from 'jquery';
import {useSelector} from "react-redux"
import { useSendMessage } from 'addons/query/send_query';
import SocialHandle from 'addons/component/social_handle.sinc';
import { TextInput, TextArea, Button } from 'addons/function/form.fuc';

function ContactMe(props) {
  const theme = useSelector((state) => state.theme.value);

  const [data,setData] = useState('');

  const sm = useSendMessage(data);

  const  handleMessage = (e) => {
    setData($('form').serialize());
    e.preventDefault();
    sm.mutate();
  }

    return (
      <>
      <div id='contact_me'title='contact oladejo jephthah'className='trigger'style={{display:'none',marginBottom:'20px'}}>
        <div className='j-xlarge j-bolder j-container'><b>CONTACT ME</b></div>
          <div className='j-row'>
            <div className='j-col m6 j-padding'>
                <div style={{marginBottom:'15px'}}>
                    <div className='j-bolder'style={{fontFamily:'sofia'}}><i className="fas fa-map-marker-alt"style={{marginRight:'5px'}}></i>Location</div>
                    <span className='j-itallic'>Nigeria</span>
                </div>
                <div style={{marginBottom:'15px'}}>
                  <a href="mailto:jephthahooh@gmail.com"title='Oladejo Jephthah Email'className="j-clickable">
                    <div className='j-bolder'style={{fontFamily:'sofia'}}><i className="fas fa-envelope"style={{marginRight:'15px'}}>Email</i></div>
                    <span className='j-itallic'>jephthahooh@gmail.com</span>
                  </a>
                </div>
                <div style={{marginBottom:'15px'}}>
                  <a href="tel:+2347047474438"className="j-clickable"title='Oladejo Jephthah Phonenumber'>
                    <div className='j-bolder'style={{fontFamily:'sofia'}}><i className="fa-flip-horizontal fas fa-phone"style={{marginRight:'5px'}}></i>Call</div>
                    <span className='j-itallic'>+2347047474438</span>
                    </a>
                </div>
                <div style={{marginBottom:'15px'}}>
                    <div className='j-bolder'style={{fontFamily:'sofia'}}>Connect With Me</div>
                    <SocialHandle bgColor={theme.bgColor1}/>
                </div>
            </div>
            <div className='j-col m6 j-padding'>
                <div className='j-bolder'style={{fontFamily:'sofia',marginBottom:'15px'}}>Send Me a Message</div>
                <form onSubmit={(e) => handleMessage(e)}className=''>
                  <TextInput type='text'id='nm'placeholder='Name'/> <br/>
                  <TextInput type='email'id='em'placeholder='Email'/> <br/>
                  <TextInput type='text'id='sb'placeholder='Subject'/> <br/>
                  <TextArea id='ms'placeholder='Message'/> <br/>
                  <Button id='sbtn' disabled={sm.isPending} loading={sm.isPending}
                    value={sm.isPending ? 
                        "Sending" 
                      : 
                        "Send Message"
                    } 
                  />
                </form>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  export default ContactMe;