import { useState } from "react";
import { BigImage, ImageView, RowImageContainer, RowImageContainerItems } from "./style";

const ImageViewer=(props)=>{
    
    const{images}=props
    const[bigImg,setBigImg]=useState(images[0])

    const renderSmallImg=()=>(
            
        images.map((item,index)=>(
            index>4
            ?null
            :(
                item.title!=bigImg.title
                ?<RowImageContainerItems 
                key={index}
                onClick={()=>setBigImg(item)}
                >
                    <img  src={item.img.src}  alt={'pic'}/> 
                </RowImageContainerItems>
                :null
            )
        ))
            
    )

    return(
        <ImageView>
            <BigImage src={bigImg.img.src} alt={'img viewer'}/>
            <RowImageContainer>
                {renderSmallImg()}
            </RowImageContainer>
        </ImageView>
    )
}
export default ImageViewer;