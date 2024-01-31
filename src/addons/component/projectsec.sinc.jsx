import { useProject } from 'addons/query/get_query';
import { imgServer } from 'addons/global_variable.inc';
import { toggle_modal, extractObject } from 'addons/function/general.fuc'
import { ProjectModal } from 'addons/function/modal.fuc';
import { project } from 'addons/data.inc';


const ProjectSec = (props) => {
  let projectData;

  const { data,  isError, isLoading } = useProject();

  //if data is loading
  if(isLoading){
    return (
      <div className='j-small'>Loading...</div>
    )
  }

  //if there is error
  if(isError || data.data === 'invalid request'){ 
    //for impromptu data
    projectData = project;
    // return (
    //   <div className='j-small'>Could not fetch project data, kindly refresh</div>
    // )
  }else{
    projectData = data.data;
  }

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
          const projectImg = `${imgServer}project/${data.projectImg}`;
          const modalId = `project_modal${data.id}`
          return(
            <div key={index}>
              <div className="j-col s12 l6 xl4 j-padding j-round"onClick={() => toggle_modal('show',modalId)}>
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