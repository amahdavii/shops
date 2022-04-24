import tw from "twin.macro"
import styled from "styled-components"
import Image from "next/image";
import { ColumnContainer } from "src/styles/sharedStyle";

export const CatBox = styled(ColumnContainer)`
     ${tw`
        min-w-[20%]
        max-w-[20%]
        rounded-[5px]
        border-[1px]
        bg-[#fff]
        h-full
        overflow-scroll
        sticky
        top-[270px]    
    `}
    	height: fit-content;
`

export const CatBoxHeader = styled.div`
    ${tw`
        p-[20px]
        border-b-[1px]
        border-b-[#dcdfe1]
        text-[#494f55]
        font-bold
        mb-[10px]            
    `}
`
export const CatBoxItems = styled(ColumnContainer)`
    ${tw`
        px-[20px] 
        text-[#494f55]
    `}
`

export const CatBoxItemsLists = styled(ColumnContainer)`
    ${tw`
        pb-[20px] 
        // border-b-[1px]
        // border-b-[#dcdfe1]
    `}
    span{
        margin-top: 5px;
    }
`

export const CatBoxItemsListsTitle = styled.span`
    ${tw`
        font-bold
        cursor-pointer
        mt-[20px]
        mb-[5px]
    `}
`
export const CatBoxItemsListsMore = styled.div`
    ${tw`
        text-[#a2b0bf]
        flex
        mt-[5px]
        text-[10px]
        cursor-pointer
    `}
    span{
        margin-right: 5px;
    }
    &:last-child{
        border-bottom: 0px;
    }
`
