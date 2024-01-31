import { useSocialHandle } from 'addons/query/get_query';
import { useSelector } from "react-redux";
import { socialHandle } from 'addons/data.inc';

function SocialHandle(props) {
  const theme = useSelector((state) => state.theme.value);
  const styleD = `${props.bgColor} j-tag j-xlarge j-round-large`;
  
  let socialData;

  const { data, isPending,  isError, isLoading } = useSocialHandle();
  
  //if data is loading
    if(isLoading){
      return (
        <div className='j-small'>Loading...</div>
      )
    }

    //if there is error
    if(isError || data.data === 'invalid request'){ 
      //for impromptu data
      socialData = socialHandle ;
      // return (
      //   <div className='j-small'>Could not fetch social data, kindly refresh</div>
      // )
    }else{
      //for back end point
      socialData = data.data
    }

    //if the data is array and empty (if data is fine)
    if(Array.isArray(socialData) && socialData.length < 1){
      return(
          <>
          <div>No social handle at the moment</div>
          </>
      )
    }

    //if the data is okay and not empty
    return (
      <div className='j-small'>
        {
          socialData.map((data,index) => (
          <a key={index} href={data.s_link} style={{marginRight:'10px'}} className={styleD} target="_blank">
            <i className={data.s_icon}></i>
          </a>
          ))
        }
      </div>
    )
}
  
export default SocialHandle;{}