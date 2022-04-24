import tw from 'twin.macro'
import styled from 'styled-components'

export const WalletTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const ProfileTitle = styled.h3`
  color: #494f55;
  font-weight: 600;
  font-size: 17px;
`
export const WalletBalanceArea = styled.div`
  display: flex;
  align-items: center;
  color: #494f55;
`

export const WalletBalance = styled.span`
  font-weight: 600;
  margin: 0 5px;
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
  border: 1px solid #dcdfe1;
`
export const WalletTabelHead = styled.th`
  padding: 15px;
`
export const WalletTabelData = styled.td`
  color: #494f55;
  padding: 15px;
  font-weight: 400;
`

export const WalletTabelRow = styled.tr`
  :first-child {
    margin-top: 20px;
  }
`

export const WalletPrice = styled.span`
  color: #494f55;
  font-weight: 600;
  margin-left: 3px;
`
