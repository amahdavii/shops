import tw from 'twin.macro'
import styled from 'styled-components'
import { ColumnContainer } from 'src/styles/sharedStyle'

export const FaqSection = styled(ColumnContainer)`
  ${tw`
    bg-[#fff]
    rounded-[5px]
    p-[50px]
  `}

  @media (max-width: 639px) {
    ${tw`
    p-[0]
  `}
  }
`
export const FaqHeader = styled(ColumnContainer)`
  max-width: 70%;
  height: 200px;
  margin: 20px auto 50px auto;
  background-image: ${(props) => `url(${props.imgUrl.src})`};
  background-repeat: no-repeat;
  background-size: 80% 200px;
  align-items: center;
  justify-content: center;
  background-position: center;

  @media (max-width: 639px) {
    max-width: 100%;
    height: 130px;
    margin: 0 auto;
    position: relative;
    background-size: contain;
  }
`

export const FaqHeaderDesc = styled.span`
  @media (max-width: 639px) {
    font-weight: 600;
    position: absolute;
    bottom: 40%;
    font-size: 17px;
  }
`