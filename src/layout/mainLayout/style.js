import tw from "twin.macro"
import styled from "styled-components"
import {ColumnContainer} from 'src/styles/sharedStyle'

export const MainContainer = styled(ColumnContainer)`
  ${tw`
      bg-[#f5f8fa]
      min-h-[100vh]
      pt-[280px]
      pb-10
  `}

  @media (max-width: 639px) {
    display: none;
  }
`
