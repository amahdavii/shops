import tw from "twin.macro"
import styled, { css } from "styled-components"
import { BetweenRow } from "src/styles/sharedStyle"
import * as constants from 'src/constants'


export const AddToCartBox = styled(BetweenRow)`
  ${tw`    
    // rounded-t-2xl
    cursor-pointer
  `}
  border: 1px solid ${(props) => props.borderColor ? props.borderColor : constants.Colors.orangeDark};
  color: ${(props) => props.color ? props.color : constants.Colors.orangeDark};
  background: ${(props) => (props.background ? props.background : '#fff')};
  padding: ${(props) => (props.padingY ? props.padingY : '2px')} ${(props) => (props.padingX ? props.padingX : '8px')};
  border-radius: ${(props) => (props.radius ? props.radius : '15px')} ${(props) => (props.radius ? props.radius : '15px')} 0 0;
  width: ${(props) => (props.width ? props.width : 'fit-content')};

  input {
    outline-width: 0;
    height: 35px;
    font-size: 20px;
    padding: 0px 10px;
  }
  input[type='number']::-webkit-inner-spin-button {
    opacity: 1;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  @media (max-width: 639px) {
    position: absolute;
    top: 10px;
    left: 10px;
    /* padding: 1px 5px; */
  }
`
export const CountBox = styled.span`
 ${tw`    
    mx-2
  `}
color: ${constants.Colors.orangeDark};

`
