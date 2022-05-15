import styled from 'styled-components'

export const MainCheckoutLayout = styled.main`
  @media (max-width: 639px) {
    min-height: 100vh;
    height: 100%;
    background: #f5f8fa;
  }

  @media (min-width: 639px) {
    display: none;
  }
`

export const MobileCheckoutHeader = styled.div`
  @media (max-width: 639px) {
    background: #fff;
    padding: 15px;
    color: #494f55;
    border: 1px solid #dcdfe1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`
export const CheckoutHeaderTitleArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
  }
`
export const CheckoutHeaderTitle = styled.h3`
  @media (max-width: 639px) {
    font-weight: 500;
    margin-right: 5px;
  }
`

export const CheckoutHeaderTotalProduct = styled.span`
  @media (max-width: 639px) {
    font-weight: 300;
    margin-right: 5px;
  }
`
export const CheckoutProductItems = styled.section`
  @media (max-width: 639px) {
    background: #fff;
    padding: 15px;
    min-height: 90vh;
    height: 100%;
    padding-bottom: 40%;

  }
`
export const CheckoutTotalPriceArea = styled.section`
  @media (max-width: 639px) {
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    box-shadow: 0 -3px 8px 0 rgba(89, 94, 100, 0.15);
    padding: 15px;
    z-index: 10000;
    display: ${props => props.totalPrice ? "block" : "none"};
  }
`
export const CheckoutShippingDesc = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
    border-radius: 5px;
    background: #ecf6ff;
    color: #253858;
    padding: 10px;
    font-weight: 500;

    span {
      display: flex;
      margin-left: 5px;
    }
  }
`
export const CheckoutTotalPrice = styled.div`
  @media (max-width: 639px) {
    border-top: 1px solid #eee;
    padding-top: 15px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const AmountPayable = styled.div`
  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;
    color: #494f55;
    font-weight: 500;
  }
`

export const AmountPayablePrice = styled.div`
  @media (max-width: 639px) {
    color: #494f55;
    font-weight: 600;
    font-size: 18px;

    span {
      font-weight: 300;
      margin-right: 5px;
    }
  }
`
export const PaymentButton = styled.button`
  @media (max-width: 639px) {
    display: flex;
    background: ${(props) => (props.disabled ? '#f7c190' : '#ed7203')};
    border: none;
    border-radius: 20px 20px 3px 3px;
    color: #fff;
    padding: 10px 35px;
    font-weight: 600;
  }
`
