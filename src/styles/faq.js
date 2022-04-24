import tw from 'twin.macro'
import styled from 'styled-components'
import { ColumnContainer } from 'src/styles/sharedStyle'

export const FaqSection = styled(ColumnContainer)`
  ${tw`
    bg-[#fff]
    rounded-[5px]
    p-[50px]
  `}
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
`
