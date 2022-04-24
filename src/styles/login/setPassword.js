import tw from 'twin.macro'
import styled from 'styled-components'

export const SetPasswordContainer = styled.form`
  width: 100%;
  margin-top: 35px;
`
export const SetPasswordTitle = styled.h2`
  color: #494f55;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 639px) {
    font-size: 16px;
  }
`

export const SetPasswordDesc = styled.p`
  color: #494f55;
  margin: 10px 0;
  @media (max-width: 639px) {
    font-size: 16px;
    margin: 5px 0;
  }
`

export const SetPasswordInput = styled.input`
  border-radius: 5px;
  border: 1px solid #dcdfe1;
  outline: none;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  padding: 0 10px;
  @media (max-width: 639px) {
    margin: 8px 0;
  }
`
export const SetPasswordLabel = styled.label`
  color: #494f55;
  margin-top: 10px;
  display: block;
  span {
    color: red;
    margin-right: 2px;
  }

  @media (max-width: 639px) {
    margin-top: 7px;
    font-size: 15px;
  }
`

export const LoginButton = styled.button`
  background: #ed7203;
  color: #fff;
  text-align: center;
  display: block;
  width: 100%;
  border-radius: 5px;
  height: 52px;
  margin-top: 25px;
  @media (max-width: 639px) {
    margin-top: 15px;
  }
`
export const LoginHeaderArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginBack = styled.span`
  position: absolute;
  display: flex;
  right: -135px;
  font-size: 25px;
  cursor: pointer;
  color: #494f55;
`
export const LoginFormMobile = styled.form`
  @media (max-width: 639px) {
    width: 100%;
    padding: 0 3%;
  }
`

export const LoginDescContainer = styled.div`
  width: 100%;
  margin: 40px 0 8px 0;
`

export const LoginRegisterHeading = styled.h2`
  @media (max-width: 639px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`

export const LoginPasswordDesc = styled.p`
  color: #494f55;
  @media (max-width: 639px) {
    font-size: 15px;
    margin-bottom: 15px;
  }
`