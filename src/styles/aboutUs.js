import tw from 'twin.macro'
import styled from 'styled-components'
import {
  BetweenRow,
  ColumnContainer,
  RowContainer,
  CenterContainer,
} from 'src/styles/sharedStyle'
// import Button from 'src/components/common/button'

export const AboutUsSection = styled(ColumnContainer)`
  ${tw`
    w-full
    my-[50px]
  `}
`
export const CenterAboutUs = styled(ColumnContainer)`
  ${tw`
    w-full
    items-center
    my-[50px]
  `}

  p {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.45;
    letter-spacing: normal;
    color: #494f55;
  }
`
export const RowAboutUs = styled(BetweenRow)`
  ${tw`
    w-full
    items-stretch 
    overflow-scroll
    max-h-[400px]
    justify-start
  `}
  p {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.45;
    letter-spacing: normal;
    text-align: right;
    color: #494f55;
    max-width: 45%;
  }
`
export const ColumnPic = styled(ColumnContainer)`
  ${tw`
    justify-between
    mx-[20px]
    overflow-hidden
  `}
`

export const ImageBigContainer = styled.img`
  max-height: 370px;
  min-height: 370px;
`
export const ImageSmallContainer = styled.img`
  max-height: 220px;
  min-height: 220px;
`
export const ImageThinContainer = styled.img`
  max-height: 125px;
  min-height: 125px;
`

export const CenterRowAboutUs = styled(RowContainer)`
  ${tw`
    justify-center
    items-center
    mb-[50px]
  `}
`

export const AboutUsItem = styled(ColumnContainer)`
  ${tw`
    justify-center
    items-center
    bg-[#fff]
    rounded-[5px]
    ml-[30px]
    p-[20px]
  `}

  &:last-child {
    margin: 0%;
  }
`
export const NumberRow = styled(RowContainer)`
  ${tw`
    mr-[100px]
    mt-[30px]
    items-stretch
  `}

  @media (max-width: 639px) {
    margin-right: 0;
  }
`
export const NumberRowColumn = styled(ColumnContainer)`
  ${tw`
    justify-between
  `}
`
export const CircleNumber = styled(CenterContainer)`
  ${tw`
    min-h-[50px]
    max-h-[50px]
    min-w-[50px]
    max-w-[50px]
    rounded-[25px]
    bg-[rgba(237, 114, 3, 0.2)]
    ml-[10px]
  `}
`
export const CircleNumberBorder = styled(CenterContainer)`
  ${tw`
    min-h-[30px]
    max-h-[30px]
    min-w-[30px]
    max-w-[30px]
    rounded-[15px]
    bg-[#fff]
    border-[2px]
    border-[#ed7203]
  `}
`

export const AboutusTitle = styled.p`
  @media (max-width: 639px) {
    color: #494f55;
    font-weight: 600;
    font-size: 18px;
  }
`



export const AboutusDesc = styled.p`
  @media (max-width: 639px) {
    color: #494f55;
    font-weight: 500;
    font-size: 15px;
    margin: 20px 0 15px 0;

    text-align: justify;
    border-bottom: 1px solid #efefef;
    padding-bottom: 15px;
  }
`

export const TrustSection = styled.section`
  @media (max-width: 639px) {
    background: #fff;
    padding: 10px 0;
    margin-top: 15px;
}
`
export const TrustNamadArea = styled.div`
  @media (max-width: 639px) {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`