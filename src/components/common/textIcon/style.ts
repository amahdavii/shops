import tw from "twin.macro"
import styled from "styled-components"

export const TextIconContainer:any = styled.div`
  ${tw`

        // px-3
        // py-3
        flex
        justify-center
        items-center
        // m-5
        cursor-pointer
    `}
    
  color: ${(props:any) => props.color ?props.color :'#494f55'};  
  &:hover{
    color: ${(props:any) => props.hover ?props.hover :null};
  }


  span{
    margin: 0px 2px;
  }
`

