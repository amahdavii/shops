import {
  CatPageContainer,
  ProductCatBox,
  ProductCatBoxHeader,
  ProductCatBoxHeaderImage,
  ProductCatBoxHeaderSelected,
  ProductCatBoxHeaderSpan,
  SecondRow,
  ProductBoxWidget,
} from 'src/styles/category/store'
import ProductCard from 'src/components/common/productCard'
import MainLayout from 'src/layout/mainLayout'
import SubMenuCategory from '../../../components/category/subMenuCategory'
import TitleCategory from 'src/components/category/TitleCategory'
import GridCategory from 'src/components/category/GridCategory'
import * as constants from 'src/constants'
import Image from 'next/image'

import MobileCategoryLayout from '../../../layout/mobile/categoryLayout'

var productList = [
  {
    title: constants.strings.mainCategoryPage.products.sos,
    image: constants.Images.mainCategoryPage.sos,
  },
  {
    title: constants.strings.mainCategoryPage.products.brnj,
    image: constants.Images.mainCategoryPage.brnj,
  },
  {
    title: constants.strings.mainCategoryPage.products.dogh,
    image: constants.Images.mainCategoryPage.dogh,
  },
  {
    title: constants.strings.mainCategoryPage.products.milk,
    image: constants.Images.mainCategoryPage.shir,
  },

  {
    title: constants.strings.mainCategoryPage.products.zeyton,
    image: constants.Images.mainCategoryPage.protein,
  },
  {
    title: constants.strings.mainCategoryPage.products.sos,
    image: constants.Images.mainCategoryPage.sos,
  },
  {
    title: constants.strings.mainCategoryPage.products.brnj,
    image: constants.Images.mainCategoryPage.brnj,
  },
  {
    title: constants.strings.mainCategoryPage.products.dogh,
    image: constants.Images.mainCategoryPage.dogh,
  },
  {
    title: constants.strings.mainCategoryPage.products.milk,
    image: constants.Images.mainCategoryPage.shir,
  },

  {
    title: constants.strings.mainCategoryPage.products.zeyton,
    image: constants.Images.mainCategoryPage.protein,
  },
]

const SubCategoryPage = () => {
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
          title={[
            constants.strings.mainCategoryPage.milks,
            constants.strings.mainCategoryPage.shir,
          ]}
          bg={'#fff'}
        />

        <CatPageContainer>
          <SubMenuCategory />
          <SecondRow>
            <ProductCatBox>
              <ProductCatBoxHeader>
                <ProductCatBoxHeaderImage>
                  <Image src={constants.Icons.filter} width={24} height={24} />
                </ProductCatBoxHeaderImage>
                <ProductCatBoxHeaderSpan>
                  ???????? ???????? ???? ???????? :{' '}
                </ProductCatBoxHeaderSpan>
                <ProductCatBoxHeaderSelected>
                  ???? ?????? ??????????????
                </ProductCatBoxHeaderSelected>
                <ProductCatBoxHeaderSpan>???? ???????? ????????</ProductCatBoxHeaderSpan>
                <ProductCatBoxHeaderSpan>????????????????</ProductCatBoxHeaderSpan>
              </ProductCatBoxHeader>
              {/* {!!data 
                        ? */}
              <GridCategory data={[1, 2, 3]} />
              {/* :null */}
              {/* }    */}
            </ProductCatBox>
          </SecondRow>
        </CatPageContainer>
      </MainLayout>

      <MobileCategoryLayout pageTitle="????????" subCategory subFilter>
        <div className="flex flex-row flex-wrap justify-between">
          {renderProduct()}
        </div>
      </MobileCategoryLayout>
    </>
  )
}
export default SubCategoryPage
