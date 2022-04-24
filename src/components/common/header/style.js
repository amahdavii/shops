import tw from "twin.macro"
import styled from "styled-components"
import {Container} from "src/styles/sharedStyle";

export const MainHeaderFix = styled.div`
   ${tw`
    fixed
    flex
    flex-col
    w-full
    bg-[#fff]
    z-50

  `}
`

export const MainHeaderContainer = styled(Container)`
   ${tw`
      my-[5px]      
      h-[70px]
      flex
      items-center
      w-full
      justify-between


  `}
`
export const HeaderDesktop = styled.footer`
  @media (max-width: 639px) {
    display: none;
  }
`