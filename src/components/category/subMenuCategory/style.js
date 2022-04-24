import tw from "twin.macro"
import styled, { css } from "styled-components"
import {BoldSpan,ColumnContainer,BetweenRow} from "src/styles/sharedStyle";

export const SubCatContainer = styled(ColumnContainer)`
   ${tw`
        min-w-[20%]
        h-full
        overflow-scroll
        sticky
        top-[270px]
        
  `}
`

export const SubCatBoxSimple = styled(ColumnContainer)`
   ${tw`
     w-full
     rounded-[10px]
     border-[1px]
     border-[#dcdfe1]
     text-[14px]
     mb-[20px]
     bg-[#fff]
     text-[#494f55]
     

    //  p-[20px]

  `}
`
export const SubCatBoxHeader = styled(BetweenRow)`
    ${tw`
        font-bold
        text-[#494f55]
        cursor-pointer   
        p-[20px] 
        // border-b-[1px]
        // border-b-[#dcdfe1]  

    `}
   
`

export const SubCatItems = styled(ColumnContainer)`
    ${tw`
        max-h-[400px]
        overflow-y-scroll
        line-height[40px]
        text-[#494f55]

    `}
`
export const SubCatBoxSimpleItems = styled(SubCatItems)`
    ${tw`
        border-t-[1px]
        border-t-[#dcdfe1]       
        py-[20px]
    `}
`
export const SubCatBoxItems = styled(SubCatItems)`
    ${tw`
        border-t-[1px]
        border-t-[#dcdfe1]       
        px-[20px]
        py-[10px]

    `}
`
export const SubCatBoxSimpleItemsSpan = styled.span`
    ${tw`
        px-[20px]
        cursor-pointer
    `}
    &:hover{
        background: #e5f2ff;
    }
    ${props=>props.select?css`
    background: #e5f2ff;
    `
    :null}
`
export const SubCatBoxSimpleItemsSelect = styled.div`   
    background: #eaf0f6;    
`
export const subCatBox = styled(SubCatBoxSimple)`   
    ${tw`
        bg-[#fff]
    `}   
`
export const SubCatBoxItemsList = styled.div`   
    ${tw`
        flex
        items-center
    `} 
    label{
        margin-right: 10px;
    }
`
export const SubCatBoxItemsListTitle = styled(BoldSpan)`   
    ${tw`
       mt-[20px]
       mb-[5px]
    `} 
`
export const SubCatBoxItemsListMore = styled.div`   
    ${tw`
        flex
        mt-[10px]
        text-[10px]
        text-[#cacaca]
        cursor-pointer
    `} 
    span{
        margin-right: 5px;
    }
`
export const SubCatBoxFilter = styled(BetweenRow)`   
    ${tw`
        p-[20px]
        font-bold
    `} 
`
export const SubCatBoxFilterSwitch = styled.div`   
    ${tw`
        relative
        inline-block
        w-[55px]
        h-[25px]
    `} 
    input{
        opacity: 0;
        width: 0;
        height: 0;
        margin-left: 20px;
    }
  
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }
    
    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
    input:checked + .slider {
        background-color: #004f9e;
    }
    
    input:focus + .slider {
        box-shadow: 0 0 1px #004f9e;
    }
    
    input:checked + .slider:before {
        -webkit-transform: translateX(30px);
        -ms-transform: translateX(30px);
        transform: translateX(30px);
    }
    .slider.round {
            border-radius: 34px;
    }
    
    .slider.round:before {
        border-radius: 50%;
    }
`

export const SubCatBoxFilterSlider = styled.div`   
    ${tw`
        absolute
        cursor-pointer
        top-0
        left-0
        right-0
        bottom-0
        bg-[#ccc]
    `} 
    -webkit-transition: .4s;
    transition: .4s;

    &:before{
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
`