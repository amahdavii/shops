
import {
  MainStoreContent,
} from './style'


import StoreMobileHeader from './header'
import StoreMobileNavbar from './navbar'

const StoreMobileLayout = ({ children }) => {
  return (
    <>
      <StoreMobileHeader />
      <MainStoreContent>{children}</MainStoreContent>
      <StoreMobileNavbar />
    </>
  )
}

export default StoreMobileLayout
