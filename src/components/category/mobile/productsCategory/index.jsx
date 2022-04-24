import {
  ProductsCategorySection,
  ProductsCategoryTitleArea,
  ProductsCategoryTitle,
  ProductsMoreIcon,
  ProductBoxWidget,
} from './style'

import { IconBox, BetweenRow } from '../../../../styles/sharedStyle'
import * as constant from 'src/constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from 'src/components/common/productCard'
import SwiperComponent from 'src/components/common/swiperComponent'

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

const ProductsCategory = ({ CategoryName, children }) => {
  const renderSlider = () =>
    productList.map((item, index) => (
      <SwiperSlide key={index}>
        <ProductBoxWidget>
          <ProductCard image={item.image} title={item.title} />
        </ProductBoxWidget>
      </SwiperSlide>
    ))

  return (
    <ProductsCategorySection>
      <ProductsCategoryTitleArea>
        <ProductsCategoryTitle>{CategoryName}</ProductsCategoryTitle>

        <BetweenRow>
          <ProductsMoreIcon>
            {constant.strings.Common.showMore}
          </ProductsMoreIcon>
          <IconBox size={14} data-icon="J" color={constant.Colors.orangeDark} />
        </BetweenRow>
      </ProductsCategoryTitleArea>
      <SwiperComponent
        name={'category items'}
        space={10}
        width={'100%'}
        breakpoints={{
          300: {
            slidesPerView: 2.25,
          },
          450: {
            slidesPerView: 2.25,
          },
          600: {
            slidesPerView: 2.25,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {renderSlider()}
      </SwiperComponent>{' '}
    </ProductsCategorySection>
  )
}

export default ProductsCategory
