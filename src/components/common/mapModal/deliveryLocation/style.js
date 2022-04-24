import tw from 'twin.macro'
import styled from 'styled-components'
import {CenterContainer} from "src/styles/sharedStyle"
export const DeliveryLocationTitle = styled.h3`
  font-weight: 600;
  color: #494f55;
`
export const DeliveryLocationMapArea = styled(CenterContainer)`
  margin-top: 10px;
  width: 100%;
  height: 80%;
  overflow: hidden;
  border-radius: 5px;
`
export const DeliveryLocationBtn = styled.button`
  background: #ed7203;
  color: #fff;
  text-align: center;
  display: block;
  width: 100%!important;
  border-radius: 5px;
  height: 52px;
  margin-top: 25px;
  font-weight: 600;
`
export const DeliveryLocationContainer = styled.div`
  height:100% ;
  display: flex;
  flex-direction:column ;
`
