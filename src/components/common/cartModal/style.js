import tw from "twin.macro"
import styled from "styled-components"
import {CenterContainer, ColumnContainer,BetweenRow, RowContainer} from "src/styles/sharedStyle";

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
export const MainModaCartl = styled(ColumnContainer)`
    ${tw`
        flex
        bg-[#fff]
        absolute
        left-0
        top-0
        bottom-0
        // p-[20px]
        h-full
        w-[30%]
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
export const ChildContainerCart = styled(ColumnContainer)`
    ${tw`    
        flex-1
        // px-[20px]
        overflow-y-scroll
        overflow-x-hidden
        w-full

    `}
`
export const CloseModalCart = styled(BetweenRow)`
    ${tw`
        items-center
        w-full
        border-b-[1px]
        border-b-[#eeeeee]
        pb-[10px]
        mb-[10px]
    `}
`
export const RemoveCart = styled(BetweenRow)`
    ${tw`
        items-center
        w-full
        border-t-[1px]
        border-t-[#eeeeee]
        pt-[10px]
        mt-[10px]
    `}
`

export const HeaderCart = styled(ColumnContainer)`
    ${tw`
       shadow-md
       p-[20px]
       mb-[10px]

    `}
`

export const FooterCart = styled(ColumnContainer)`
    ${tw`
        p-[20px]
        mt-[10px]
       
    `}
    /* box-shadow: 0px 5px 5px #888, 0px -10px 5px #888; */
    box-shadow: #cacaca 0px -1px 10px 0px;
`
export const PaymentSection = styled(BetweenRow)`
    ${tw`
        items-center
        w-full
        border-t-[1px]
        border-t-[#eeeeee]
        pt-[10px]
        mt-[10px]
    `}
`

export const NotifContainer = styled(RowContainer)`
    ${tw`
       bg-[#ecf6ff]
       my-[5px]
       rounded-[5px]
        px-[10px]
    `}

    span{
        color:#253858 ;
    }
`
export const EmptyTitle = styled.span`
    ${tw`
        mt-[20px]
        text-[#494f55]
    `}
`