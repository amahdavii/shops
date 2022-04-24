import tw from 'twin.macro'
import styled from 'styled-components'

export const LoginMobileContainer = styled.div`
  @media (max-width: 639px) {
    background: #fff;
    padding: 12px;
  }

  @media (min-width: 640px) {
    display: none;
  }
`

export const LoginMobileClose = styled.span`
  @media (max-width: 639px) {
    display: inline-flex;
    cursor: pointer;
    color: #494f55;
    font-size: 25px;
    margin-bottom: 30px;
  }
`

export const LoginMobileArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
