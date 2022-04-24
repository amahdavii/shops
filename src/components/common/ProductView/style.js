import tw from "twin.macro"
import styled from "styled-components"
import {ColumnContainer,BetweenRow,FitbetweenRow,CenterContainer,FitContainerEnd} from 'src/styles/sharedStyle'

export const ProductViewContainer = styled(CenterContainer)`
    ${tw`
        flex-col
        h-[100%]
        w-[90%]        
    `}

  

`
export const ProductViewDetail = styled(FitbetweenRow)`
    ${tw`
        w-[100%]
        h-[100%]
        justify-between
        items-start
    `}
`
export const DetailProductContainer = styled(ColumnContainer)`
    ${tw`
        h-[100%]
        w-[50%]        
    `}
`
export const DetailProductHeader = styled(ColumnContainer)`
    ${tw`
        flex-1
        pb-[20px]
        border-b-[#dcdfe1]
        border-b-[1px]
        line-height[40px]
        text-[14px]
    `}
`
export const DetailProductTitle= styled.span`
    ${tw`
        font-bold
        text-[23px]
        text-[#494f55]
    `}
`
export const DetailProductOption= styled.span`
    ${tw`
        text-[#004f9e]
        font-bold
    `}
`
export const DetailProductFooter= styled(ColumnContainer)`
    ${tw`
        w-full
    `}
`

export const ProductOtherContainer= styled(ColumnContainer)`
    ${tw`
        flex-1
        text-[#494f55]
        w-[99%]
        h-[40%]
        mt-[3%]
    `}
`
export const ProductOtherHeader= styled.div`
    ${tw`
        // border-b-[3px]
        // border-b-[#ed7203]
        // text-[16px]
        p-[10px]
        text-[20px]
        font-bold

    `}
`
export const ProductOtherRow= styled.div`
    ${tw`
        flex
        overflow-x-scroll
        h-[85%]
    `}
`
export const ProductOtherProduct= styled.div`
/* margin-left: 5px; */
   /* border-left: 1px solid #dcdfe1; */
    /* border-bottom: 1px solid #dcdfe1;
    &:first-child{
        border-right: 1px solid #dcdfe1;
    } */
`

export const ProductDetailPrice= styled(BetweenRow)`
    ${tw`
        items-start
        my-[20px]
    `}
`

export const AddToCartTitle= styled.span`
    ${tw`
        mr-[5px]
        text-[12px]
    `}
`