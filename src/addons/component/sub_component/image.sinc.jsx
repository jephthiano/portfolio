import { useSelector } from "react-redux";
import { initialNeededData } from 'addons/global_variable.inc';
// import { useNeededData } from 'addons/query/get_query';

function Image() {
    //getting theme color
    const theme = useSelector((state) => state.theme.value);
    const smImgClass = `${theme.border} j-round-large j-hide-medium j-hide-large j-hide-xlarge`;
    const lgImgClass = `${theme.border} j-hide-small j-round-large`;

    // using fetch image data
    // const { data,  isError, isLoading } = useNeededData();
    const imgUrl2 = `media/`+initialNeededData.image;

    return (
      <>
      <img src={imgUrl2}alt='Image'className={smImgClass}style={{width:'150px',height:'150px'}}/>
      <img src={imgUrl2}alt='Image'className={lgImgClass}style={{width:'100%',height:'250px',border:'solid 3px'}}/>
      </>
    )
}

export default Image