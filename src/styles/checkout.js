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
export const CheckoutEmpty = styled.div`
  @media (max-width: 639px) {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span {
      margin-top: 30px;
      font-weight: 600;
      font-size: 20px;
      color: #494f55;
    }
  }
`
export const UnavailableText = styled.span`
  @media (max-width: 639px) {
    color: red;
    font-weight: 500;
  }
`
export const DeleteItemBtn = styled.button`
  @media (max-width: 639px) {
    color: red;
    border: 1px solid #fe1616;
    border-radius: 15px 15px 0 0;
    padding: 5px 12px 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    margin-left: 9px;
  }
`