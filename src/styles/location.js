import tw from 'twin.macro'
import styled from 'styled-components'
import { BetweenRow, ColumnContainer } from 'src/styles/sharedStyle'

export const LocationSection = styled.section`
  background: url('/assets/image/location-background.png');
  /* height: 70vh; */
  background-size: cover;
  padding: 50px 0;
`

export const LocationAddressBox = styled.div`
  background-color: #fff;
`
export const HederShopContainer = styled(BetweenRow)`
  ${tw`
    mt-[50px]
  `}
  span {
    font-size: 20px;
    font-weight: bold;
  }
`
export const TitleBottonHeader = styled.div`
  ${tw`
    bg-[#ed7203]
    h-[3px]
    mt-[3px]
  `}
  width: ${(props) => (props.width ? props.width : '200px')};

  /* @media (max-width: 639px) {
    margin-bottom: 24px;
  } */
`
export const ShopBox = styled(ColumnContainer)`
  ${tw`
    bg-[#f5f8fa]
  `}
`

export const ShopContainer = styled.div`
  ${tw`
    grid 
    grid-cols-3
    gap-[2%]
    py-[50px]
  `}
`

export const LocationMobileArea = styled.div`
  @media (max-width: 639px) {
    /* padding: 25px 20px; */
    height: 100vh;
    background: #fff;
  }
`
export const LocationMobileHeader = styled.header`
  @media (max-width: 639px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px;
  }
`

export const LocationLogoArea = styled.a`
  @media (max-width: 639px) {
    display: flex;
  }
`

export const LoginLocationBtn = styled.button`
  @media (max-width: 639px) {
    border: 1px solid #ed7203;
    border-radius: 5px;
    padding: 6px 8px;
    color: #ed7203;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`
export const LoginIconBtn = styled.span`
  @media (max-width: 639px) {
    display: flex;
    margin-left: 5px;
    font-size: 20px;
  }
`
export const LocationSearchShopSection = styled.section`
  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    padding: 50px 20px;
    background: #fff;
  }
`

export const LocationSearchShopTitle = styled.h2`
  @media (max-width: 639px) {
    color: #494f55;
    font-weight: 600;
    font-size: 18px;
  }
`

export const LocationSearchDesc = styled.p`
  @media (max-width: 639px) {
    color: #004f9e;
    font-weight: 500;
    font-size: 16px;
    direction: rtl;
    margin-top: 5px;
  }
`

export const SearchRegionArea = styled.div`
  @media (max-width: 639px) {
    width: 100%;
    border: 1px solid #dcdfe1;
    border-radius: 5px;
    margin-top: 30px;
    display: flex;
    height: 50px;
    background: #fff;
  }
`

export const SearchRegionIcon = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
    color: #494f55;
    font-size: 25px;
    padding: 8px;
    &::before {
      content: ']';
      border-left: 1px solid #dcdfe1;
      padding-left: 5px;
    }
  }
`

export const SearchRegionInput = styled.input`
  @media (max-width: 639px) {
    width: 100%;
    outline: none;
    padding-left: 6px;
    font-size: 16px;
    border-radius: 5px;

    &::placeholder {
      font-size: 14px;
    }
  }
`
export const SearchRegionNotif = styled.p`
  @media (max-width: 639px) {
    color: #494f55;
    font-size: 14px;
    margin-top: 10px;
  }

  a {
    color: #ed7203;
    display: inline-block;
    margin-right: 5px;
  }
`
export const RegionBanner = styled.section`
  @media (max-width: 639px) {
    width: 100%;
    height: 55vh;
    background: url(/assets/image/editbg.png);
    background-size: cover;
    background-position: inherit;
    background-repeat: no-repeat;
  }
`
export const LocationTopSide = styled.section`
  @media (max-width: 639px) {
    height: 45vh;
  }
`

export const LocationBottomSide = styled.section`
  @media (max-width: 639px) {
    height: 55vh;
  }
`
