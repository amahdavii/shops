import tw from 'twin.macro'
import styled from 'styled-components'
import {
  CenterContainer,
  FlexContainer,
  ColumnContainer,
  Container,
} from 'src/styles/sharedStyle'
import Image from 'next/image'

export const CatPageContainer = styled(FlexContainer)`
  ${tw`
     justify-between
  `}
`
export const SecondRow = styled(ColumnContainer)`
  ${tw`
     w-[78%]
  `}
`
export const ProductCatBox = styled(ColumnContainer)`
  ${tw`
     border-[1px]
     border-[#dcdfe1]
     rounded-[10px]
     overflow-hidden
   //   mt-[20px]
     bg-[#fff]
  `}
`
export const ProductCatBoxHeader = styled.div`
  ${tw`
        flex
        items-center
        border-b-[1px]
        border-b-[#dcdfe1]
      //   rounded-[10px]
      //   mt-[20px]
        bg-[#fff]
        py-[20px]
        px-[20px]

      //   justify-center
    `}
`
export const ProductCatBoxHeaderImage = styled(CenterContainer)`
  ${tw`
       mx-[10px]
    `}
`
export const ProductCatBoxHeaderSpan = styled.span`
  ${tw`
       font-bold
       ml-[20px]
       text-[#494f55]
       cursor-pointer
    `}
`
export const ProductCatBoxHeaderSelected = styled(ProductCatBoxHeaderSpan)`
  color: #004b93 !important;
`

export const ChildrenGrid = styled.div`
  ${tw`
    mt-[420px]
    w-[100%]
  `}
`
