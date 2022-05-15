import tw from 'twin.macro'
import styled from 'styled-components'
import {
  BetweenRow,
  BoldSpan,
  CenterContainer,
  ColumnContainer,
  ColumnFitContainer,
  RowContainer,
} from 'src/styles/sharedStyle'
import Image from 'next/image'

export const CartItemContainer = styled(RowContainer)`
  ${tw`
        px-[20px]
        mt-[20px]
        border-b-[1px]
        border-b-[rgba(238, 238, 238, 0.62)]
        w-[100%-20px]
        justify-start
        items-start
    `}

  &:last-child {
    border: none;
  }

  @media (max-width: 639px) {
      padding-right: 0;
      padding-left: 5px;
  }
  
`
export const DetailCartItem = styled(BetweenRow)`
  ${tw`
       w-[100%]    
       items-end
       mb-[20px]
       mt-[25px]
    `}

    @media (max-width: 639px) {
        position: relative;
        margin-bottom: 15px;
    }
`

export const TitleContainer = styled(ColumnContainer)`
  ${tw`
       mr-[10px]
       w-full
    `}

  span {
    font-size: 15px;
  }
`
