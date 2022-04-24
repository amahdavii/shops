import tw from 'twin.macro'
import styled from 'styled-components'

export const NewAddressArea = styled.section`
  @media (max-width: 639px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px;
  }
`
export const SearchAddressArea = styled.div`
  @media (max-width: 639px) {
    width: 100%;
    border: 1px solid #dcdfe1;
    border-radius: 5px;
    background: #fff;
    display: flex;
  }
`

export const SearchAddressInput = styled.input`
  @media (max-width: 639px) {
    width: 90%;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 8px;

    &::placeholder {
      color: #494f55;
      font-size: 13px;
    }
  }
`
export const SearchBackIcon = styled.span`
  @media (max-width: 639px) {
    width: 10%;
    font-size: 24px;
    color: #494f55;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
  }
`
export const LocationDynamicMap = styled.div`
  @media (max-width: 639px) {
    height: 77vh;
    border-radius: 5px;
    margin-top: 10px;
    overflow: hidden;
    position: relative;
  }
`

export const AutomaticLocation = styled.div`
  @media (max-width: 639px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #fff;
    border-radius: 5px;
    bottom: 13px;
    right: 10px;
    z-index: 10000;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    font-size: 14px;
    padding: 12px 18px;
    cursor: pointer;
  }
`
export const LocationIcon = styled.span`
  @media (max-width: 639px) {
    display: flex;
    color: #ed7203;
    font-size: 25px;
  }
`

export const LoginButton = styled.button`
  @media (max-width: 639px) {
    background: #ed7203;
    color: #fff;
    text-align: center;
    display: block;
    width: 100%;
    border-radius: 5px;
    height: 49px;
    margin-top: 10px;
  }
`