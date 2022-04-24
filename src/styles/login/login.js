import tw from 'twin.macro'
import styled from 'styled-components'

export const LoginForm = styled.form`
  width: 100%;
`

export const LoginDescContainer = styled.div`
  width: 100%;
  margin: 40px 0 8px 0;
`

export const LoginRegisterHeading = styled.h2`
  color: #494f55;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 15px;
  @media (max-width: 639px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`

export const LoginDesc = styled.p`
  color: #494f55;
  @media (max-width: 639px) {
    font-size: 15px;
    margin-bottom: 15px;
  }
`

export const LoginPhoneInputArea = styled.div`
  border: 1px solid #dcdfe1;
  border-radius: 5px;
  display: flex;
  align-items: center;
`

export const LoginPhoneInput = styled.input`
  border-radius: 5px;
  outline: none;
  height: 50px;
  margin: 15px 0;
  padding: 0 10px;
  width: ${props => props.withClose ? '90%' : '100%'};
  &::placeholder {
    font-size: 15px;
  }

  @media (max-width: 639px) {
    margin: 0;
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
    margin-top: 8px;
    height: 49px;
    margin-top: 15px;
  }
`

export const LoginRules = styled.p`
  line-height: 1.7;
  color: #494f55;
  margin-top: 15px;
  font-size: 15px;
`
export const LoginRulesBold = styled.span`
  text-decoration: underline;
`


export const LoginFormMobile = styled.form`
  @media (max-width: 639px) {
    width: 100%;
    padding: 0 3%;
  }
`

export const LoginClearInput = styled.div`
  width: 25px;
  height: 25px;
  background: #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    display: flex;
    color: #494f55;
    font-size: 20px;
  }
`