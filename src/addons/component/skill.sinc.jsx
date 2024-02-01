import { useSelector } from "react-redux";
import { useSkill } from 'addons/query/get_query';
import { extractObject } from 'addons/function/general.fuc'
import { skill } from 'addons/data.inc';

function Skill(props) {
  //getting theme color
  const thColor = useSelector((state) => state.theme.value);
  const progressBg = `${thColor.bgColor2} j-round`;

  let skillData;

  const { data, isError, error, isLoading } = useSkill();

  //if data is loading
  if(isLoading){
      return (
        <div className='j-small'>Loading...</div>
      )
  }

  //if there is error
  if(isError || data.data === 'invalid request'){ 
    //for impromptu data
    skillData = skill;
      // return (
      //   <div className='j-small'>Could not fetch skills data, kindly refresh</div>
      // )
  }else{
    skillData = data.data;
  }

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
                    <div className='j-col s6' style={{marginBottom:'20px'}}>
                      <div style={{display:'inline-block',marginRight:'20px',position:'relative',top:'-10px'}}>
                        <i className="j-large fas fa-certificate"style={{color:'#1a80c4'}}></i>
                      </div>
                      <div style={{display:'inline-block'}}>
                        <div className='j-bolder'title={data.s_skill}> {data.s_skill} </div>
                        <div className="j-text-color5 j-itallic">{data.s_level}</div>
                      </div>
                      {/* <div className='j-col s6 l7'>
                          <div className={progressBg}style={{width:'100%',height:'10px',position:'relative',top:'8px'}}>
                              <div className='j-round j-color8'style={{width:`${data.s_percentage}%`,height:'10px'}}></div>
                          </div>
                      </div>
                      <div className='j-col s2 l2'style={{position:'relative',top:'2px',right:'-5px'}}> {data.s_percentage}%</div>  */}
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