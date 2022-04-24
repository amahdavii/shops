import tw from 'twin.macro'
import styled from 'styled-components'

export const OrderDetailTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

export const BackToOrderList = styled.a`
  color: #494f55;
  cursor: pointer;
`

export const ProfileTitle = styled.h3`
  color: #494f55;
  font-weight: 600;
  font-size: 17px;
`

export const OrderFactor = styled.div`
  border-radius: 5px;
  border: 1px solid #dcdfe1;
`

export const WalletTable = styled.table`
  ${tw`
     table-auto
  `}

  text-align: right;
  border: 1px solid #dcdfe1;
  border-radius: 5px;
`

export const WalletThead = styled.thead`
  font-weight: 600;
  color: #494f55;
  border-bottom: 1px solid #f5f8fa;
`
export const WalletTabelHead = styled.th`
  padding: 15px;

  &:not(:last-child) {
    border-left: 1px solid #f5f8fa;
  }
`
export const WalletTabelData = styled.td`
  color: #494f55;
  padding: 15px;
  font-weight: 400;
  border-bottom: 1px solid #f5f8fa;

  :not(:last-child) {
    border-left: 1px solid #f5f8fa;
  }

  &:nth-child(3) {
    font-family: 'Yekanbakh';
  }
`

export const WalletTabelRow = styled.tr`
  :first-child {
    margin-top: 20px;
  }
`

export const WalletPaymentArea = styled.div`
  border-left: 1px solid #dcdfe1;
  border-right: 1px solid #dcdfe1;
  border-bottom: 1px solid #dcdfe1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 15px;
`

export const WalletFactorRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 15px;
`

export const WalletFactorItem = styled.span`
  color: #494f55;
  font-weight: 500;
`

export const AmountPaidArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #004f9e;
  color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
`

export const AmountPaidItem = styled.span`
  font-weight: 500;
`
