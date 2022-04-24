import tw from "twin.macro"
import styled from "styled-components"
import {BetweenRow, BoldSpan, CenterContainer, ColumnContainer, FitbetweenRow} from "src/styles/sharedStyle";
import Image from "next/image";

export const AlinshopOptionConatiner = styled(CenterContainer)`
    ${tw`
        w-full
        py-[50px]
        border-b-[2px]
        border-b-[#dcdfe1]
    `}
`
export const FooterIconBox = styled(CenterContainer)`
    ${tw`
        flex-col
        w-[15%]
    `}
`

export const FooterIcon = styled(CenterContainer)`
    ${tw`
        rounded-full
        p-5                
    `}
  background-color: #f5f8fa;
  border: 1px solid #f5f8fa;
`

export const FooterTitleIcon = styled.span`
    ${tw`
        text-[#494f55]
        text-center
        mt-[15px]
        
    `}
`
// export const AlinshopDescrbeFooter = styled(BetweenRow)`
//     ${tw`
//         mb-[20px]    
//     `}
// `


export const MaleInfoContainer= styled(ColumnContainer)`
    ${tw`
        mt-[50px]
        mb-[20px]    
        width[25%]


    `}
`
export const GuidContainer= styled(ColumnContainer)`
    ${tw`
        mt-[50px]
        mb-[20px]    
        width[20%]
    `}
`
export const ServiceContainer= styled(ColumnContainer)`
    ${tw`
        mt-[50px]
        mb-[20px]
        width[10%]
        mx-[5%]
        

    `}
`
export const CreditContainer=styled(ColumnContainer)`
    ${tw`
        width[40%]
        mt-[25px]
        mb-[20px]
    `}
`
export const BoldText= styled(BoldSpan)`
    ${tw`
        mb-[20px]    
        text-right
    `}
`
export const GrayText= styled.span`
    ${tw`
        text-[#878c92]
        mb-[10px]
        text-right
        
    `}
`

export const BeUsContainer= styled(FitbetweenRow)`
    ${tw`         
        // py-5       
        h-[100px]
    `}
`


export const LawContent= styled(CenterContainer)`
    ${tw`
        bg-[#f5f8fa]
        text-[#878c92]
        h-[60px]
        
    `}
`

export const FooterDesktop = styled.footer`
  @media (max-width: 639px) {
    display: none;
  }
`