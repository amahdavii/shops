import tw from 'twin.macro'
import styled from 'styled-components'

export const VerificationTitle = styled.h2`
  color: #494f55;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 639px) {
    font-size: 18px;
    margin: 40px 0 5px 0;
  }
`
export const VerificationContainer = styled.form`
  width: 100%;
  margin-top: 55px;
`

export const VerificationInput = styled.input`
  border-radius: 5px;
  border: 1px solid #dcdfe1;
  outline: none;
  width: 100%;
  height: 50px;
  margin: 15px 0;
  padding: 0 10px;
  text-align: center;
  letter-spacing: 8px;
  direction: ltr;
`

export const VerificationPasswordLogin = styled.a`
  color: #004b93;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  margin-top: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
`

export const LoginTimerCountDown = styled.p`
  text-align: center;
  color: #6d757d;
  margin-top: 45px;
  @media (max-width: 639px) {
    margin-top: 25px;
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
export const LoginHeaderArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginPassIcon = styled.span`
  color: #004b93;
  display: flex;
  margin-right: 4px;
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
