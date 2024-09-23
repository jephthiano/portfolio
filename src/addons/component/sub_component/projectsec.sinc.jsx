import { imgServer } from 'addons/global_variable.inc';
import { toggle_modal, extractObject } from 'addons/function/general.fuc'
import { ProjectModal } from 'addons/function/modal.fuc';
import { initialNeededData } from 'addons/global_variable.inc';
// import { useNeededData } from 'addons/query/get_query';


const ProjectSec = (props) => {

  // const { data,  isError, isLoading } = useNeededData();
  const projectData = initialNeededData.project;
  

  //get new array by type (if data is fine)
  const sectionData = extractObject(projectData,'p_type',props.type);

  //if it is array but empty
  if(Array.isArray(sectionData) && sectionData.length < 1){
    return (
      <>
      <div>No {props.type} link at the moment</div>
      </>
    )
  }

  //if the data is okay and not empty
  return (
    <>
    {
      sectionData.map((data,index) => {
          const projectImg = `media/project/${data.projectImg}`;
          const modalId = `project_modal${data.id}`
          return(
            <div key={index}>
              <div className="j-col s12 l6 j-padding j-round"onClick={() => toggle_modal('show',modalId)}>
                <div>
                  <div className="j-card-4 j-round j-display-container"style={{height:'300px',width:'inherit'}}>
                    <img src={projectImg}style={{width:'100%',height:'inherit',opacity:'0.5'}}/>
                    <div>
                      <div className='j-btn j-round-large j-small j-bolder j-display-middle j-border-2 dmb3 j-border-color5'style={{marginRight:'8px',backgroundColor:'rgba(0,0,0,0)'}}>
                        Click to see this project info & link
                      </div>
                      <div className='j-display-bottommiddle'style={{width:'100%',overflow:'hidden',backgroundColor:'rgba(0,0,0,0.7)',brderRadius:'0px 0px 16px 16px'}}>
                        <div className='j-bolder j-medium j-text-color4 j-left j-padding'style={{margin:'10px 0px'}}title={data.p_name}><b>{data.p_name}</b></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProjectModal data={data}/>
            </div>
          )
      })
    }
    </>
  )
}

export default ProjectSec