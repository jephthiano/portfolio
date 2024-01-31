import  $ from 'jquery';
import { toggle_modal, convert_2_br } from 'addons/function/general.fuc'
import {useSelector} from "react-redux";


export const ProjectModal = (props) => {
  const theme = useSelector((state) => state.theme.value);

  const subHeaderStyle = `j-large j-text-color1 j-bolder`;
    const id = `project_modal${props.data.id}`
    return (
        <>
        <section id={id} className="j-modal">
            <div className="j-card-4 j-modal-content"style={{width:'96%',maxWidth:'600px',height:'auto'}}>
              <div className={theme.bgColor1}>
                <div className='j-bolder j-large j-center j-color1 j-padding'>{props.data.p_name}</div>
                <div className=''>
                  <div className='j-margin'>
                    <div className={subHeaderStyle}>Project Summary</div>
                    <div style={{whiteSpace:'pre-line'}}>{props.data.p_info}</div>
                  </div>
                  <div className='j-margin'>
                    <div className={subHeaderStyle}>Technology Used</div>
                    <div>{props.data.p_languages}</div>
                  </div>
                </div>
                <div className='j-padding'><hr /></div>
                <center className='j-padding'>
                  <a href={props.data.p_link}target="_blank"rel="noreferrer">
                    <div className='j-clickable j-color1 j-text-color4 j-round j-border j-border-color1 j-padding'style={{width:'100%'}}>
                      See Live Demo
                    </div>
                  </a>
                  <br />
                  <div className='j-clickable j-text-color1 j-round j-border-2 j-border-color1 j-padding'style={{width:'100%'}}onClick={() => toggle_modal('hide',id)}>
                    Close
                  </div>
                  <br />
                </center>
              </div>
          	</div>
          </section>
        </>
    );
}
