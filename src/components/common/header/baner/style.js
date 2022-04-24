import tw from "twin.macro"
import styled, { css } from "styled-components"
import { CenterContainer, ColumnContainer, Container } from "src/styles/sharedStyle"
import * as constants from 'src/constants'

export const BanerBackground = styled.div`
  ${tw`     
      w-full
      bg-no-repeat
      bg-cover
      transition-all
      delay-75
  `}
  height: ${(props) =>props.height};
  background-image: ${(props) => `url(${props.imgUrl.src})`};
`

export const MainBanerConatiner = styled(Container)`
  ${tw`     
      flex
      flex-col
      justify-center
      h-full
      text-[#fff]
  `}
  span:first-child {
    margin-right: 10px;
  }
  span:last-child {
    font-weight: bold;
    font-size: 25px;
    margin-right: 5px;
  }
`

export const CartTitle = styled(CenterContainer)`
  ${tw`     
      rounded-full
      h-[30px]
      w-[30px]
      mr-[15px]
      
  `}
  background: ${constants.Colors.grayelight};
  color: ${constants.Colors.text.secondary};
`
