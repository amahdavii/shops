import tw from 'twin.macro'
import styled from 'styled-components'
import { CenterContainer } from 'src/styles/sharedStyle'

export const EditLocationTitle = styled.h3`
  font-weight: 600;
  color: #494f55;
`

export const DeliveryLocationMapArea = styled(CenterContainer)`
  margin-top: 10px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 5px;
`

export const DeliveryFormContaier = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DeliveryPhoneContainer = styled.div`
  width: 40%;
  margin-top: 10px;
`

export const DeliveryAddressContainer = styled.div`
  width: 55%;
  margin-top: 10px;
`

export const DeliveryLabel = styled.label`
  display: inline-block;
  color: #494f55;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
`

export const DeliveryInput = styled.input`
  width: 100%;
  border: solid 1px #dcdfe1;
  height: 41px;
  outline: none;
  padding: 8px;
  border-radius: 5px;
`
export const DeliveryLocationBtn = styled.button`
  background: #ed7203;
  color: #fff;
  text-align: center;
  display: block;
  width: 100% !important;
  border-radius: 5px;
  height: 52px;
  margin-top: 15px;
  font-weight: 600;
`