import { StoreLayoutMobile, MainStoreContent } from './style'

import StoreMobileHeader from './header'
import StoreMobileNavbar from './navbar'

const StoreMobileLayout = ({ children }) => {
  return (
    <StoreLayoutMobile>
      <StoreMobileHeader />
      <MainStoreContent>{children}</MainStoreContent>
      <StoreMobileNavbar />
    </StoreLayoutMobile>
  )
}

export default StoreMobileLayout
