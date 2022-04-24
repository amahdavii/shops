import * as constants from 'src/constants'
import { useState } from 'react'
import { FlexContainer, BetweenRow } from 'src/styles/sharedStyle'
import MainLayout from 'src/layout/mainLayout'
import MenuCategory from 'src/components/category/MenuCategory'
import TitleCategory from 'src/components/category/TitleCategory'
import GridCategory from 'src/components/category/GridCategory'
import ProductCard from 'src/components/common/productCard'
import * as constant from 'src/constants'

import {
  CatPageContainer,
  SecondRow,
  ProductCatBox,
  ProductCatBoxHeader,
  ProductCatBoxHeaderImage,
  ProductCatBoxHeaderSpan,
  ProductCatBoxHeaderSelected,
  ProductBoxWidget,
} from 'src/styles/category/store'
import Image from 'next/image'
import MobileCategoryLayout from '../../../layout/mobile/categoryLayout'
import MobileStoreBanner from '../../../../public/assets/image/mobile-store-banner.png'

var productList = [
  {
    title: constant.strings.mainCategoryPage.products.sos,
    image: constant.Images.mainCategoryPage.sos,
  },
  {
    title: constant.strings.mainCategoryPage.products.brnj,
    image: constant.Images.mainCategoryPage.brnj,
  },
  {
    title: constant.strings.mainCategoryPage.products.dogh,
    image: constant.Images.mainCategoryPage.dogh,
  },
  {
    title: constant.strings.mainCategoryPage.products.milk,
    image: constant.Images.mainCategoryPage.shir,
  },

  {
    title: constant.strings.mainCategoryPage.products.zeyton,
    image: constant.Images.mainCategoryPage.protein,
  },
  {
    title: constant.strings.mainCategoryPage.products.sos,
    image: constant.Images.mainCategoryPage.sos,
  },
  {
    title: constant.strings.mainCategoryPage.products.brnj,
    image: constant.Images.mainCategoryPage.brnj,
  },
  {
    title: constant.strings.mainCategoryPage.products.dogh,
    image: constant.Images.mainCategoryPage.dogh,
  },
  {
    title: constant.strings.mainCategoryPage.products.milk,
    image: constant.Images.mainCategoryPage.shir,
  },

  {
    title: constant.strings.mainCategoryPage.products.zeyton,
    image: constant.Images.mainCategoryPage.protein,
  },
]

const MainMoreCategoryPage = () => {
  const [page, setPage] = useState(1)

  const renderProduct = () =>
    productList.map((item, index) => (
      <ProductBoxWidget key={index}>
        <ProductCard image={item.image} title={item.title} />
      </ProductBoxWidget>
    ))

  return (
    <>
      <MainLayout>
        <TitleCategory
          title={[constants.strings.mainCategoryPage.milks]}
          bg={'#fff'}
        />
        <Image src={constants.Images.mainCategoryPage.storeCategory} />
        <CatPageContainer>
          <MenuCategory items={[1, 2, 3, 5]} />
          <SecondRow>
            <ProductCatBox>
              <GridCategory
                data={[1, 2, 3]}
                changePage={(val) => setPage(val)}
              />
            </ProductCatBox>
          </SecondRow>
        </CatPageContainer>
      </MainLayout>

      <MobileCategoryLayout pageTitle="محصولات دیلی مارکت سعادت آباد">
        <Image src={MobileStoreBanner} />

        <div className="flex flex-row flex-wrap justify-between mt-2">
          {renderProduct()}
        </div>
      </MobileCategoryLayout>
    </>
  )
}
export default MainMoreCategoryPage
