import tw from 'twin.macro'
import styled from 'styled-components'
import * as constants from '../../../constants'
import { CenterContainer, ColumnContainer } from 'src/styles/sharedStyle'
import Image from 'next/image'

export const ProductCardContainer = styled(ColumnContainer)`
  ${tw`    
    max-w-[280px]
    items-center
    p-[10px]
    bg-[#fff]
  `}
`
export const ProductImage = styled.img`
  min-width: 200px !important;
  min-height: 200px !important;
  max-width: 200px !important;
  max-height: 200px !important;
  width: 200px !important;
  height: 200px !important;
  margin: 0 !important;

  @media (max-width: 639px) {
    min-width: 100px !important;
    min-height: 100px !important;
    max-width: 100px !important;
    max-height: 100px !important;
    width: 100px !important;
    height: 100px !important;
    margin: 0 !important;
  }
`
export const ProductTitle = styled.span`
  ${tw`    
    my-2
    text-[15px]
    text-[#494f55]
    h-[50px]
    w-full
  `}
  font-weight: 500;
  line-height: 1.6;
  @media (max-width: 639px) {
    ${tw`    
    mt-2
    mb-0
    text-[12px]
    h-[45px]
  `}
  }
`
export const DiscountBox = styled(CenterContainer)`
  ${tw`    
    rounded        
    text-[#fff]
    px-2
    pt-[3px]
    text-[15px]
    font-bold
  `}
  background: ${constants.Colors.orangeDark};

  @media (max-width: 639px) {
    ${tw`    
    text-[12px]
  `}
  }
`
export const DiscountPrice = styled.span`
  ${tw`    
    line-through
    text-[15px]
    mr-2
  `}
`
export const MainPrice = styled.div`
  ${tw`    
    text-[20px]
    font-bold
    ml-2
  `}

  @media (max-width: 639px) {
    ${tw`    
    text-[16px]

  `}
  }
`
