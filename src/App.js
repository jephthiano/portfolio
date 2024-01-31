import React from 'react';
import {useSelector} from "react-redux";
import Header from 'addons/component/header.inc';
import Myself from 'addons/component/myself.inc';
import AllButton from 'addons/component/all_button.inc';
import AboutUs from 'addons/component/about_us.inc';
import Project from 'addons/component/project.inc';
import ContactMe from 'addons/component/contact_me.inc';
import Footer from 'addons/component/footer.inc';


function App() {
  const thColor = useSelector((state) => state.theme.value);
  
  return (
    <>
    <div id='base'className={thColor.bgColor1}>
      <Header />
      <Myself />
      <div>
        <div className='j-home-padding'>
          <AllButton />
          <AboutUs />
          <Project />
          <ContactMe />
        </div>
      </div>
      <Footer />
      <span id='st'></span>
    </div>
    </>
  );
}

export default App;
