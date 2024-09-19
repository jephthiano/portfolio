// import { useNeededData } from 'addons/query/get_query';
import { useSelector } from "react-redux";
import { initialNeededData } from 'addons/global_variable.inc';

function SocialHandle(props) {
  const theme = useSelector((state) => state.theme.value);
  const styleD = `${props.bgColor} j-tag j-xlarge j-round-large`;

  // const { data, isPending,  isError, isLoading } = useNeededData();
  const socialData = initialNeededData.socialHandle

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
  
export default SocialHandle;