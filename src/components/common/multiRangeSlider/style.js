import tw from "twin.macro"
import styled from "styled-components"
import {ColumnContainer,BetweenRow} from 'src/styles/sharedStyle'

export const SliderContainer = styled(ColumnContainer)`
    ${tw`
        w-full
        py-[20px]
        overflow-hidden
        
    `}
`
export const TitleRangeSlider = styled(BetweenRow)`
    ${tw`
        mb-[30px]
        
    `}
`
export const RangeSlider = styled.div`
    ${tw`
        px-[15px]
        
    `}
`
export const ButtonSLider = styled.button`
    ${tw`
        bg-[#004f9e]
        w-full
        px-[40px]
        text-[#fff]
        mt-[40px]
        rounded-[10px]
    `}
`
