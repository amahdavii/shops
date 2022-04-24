import tw from "twin.macro"
import styled from "styled-components"
import {CenterContainer, ColumnContainer} from "src/styles/sharedStyle";

export const ModalContainer = styled(CenterContainer)`
    ${tw`
        fixed
        z-[99999999]
        top-0
        left-0
        right-0
        bottom-0
        w-full
        h-auto
        min-h-full
        overflow-hidden
    `}
`
export const BackModal = styled.div`
    ${tw`
        bg-[rgba(128, 128, 128, 0.342)]
        min-h-full
        w-full
        flex-1
    `}
`
export const MainModal = styled(ColumnContainer)`
    ${tw`
        flex
        bg-[#fff]
        absolute
        top-[5%]
        p-[20px]
        max-h-[90%]
        max-w-[65%]
        overflow-hidden

    `}
    
`
export const hdieContainer = styled.div`
    ${tw`
       fixed
       float-left
       bg-[red]
    `}
`
export const ChildContainer = styled(ColumnContainer)`
    ${tw`    
        bg-[#fff]
        overflow-y-scroll
        overflow-x-hidden
        pb-[20px]
        w-[100%]
        // justify-center
        items-center

    `}
    &::-webkit-scrollbar {
    width: 8px;
    height: 10px;
    padding-top: 40px;
    }
    &::-webkit-scrollbar-track {
    background: #dcdfe1;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #c0c0c0; 
    border-radius: 20px;  
    border: 1px solid #dcdfe1;  
    height: 10px;

    }
`
export const CloseModal = styled.div`
    ${tw`
        cursor-pointer
        align-self[flex-end]
    `}
`
