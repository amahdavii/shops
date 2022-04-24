import tw from "twin.macro"
import styled from "styled-components"
export const TitleBox = styled.div`
    ${tw`
      w-[100%]
      rounded-[10px]
      p-[1.5%]
      mb-[30px]
      flex
      border-[1px]
      border-[#dcdfe1]
      items-center
    `}
    background: ${props=>props.background ?props.background :'#fff'};  
`
export const ArrowLeft = styled.div`
   
    margin: 0px 10px !important;
  
`
export const TitleSpan = styled.span`
    ${tw`
      text-[#494f55]
    `}
  
`

