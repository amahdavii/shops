import styled from 'styled-components'

export const OrderTrackingContainer = styled.div`
  @media (max-width: 639px) {
    min-height: 100vh;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const OrderLogoArea = styled.div`
  @media (max-width: 639px) {
    margin: 20% 0 10% 0;
    display: flex;
  }
`

export const OrderTrackingStatusArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
  }
`

export const OrderTrackingStatusTitle = styled.p`
  @media (max-width: 639px) {
    font-weight: 600;
    font-size: 20px;
    margin-top: 0px;
  }
`
export const OrderTrackingDetail = styled.ul`
  @media (max-width: 639px) {
    border: 1px solid #efefef;
    border-radius: 10px;
    padding: 15px;
    width: 320px;
    margin-top: 40px;
    color: #494f55;
  }
`

export const OrderTrackingItem = styled.li`
  @media (max-width: 639px) {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;

    div {
      font-weight: 600;
    }

    span {
      font-weight: 300;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #efefef;
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }
`

export const OrderTrackingBtn = styled.button`
  @media (max-width: 639px) {
    color: #ed7203;
    border: 1px solid #ed7203;
    border-radius: 5px;
    font-weight: 500;
    padding: 5px 15px;
    margin-top: 25px;
  }
`
