import tw from 'twin.macro'
import styled from 'styled-components'

export const StoreLayoutMobile = styled.div`
  @media (min-width: 639px) {
    display: none;
  }
`

export const MainStoreContent = styled.main`
  @media (max-width: 639px) {
    background: #f5f8fa;
    padding: 15px 15px 15% 15px;
    height: 100%;
  }
`
