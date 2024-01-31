import { useSelector } from "react-redux";
import { useImage } from 'addons/query/get_query';
import { imgServer } from 'addons/global_variable.inc';

function Image() {
    //getting theme color
    const theme = useSelector((state) => state.theme.value);
    const smImgClass = `${theme.border} j-round-large j-hide-medium j-hide-large j-hide-xlarge`;
    const lgImgClass = `${theme.border} j-hide-small j-round-large`;

    // using fetch image data
    let imgUrl2;
    const { data, isError, isLoading }= useImage();

    if(isLoading || isError || data.data === 'invalid request'){ //if loading or there is error
      imgUrl2 = `/icon.jpg`;
    }else if(Array.isArray(data.data) && data.data.length < 1){ //if empty array is returned from the data
      imgUrl2 = `/icon.jpg`;
    }else{ //if everything is fine
      imgUrl2 = `${imgServer}admin/${data.data.imgLink}`;
    }
    

    return (
      <>
      <img src={imgUrl2}alt='Image'className={smImgClass}style={{width:'150px',height:'150px'}}/>
      <img src={imgUrl2}alt='Image'className={lgImgClass}style={{width:'100%',height:'250px',border:'solid 3px'}}/>
      </>
    )
}

export default Image