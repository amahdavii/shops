import MobileCategoryLayout from '../../../layout/mobile/categoryLayout'
import { ProductBoxWidget } from 'src/styles/category/store'
import ProductCard from 'src/components/common/productCard'
import * as constants from 'src/constants'

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

const MysteriousPage = () => {
  const renderProduct = () =>
    productList.map((item, index) => (
      <ProductBoxWidget key={index}>
        <ProductCard image={item.image} title={item.title} />
      </ProductBoxWidget>
    ))
  return (
    <MobileCategoryLayout
      pageTitle="پیشنهاد های اسرار آمیز"
      mysterious
      subCategory
    >
      <div className="flex flex-row flex-wrap justify-between">
        {renderProduct()}
      </div>
    </MobileCategoryLayout>
  )
}

export default MysteriousPage
