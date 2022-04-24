import tw from "twin.macro"
import styled from "styled-components"
import {CenterContainer, Container} from "src/styles/sharedStyle";

export const SwiperContainer = styled.div`
  ${tw`
      relative
      m-auto
  `}
  width: ${(props) => props.width};
  /* padding:0 calc(${(props) => 100 % -props.width}) */

  @media (max-width: 639px) {
    /* margin-right: 15px; */
  }
`
export const AbsolutNav = styled(CenterContainer)`
    ${tw`
        absolute
        shadow
        rounded-full
        bg-[#fff]
        top-[45%]      
        z-10  
        cursor-pointer
        h-[40px]
        w-[40px]
    `}
`
export const AbsolutNavRight = styled(AbsolutNav)`
    ${tw`
        right-[3px] 
    `}
`
export const AbsolutNavleft = styled(AbsolutNav)`
    ${tw`
        left-[3px]
    `}
`