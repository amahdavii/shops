import tw from 'twin.macro'
import styled from 'styled-components'
import {CenterContainer,Container} from 'src/styles/sharedStyle'

export const SelectLocationContainer = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 25px 30px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  /* max-height: 400px; */
  overflow: hidden;
  height:78vh;
  flex-direction:column ;

`

export const SelectLocationTitle = styled.h3`
  color: #494f55;
  font-weight: 600;
  font-size: 19px;
  margin-bottom: 13px;
`

export const LocationAreaContainer = styled.div`
  width: 100%;
  border: solid 1px #dcdfe1;
  border-radius: 5px;
  height: 46px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`
export const LocationIcon = styled.span`
  display: flex;
  &::after {
    content: '';
    width: 1px;
    height: 30px;
    background: #dcdfe1;
    margin-right: 5px;
  }
`

export const LocationInput = styled.input`
  width: 100%;
  height: 75%;
  outline: none;
  padding-right: 10px;
`

export const CurrentLocation = styled.div`
  width: 100%;
  border: solid 1px #dcdfe1;
  border-radius: 5px;
  height: 46px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-top: 15px;
  cursor: pointer;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.08);
`

export const CurrentLocationIcon = styled.span`
  display: flex;
  &::after {
    content: '';
    width: 1px;
    height: 30px;
    background: #dcdfe1;
    margin-right: 5px;
  }
`

export const CurrentLocationText = styled.p`
  color: #494f55;
  font-weight: 500;
  margin-right: 10px;
`

export const LocationArea = styled(CenterContainer)`
display:flex ;
  margin-top: 20px;
  width: 100%;
  flex:1 ;
  border-radius: 5px;
  overflow: hidden;
`

export const LocationButton = styled.button`
  background: #ed7203;
  color: #fff;
  text-align: center;
  display: block;
  width: 100%;
  border-radius: 5px;
  height: 52px;
  margin-top: 25px;
  font-weight: 600;
`


