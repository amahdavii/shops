import tw from 'twin.macro'
import styled from 'styled-components'

export const DetailBtn = styled.a`
  color: #004f9e;
  padding: 10px 15px;
  border: 1px solid #004f9e;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
`
export const ReorderBtn = styled.a`
  color: #2bc430;
  padding: 10px 15px;
  border: 1px solid #2bc430;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
`
export const ProfileTitle = styled.h3`
  color: #494f55;
  border-bottom: 1px solid #dcdfe1;
  padding-bottom: 12px;
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 15px;
`
export const OrderStatusNav = styled.ul`
  @media (max-width: 639px) {
    display: flex;
    list-style: none;
    color: #494f55;
    border-bottom: 1px solid #efefef;
  }
`

export const OrderStatusItem = styled.li`
  @media (max-width: 639px) {
    width: 50%;
    text-align: center;
    padding-bottom: 15px;
    font-weight: ${(props) => (props.active ? '600' : '500')};
    border-bottom: ${(porps) => (porps.active ? '2px solid #004f9e' : 'none')};
  }
`
export const OrderShopBadge = styled.div`
  @media (max-width: 639px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #efefef;
    border-radius: 5px;
    width: 70px;
    height: 70px;
    margin-left: 13px;
  }
`
export const OrderDetailArea = styled.div`
  @media (max-width: 639px) {
    padding: 15px 0 25px 0;
    color: #494f55;

    &:not(:last-child) {
      border-bottom: 1px solid #efefef;
    }
  }
`

export const OrderDescContainer = styled.div`
  @media (max-width: 639px) {
    display: flex;
  }
`
export const OrderDescDetail = styled.div`
  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;

    h2 {
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 8px;
    }

    ul {
      list-style: none;
    }

    li {
      display: flex;
      align-items: center;
      font-size: 13px;

      &:not(:last-child) {
        margin-bottom: 4px;
      }

      span {
        margin-left: 5px;
      }
    }
  }
`
export const OrderTotalPrice = styled.div`
  @media (max-width: 639px) {
    text-align: left;
    span {
      margin-left: 3px;
      font-weight: 600;
    }
  }
`

export const OrderBtnArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
`

export const OrderDetailBtn = styled.button`
  @media (max-width: 639px) {
    border: ${(props) =>
      props.reorder ? '1px solid #2bc430' : '1px solid #004f9e'};
    color: ${(props) => (props.reorder ? '#2bc430' : '#004f9e')};
    padding: 10px 0;
    text-align: center;
    width: 48%;
    border-radius: 5px;
  }
`
export const OrderTrackingBtn = styled.button`
  @media (max-width: 639px) {
    border: 1px solid #ed7203;
    color: #ed7203;
    padding: 10px 0;
    text-align: center;
    width: 48%;
    border-radius: 5px;
  }
`
