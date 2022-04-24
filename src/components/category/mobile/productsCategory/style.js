import tw from 'twin.macro'
import styled from 'styled-components'
import * as constants from '../../../../constants'

export const ProductsCategorySection = styled.section`
  @media (max-width: 639px) {
    width: 100%;
    padding: 15px 0;

    &:last-child {
      padding-bottom: 10%;
    }
  }
`

export const ProductsCategoryTitleArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
`
export const ProductsCategoryTitle = styled.h2`
  @media (max-width: 639px) {
    color: #494f55;
    font-weight: 600;
  }
`

export const ProductsMoreCategory = styled.a`
  @media (max-width: 639px) {
    color: #ed7203;
    font-weight: 500;
  }
`
export const ProductsMoreIcon = styled.span`
  ${tw`
      ml-[2px]
   `}
  color: ${constants.Colors.orangeDark};

  @media (max-width: 639px) {
    font-size: 14px;
  }
`

export const ProductBoxWidget = styled.div`
  ${tw`
      overflow-hidden
      rounded-[10px]
      border-[1px]
      border-[#eef5f9]
  `}
`
