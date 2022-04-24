import tw from 'twin.macro'
import styled from 'styled-components'

export const LocationBackground = styled.main`
  ${tw`  
      w-full   
      h-full	
      pt-[60px]
      
  `}

  @media (max-width: 639px) {
    display: none;
  }
`
