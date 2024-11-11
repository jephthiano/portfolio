import React from 'react';
import { useSelector } from "react-redux";
import Header from 'addons/component/header.inc';
import Myself from 'addons/component/myself.inc';
import AllButton from 'addons/component/all_button.inc';
import AboutMe from 'addons/component/about_me.inc';
import Skills from 'addons/component/skills.inc';
import Project from 'addons/component/project.inc';
import ContactMe from 'addons/component/contact_me.inc';
import Footer from 'addons/component/footer.inc';


function App() {
  const thColor = useSelector((state) => state.theme.value);
  
  return (
    <>
    <div id='base'className={thColor.bgColor1}style={{position:'relative', minHeight:'1100px'}}>
      <Header />
      <Myself />
      <div>
        <div className='j-home-padding'>
          <AllButton />
          <AboutMe />
          <Skills />
          <Project />
          <ContactMe />
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/>
      <Footer />
      <span id='s'></span>
    </div>
    </>
  );
}

export default App;
