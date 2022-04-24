import tw from "twin.macro"
import styled, { css } from "styled-components"
import {ColumnContainer,CenterContainer} from "src/styles/sharedStyle";

export const GridWrapper = styled.div`
    /* ${tw`
        grid
        grid-template-columns[1fr]
        grid-gap[1px]
        bg-[#fff]
    `} */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1px;
    background-color: #fff;
    grid-gap: 1px;
`
export const GridWrapperItems = styled.div`
    background:#fff;
    border-left: 1px solid #dcdfe1;
    border-bottom: 1px solid #dcdfe1;    

    &:nth-child(4n){
        background:#fff;
        border-left: 0px solid #dcdfe1; 
    }
    ${props=>
        css`:nth-child(n+${props.row*4+1}){
            /* background:red; */
            border-bottom: 0px solid #dcdfe1;  
        }`
    }
    
  
`
export const ProductCatBox = styled(ColumnContainer)`
    ${tw`
        border-color[#dcdfe1]
        border-[1px]
        rounded-[10px]
        mt-[20px]
        bg-[#fff]
    `}
`

export const ProductCatBoxFooter = styled(CenterContainer)`
    ${tw`
    // h-full
        border-t-[#dcdfe1]
        border-t-[1px]

    `}
`
