import tw from "twin.macro"
import styled from "styled-components"


export const ButtonContainer:any = styled.div`
  ${tw`
        rounded-md
        px-3
        py-3
        flex
        justify-center
        items-center
        cursor-pointer
    `}
  background: ${(props:any) =>
    props.deactive ? props.deactive : props.background};
  color: ${(props) => props.color};
  border: ${(props:any) => (props.border ? `1px solid ${props.border}` : "0px")};
  height: ${(props:any) => (props.height ? props.height :'50px')};
  width: ${(props:any) => (props.width ? props.width :'fit-content')};
  margin: ${(props:any) => (props.margin ? props.margin :'0')};



  /* width: 90%; */

  span{
    margin: 0px 1px;
  }
`

