import { MainCategoryContent, CategoryLayoutContainer } from './style'
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
}) => {
  return (
    <CategoryLayoutContainer>
      <HeaderCategoryArea
        pageTitle={pageTitle}
        subCategory={subCategory}
        subFilter={subFilter}
        mysterious={mysterious}
      />
      <MainCategoryContent>{children}</MainCategoryContent>
      <StoreMobileNavbar />
    </CategoryLayoutContainer>
  )
}

export default MobileCategoryLayout
