import styled from 'styled-components'

export const StoreMobileHeader = styled.header`
  @media (max-width: 639px) {
    background: #fff;
  }
`
export const StoreUserDetail = styled.div`
  @media (max-width: 639px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dcdfe1;
    padding: 15px;
  }
`


export const UserAccountIcon = styled.span`
  @media (max-width: 639px) {
    display: flex;
    font-size: 25px;
    color: #494f55;
    font-weight: 500;
  }
`

export const ShopsDetailArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
`

export const ShopsBrandArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
  }
`

export const ShopsBrandLogo = styled.div`
  @media (max-width: 639px) {
    border: 1px solid #dcdfe1;
    border-radius: 5px;
    display: flex;
  }
`

export const ShopsBrandDesc = styled.h3`
  @media (max-width: 639px) {
    color: #494f55;
    margin-right: 12px;
    font-size: 15.5px;
    font-weight: 500;
  }
`

export const StoreDeliveryArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }
`

export const StoreDeliveryTime = styled.span`
  @media (max-width: 639px) {
    color: #494f55;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
  }
`
export const StoreDeliveryIcon = styled.span`
  @media (max-width: 639px) {
    color: #494f55;
    display: flex;
    font-size: 25px;
    margin-left: 5px;
    font-weight: 500;
  }
`

export const StoreDeliveryShipping = styled.span`
  @media (max-width: 639px) {
    color: #494f55;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
  }
`

export const StoreDeliveryShippingIcon = styled.span`
  @media (max-width: 639px) {
    color: #494f55;
    display: flex;
    font-size: 25px;
    margin-left: 5px;
    font-weight: 500;
  }
`
export const ChangeStoreBtn = styled.div`
  @media (max-width: 639px) {
    border: 1px solid #dcdfe1;
    border-radius: 5px;
    color: #004f9e;
    font-weight: 500;
    font-size: 15px;
    padding: 3px 5px;
    display: flex;
    align-items: center;

    span {
      display: flex;
      margin-right: 3px;
    }
  }
`

export const SearchStoreArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #dcdfe1;
    width: 100%;
  }
`

export const SearchStoreInput = styled.input`
  @media (max-width: 639px) {
    padding: 9px 12px;
    width: 90%;
    outline: none;
    border-radius: 5px;
    color: #494f55;

    &::placeholder {
      color: #dcdfe1;
    }
  }
`
export const SearchStoreBtn = styled.button`
  @media (max-width: 639px) {
    display: flex;
    font-size: 30px;
    border: none;
    padding: 7px 5px;
    color: #dcdfe1;
    border-radius: 5px;
  }
`
