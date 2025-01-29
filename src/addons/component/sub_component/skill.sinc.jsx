import { useSelector } from "react-redux";
// import { useNeededData } from 'addons/query/get_query';
import { extractObject } from 'addons/function/general.fuc'
import { initialNeededData } from 'addons/global_variable.inc';

function Skill(props) {
  //getting theme color
  const thColor = useSelector((state) => state.theme.value);
  // const progressBg = `${thColor.bgColor2} j-round`;

  // const { data, isSuccess, isError, isLoading } = useNeededData();
  const skillData = initialNeededData.skill;


  //get new array by type
  const sectionData = extractObject(skillData,'s_type',props.type);
  //if it is array but empty
  if(Array.isArray(sectionData) && sectionData.length < 1){
        return (
          <>
          <div>No {props.type} skill at the moment</div>
          </>
        )
  }
  
  //if the data is okay and not empty
  return (
        <>
        <div className='j-padding-small j-row'>
        {
            sectionData.map((data,index) => {
                return(
                  <div className={thColor.txtColor1} key={index}>
                    <div className='j-col s6 m4 l3' style={{marginBottom:'20px'}}>
                      <div style={{display:'inline-block',marginRight:'20px',position:'relative',top:'-10px'}}>
                        <i className="j-large fas fa-certificate"style={{color:'#1a80c4'}}></i>
                      </div>
                      <div style={{display:'inline-block'}}>
                        <div className='j-bolder'title={data.s_skill}> {data.s_skill} </div>
                        <div className="j-text-color5 j-itallic">{data.s_level}</div>
                      </div>
                    </div>
                  </div>
                )
            })
            }
        </div>
        </>
  )
}

export default Skill