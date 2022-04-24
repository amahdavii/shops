import tw from 'twin.macro'
import styled from 'styled-components'
import {
  BetweenRow,
  ColumnContainer,
  RowContainer,
} from 'src/styles/sharedStyle'

export const CheckoutContainer = styled(BetweenRow)`
  ${tw`
    w-[100%]
    items-start    
  `}
  height:fit-content;
`
export const CheckoutBox = styled(ColumnContainer)`
  ${tw`
    w-[67%]
  `}
`
