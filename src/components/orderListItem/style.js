import tw from 'twin.macro'
import styled from 'styled-components'

export const OrderItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  :not(:last-child) {
    border-bottom: 1px solid #f5f8fa;
  }
`
export const OrderRightSide = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  img {
    border: 1px solid #f5f8fa !important;
    border-radius: 5px;
  }
`

export const OrderShopDetailArea = styled.div`
  display: flex;
  flex-direction: column;
  color: #494f55;
  width: 65%;
  margin-right: 18px;
`

export const OrderShopTitle = styled.span`
  font-weight: 600;
  margin-bottom: 10px;
`

export const OrderShopDetail = styled.div`
  display: flex;
  justify-content: space-between;
`
export const OrderShopDetailItem = styled.span`
  font-size: 14px;
`

export const OrderLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 26.5%;
`

export const WrapBtn = styled.div`
  display: flex;
`

export const DetailBtn = styled.a`
  color: #004f9e;
  padding: 8px 10px;
  border: 1px solid #004f9e;
  border-radius: 5px;
  cursor: pointer;
  width: 130px;
  text-align: center;
  white-space: nowrap;
  transition: all .3s;

  &:hover {
    background: #004f9e;
    color: #fff;
  }
`
export const ReorderBtn = styled.a`
  color: #2bc430;
  padding: 8px 10px;
  border: 1px solid #2bc430;
  border-radius: 5px;
  cursor: pointer;
  width: 130px;
  text-align: center;
  white-space: nowrap;
  margin-right: 10px;
  transition: all 0.3s;

  &:hover {
    background: #2bc430;
    color: #fff;
  }
`

export const OrderPriceWrap = styled.div`
  display: flex;
  align-items: center;
  color: #494f55;
  margin-bottom: 10px;
  align-self: flex-end;
`

export const OrderPrice = styled.span`
  font-weight: 600;
  margin-left: 5px;
`
