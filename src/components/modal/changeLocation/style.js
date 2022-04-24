import tw from "twin.macro"
import styled from "styled-components"
import {CenterContainer, ColumnContainer,BetweenRow} from "src/styles/sharedStyle";

export const ModalContainerAlert = styled(CenterContainer)`
    ${tw`
        fixed
        z-[999999999]
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
export const ChildTitle = styled.span`
    ${tw`
       my-[30px]
    `}
`

export const MainModalAlert = styled(ColumnContainer)`
    ${tw`
        flex
        bg-[#fff]
        absolute
        // top-[10%]
        p-[20px]
        // h-[35%]
        w-[32%]
        overflow-hidden
        justify-between
    `}
    
`