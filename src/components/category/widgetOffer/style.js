import tw from 'twin.macro'
import styled from 'styled-components'
import { ColumnContainer, Container } from 'src/styles/sharedStyle'
import * as constants from 'src/constants'
import WhiteTitleBg from '../../../../public/assets/image/widget-white.svg'

export const WidgetConatiner = styled.div`
  ${tw`
      relative
      w-full
      flex
      flex-col
      items-center
      mb-[50px]
      overflow-hidden
      // h-[400px]
      // bg-[white]
      // rounded
  `}

  @media (max-width: 639px) {
    ${tw`
      mb-[25px]
  `}
  }
`
export const PurpuleBox = styled.div`
  ${tw`
      h-[10px]
      w-[99.8%]
      mb-[-7px]
      rounded-t-[10px]
  `}
  background: ${constants.Colors.purpule};
  @media (max-width: 639px) {
    display: none;
  }
`

export const WidgetBox = styled(ColumnContainer)`
  ${tw`
      h-full
      w-full
      pb-[50px]
      overflow-hidden
   `}
  background-size: cover;
  background-repeat: repeat;
  background-image: ${(props) => `url(${props.imgUrl.src})`};

  @media (max-width: 639px) {
    background: #6a78d1;
    border-radius: 5px;
    ${tw`
      pb-[45px]
   `}
  }
`
export const MoreBox = styled.div`
  ${tw`
      w-[99%]
      flex
      justify-end
      items-start
      h-[70px]
      mt-[20px]
      
  `}
  color: ${constants.Colors.orangeDark};

  @media (max-width: 639px) {
    color: tomato;
    ${tw`
      mt-[0px]
   
   `}
  }
`
export const MoreIcon = styled.span`
  ${tw`
      ml-[2px]
   `}
  color: ${constants.Colors.orangeDark};
`
export const WidgetTitle = styled.div`
  ${tw`
      text-[#fff]
      absolute
      right-3
      top-0
      w-[200px]
      h-[60px]
      flex
      justify-center
      pt-3
      pr-3
      font-bold
  `}
  background-repeat: no-repeat;
  background-size: contain;
  background-image: ${(props) => `url(${props.imgUrl.src})`};

  @media (max-width: 639px) {
    color: #6a78d1;
    background-image: ${(props) => `url(${props.imgUrlMobile.src})`};
    ${tw`
      w-[150px]
      pt-0.5
      pr-0
      h-[42px]
      right-2
  `}
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
export const ProductWidgetTopArea = styled.div`
  @media (max-width: 639px) {
    display: none;
  }
`
