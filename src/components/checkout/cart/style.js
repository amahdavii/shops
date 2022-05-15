import tw from 'twin.macro'
import styled from 'styled-components'
import {
  CenterContainer,
  ColumnContainer,
  BetweenRow,
  RowContainer,
} from 'src/styles/sharedStyle'

export const CartCheckoutContainer = styled(ColumnContainer)`
  ${tw`
        bg-[#fff]
        rounded-[10px]
        p-[20px]
    `}
`
export const CartCheckoutDiscountPrice = styled(ColumnContainer)`
  ${tw`    
    line-through
    text-[15px]
    mr-2
    ml-[20px]
  `}

  @media (max-width: 639px) {
    ${tw`    
    mr-0
    ml-[8px]
  `}
  }
`
