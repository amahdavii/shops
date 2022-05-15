import {
  HeaderCategoryContainer,
  HeaderCategoryTopArea,
  HeaderCategoryTitleArea,
  HeaderCategoryTitle,
  HeaderFilterCategoryArea,
  HeaderFilterCategoryItems,
  HeaderFilterSubCategoryArea,
  HeaderFilterSubCategoryItems,
  HeaderFilterProducts,
  HeaderProductCount,
  HeaderProductFilter,
} from './style'

import { IconBox } from '../../../../styles/sharedStyle'
import { useRouter } from 'next/router'

const HeaderCategoryArea = ({
  pageTitle,
  subCategory,
  subFilter,
  mysterious,
  categoryNav
}) => {
  const router = useRouter()
  return (
    <HeaderCategoryContainer>
      <HeaderCategoryTopArea>
        <HeaderCategoryTitleArea>
          <IconBox
            onClick={() => router.back()}
            data-icon="z"
            size="24"
            color="#494d55"
          />
          <HeaderCategoryTitle>{pageTitle}</HeaderCategoryTitle>
        </HeaderCategoryTitleArea>
      </HeaderCategoryTopArea>
      <HeaderFilterCategoryArea mysterious={mysterious} categoryNav={categoryNav}>
        <HeaderFilterCategoryItems mysterious={mysterious}>
          <li>لبنیات</li>
          <li>نوشیدنی</li>
          <li>صبحانه</li>
          <li>مواد پروتئینی</li>
          <li>تنقلات</li>
          <li>لبنیات</li>
          <li>نوشیدنی</li>
          <li>صبحانه</li>
          <li>تنقلات</li>
          <li>مواد پروتئینی</li>
        </HeaderFilterCategoryItems>
      </HeaderFilterCategoryArea>
      <HeaderFilterSubCategoryArea subFilter={subFilter}>
        <HeaderFilterSubCategoryItems>
          <li>همه</li>
          <li>شیر</li>
          <li>ماست</li>
          <li>پنیر</li>
          <li>نوشیدنی گازدار</li>
          <li>دوغ</li>
          <li>کره</li>
          <li>کشک</li>
          <li>پفک</li>
          <li>مواد پروتئینی</li>
        </HeaderFilterSubCategoryItems>
      </HeaderFilterSubCategoryArea>

      <HeaderFilterProducts subCategory={subCategory}>
        <HeaderProductFilter>
          <IconBox data-icon="-" size="20" color="#494d55" />
          <span>ترتیب نمایش</span>
        </HeaderProductFilter>
        <HeaderProductCount>205 کالا</HeaderProductCount>
      </HeaderFilterProducts>
    </HeaderCategoryContainer>
  )
}

export default HeaderCategoryArea
