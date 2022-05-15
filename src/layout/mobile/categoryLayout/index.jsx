import { MainCategoryContent, LayoutCategoryContainer } from './style'
import StoreMobileNavbar from '../storeMobileLayout/navbar'
import { IconBox } from '../../../styles/sharedStyle'
import { useRouter } from 'next/router'
import HeaderCategoryArea from './header'

const MobileCategoryLayout = ({
  children,
  pageTitle,
  subCategory,
  subFilter,
  mysterious,
  categoryNav,
  fullPage,
  hideNav,
  fullHeight,
}) => {
  return (
    <LayoutCategoryContainer>
      <HeaderCategoryArea
        pageTitle={pageTitle}
        subCategory={subCategory}
        subFilter={subFilter}
        mysterious={mysterious}
        categoryNav={categoryNav}
      />
      <MainCategoryContent fullPage={fullPage} fullHeight={fullHeight}>
        {children}
      </MainCategoryContent>
      <StoreMobileNavbar hideNav={hideNav} />
    </LayoutCategoryContainer>
  )
}

export default MobileCategoryLayout
