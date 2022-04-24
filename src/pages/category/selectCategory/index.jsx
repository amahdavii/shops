import MobileCategoryLayout from '../../../layout/mobile/categoryLayout'
import CategoryCard from '../../../components/category/ctegoryCard'
import * as constant from '../../../constants'
import { MobileCategoryItem } from './style'

var categoryList = [
  {
    title: constant.strings.mainCategoryPage.milks,
    image: constant.Images.mainCategoryPage.tanagholat,
  },
  {
    title: constant.strings.mainCategoryPage.drinks,
    image: constant.Images.mainCategoryPage.tanagholat,
  },
  {
    title: constant.strings.mainCategoryPage.breakFast,
    image: constant.Images.mainCategoryPage.tanagholat,
  },
  {
    title: constant.strings.mainCategoryPage.snacks,
    image: constant.Images.mainCategoryPage.tanagholat,
  },
  {
    title: constant.strings.mainCategoryPage.protein,
    image: constant.Images.mainCategoryPage.tanagholat,
  },
  {
    title: constant.strings.mainCategoryPage.vegetables,
    image: constant.Images.mainCategoryPage.tanagholat,
  },
  {
    title: constant.strings.mainCategoryPage.mainProduct,
    image: constant.Images.mainCategoryPage.tanagholat,
  },
  {
    title: constant.strings.mainCategoryPage.milks,
    image: constant.Images.mainCategoryPage.tanagholat,
  },
  {
    title: constant.strings.mainCategoryPage.drinks,
    image: constant.Images.mainCategoryPage.tanagholat,
  },
  {
    title: constant.strings.mainCategoryPage.breakFast,
    image: constant.Images.mainCategoryPage.tanagholat,
  },
]

const SelectCategory = () => {
  const renderCategory = () =>
    categoryList.map((item, index) => (
      <MobileCategoryItem>
        <CategoryCard key={index} image={item.image} title={item.title} />
      </MobileCategoryItem>
    ))

  return (
    <MobileCategoryLayout pageTitle="دسته بندی ها">
      <div className="flex flex-row flex-wrap justify-between">
        {renderCategory()}
      </div>
    </MobileCategoryLayout>
  )
}

export default SelectCategory
