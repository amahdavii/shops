import tw from 'twin.macro'
import styled from 'styled-components'
import { Container } from '../sharedStyle'

export const MainHeaderContainer = styled(Container)`
  ${tw`
      my-[10px]
  `}
`

export const StoreCtaBannerArea = styled.div`
  @media (max-width: 639px) {
    width: 100%;
    height: 120px;
    border-radius: 5px;
  }
`

export const StoreCategoryItems = styled.div`
  @media (max-width: 639px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 45px 0;
  }
`

export const StoreCategoryItem = styled.div`
  @media (max-width: 639px) {
    width: 100%;
    height: 70px;
    background: #fff;
    border-radius: 30px 30px 0 0;
    position: relative;
    overflow: auto!important;
  }
`

export const StoreCategoryDetail = styled.div`
  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    right: 20px;

    span {
      margin-top: 8px;
    }
  }
`
