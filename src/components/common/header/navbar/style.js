import tw from "twin.macro"
import styled from "styled-components"
import { Container, RowContainer } from "src/styles/sharedStyle"


export const NavBarShadowBox = styled.div`
   ${tw`     
      h-[65px]
      w-full
      shadow-md
      flex
      items-center  
      relative      
      z-50

  `}  
`
export const SpaceContainer = styled(RowContainer)`

   &:first-child{
      div:nth-child(1) {
         margin-left: 30px;
      }
   }
   &:last-child{
      div:nth-child(1) {
         margin-left: 50px;
      }
   }
`
export const ModalView = styled.div`
   ${tw`        
      w-full 
  `}  
`
export const DropDown = styled.div`
   ${tw`     
      absolute
      w-full
      justify-center
      flex
      items-center
      z-40

  `} 
  display:${(props)=>props.visible ? "flex" :'none'};
   
`
export const BackModal=styled.div`
   ${tw`
      bg-[#4c4d4f30]
      w-full
      h-full   
      min-h-[100vh]
   `}
`

export const ModalAbsoluteContainer=styled(Container)`
   ${tw`
      absolute   
      m-auto
      flex
      justify-end
      top-0
      h-[58%]
   `}
`
export const ModalAbsoluteBack=styled(Container)`
   ${tw`
      bg-[transparent]
      w-[90%]
      h-[100%]
      
   `}
`

export const ModalAbsolute=styled.div`
   ${tw`
      absolute
      top-0    
      bg-[#fff]
      h-[100%]
      p-[20px]
      overflow-scroll
   `}
   width: ${props=>props.width ?props.width :'100%'};
`


export const CategoryContainerModal = styled.div`
 ${tw`
    grid 
    grid-cols-4
    gap-[20px]
    py-[50px]
    px-[10px]

  `}
`