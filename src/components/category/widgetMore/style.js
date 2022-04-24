import tw from "twin.macro"
import styled from "styled-components"
import {BetweenRow, ColumnContainer, Container, FitbetweenRow} from "src/styles/sharedStyle";
import * as constants from "../../../constants"

export const WidgetBoxMore = styled(ColumnContainer)` 
 ${tw`
    //   pb-[50px]
      overflow-hidden
      flex
      flex-col
      bg-[white]
      w-full
      my-[50px]
      rounded-[10px]
  `} 
`
export const MoreBox = styled(BetweenRow)`   
    ${tw`
        m-5
    `} 
    color: ${constants.Colors.orangeDark};
`
export const MoreIcon=styled.span`
   ${tw`
      ml-[2px]
   `}
   color: ${constants.Colors.orangeDark};
`
export const WidgetTitle = styled.div`  
   ${tw`
      my-3
      mx-5
      font-bold
      text-[18px]
  `}
`

export const ProductBoxWidgetMore= styled.div`
  
   border-left:2px solid #eef5f9;
   border-top:2px solid #eef5f9;


   &:last-child{
    border-left:2px solid #eef5f9;

   }
   
`