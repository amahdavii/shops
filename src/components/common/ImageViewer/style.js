import tw from "twin.macro"
import styled from "styled-components"
import {CenterContainer, ColumnContainer,RowContainer} from 'src/styles/sharedStyle'

export const ImageView = styled(ColumnContainer)`
    ${tw`
        items-center
        max-w-[40%]
        h-full        
    `}
`
export const BigImage = styled.img`
    ${tw`
        h-[300px]
        w-[300px]

    `}
`
export const RowImageContainer = styled(RowContainer)`
    ${tw`
        justify-evenly
        w-full
        // max-h-[50px]
        overflow-hidden
        items-end
        mt-[20px]
        mb-[30px]
    `}
`
export const RowImageContainerItems = styled(CenterContainer)`
    ${tw`
        border-[1px]
        border-[#c7d2cf]
        rounded-[5px]
        // h-[100%]
        // w-[20%]
    `}
    img{
        height: 60px;
        width: 60px;   
        border-radius: 5px;

    }
`
