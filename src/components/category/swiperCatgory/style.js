import tw from "twin.macro"
import styled from "styled-components"
import {CenterContainer, Container} from "src/styles/sharedStyle";

export const CategoryContainer = styled.div`
   ${tw`
      relative
      w-full
  `}
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
        right-0       
    `}
`
export const AbsolutNavleft = styled(AbsolutNav)`
    ${tw`
        left-0   
    `}
`