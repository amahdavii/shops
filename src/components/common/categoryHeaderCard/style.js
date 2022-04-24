import tw from "twin.macro"
import styled from "styled-components"
import {BetweenRow,CenterContainer} from "src/styles/sharedStyle";

export const MainHeaderFix = styled(BetweenRow)`
   ${tw`
    border-[1px]
    border-[#dcdfe1]
    rounded-[10px]
    px-[20px]
    py-[20px]

  `}
`
export const IconBg = styled(CenterContainer)`
   ${tw`
    px-[30px]
    py-[20px]     
    `}
    background-repeat:no-repeat ;
    background-position:center ;
    background-size:contain;
    background-image: ${(props) => `url(${props.imgUrl.src})`};  
`

