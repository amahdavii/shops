import styled from 'styled-components'

export const ProductMobileContainer = styled.main`
  @media (max-width: 639px) {
    background: #f5f8fa;
    min-height: 100vh;
    height: 100%;
  }
`

export const ProductHeaderContainer = styled.header`
  @media (max-width: 639px) {
    background: #fff;
    border-bottom: 1px solid #dcdfe1;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ProductHeaderTitleArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
  }
`
export const ProductHeaderTitle = styled.h3`
  @media (max-width: 639px) {
    color: #494f55;
    font-weight: 500;
    font-size: 16px;
    margin-right: 5px;
  }
`
export const ProductHeaderBasket = styled.div`
  @media (max-width: 639px) {
    position: relative;
  }
`

export const ProductHeaderBasketBadge = styled.div`
  @media (max-width: 639px) {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ed7203;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -6px;
    right: -5px;
    color: #fff;
    font-size: 12px;
  }
`
