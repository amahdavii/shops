import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperCore, { Navigation } from 'swiper'
import {
  MoreBox,
  MoreIcon,
  ProductBoxWidget,
  PurpuleBox,
  WidgetBox,
  WidgetConatiner,
  WidgetTitle,
  ProductWidgetTopArea,
} from './style'
import * as constant from 'src/constants'
import Image from 'next/image'
import { useState } from 'react'
import SwiperComponent from 'src/components/common/swiperComponent'
import ProductCard from 'src/components/common/productCard'
import { BetweenRow, IconBox } from 'src/styles/sharedStyle'
import WhiteTitleBg from '../../../../public/assets/image/widget-white.svg'

SwiperCore.use([Navigation])

var offerList = [
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

const WidgetOffer = () => {
  const renderSlider = () =>
    offerList.map((item, index) => (
      <SwiperSlide key={index}>
        <ProductBoxWidget>
          <ProductCard image={item.image} title={item.title} />
        </ProductBoxWidget>
      </SwiperSlide>
    ))

  return (
    <WidgetConatiner>
      <WidgetTitle
        imgUrl={constant.Images.mainCategoryPage.widget}
        imgUrlMobile={WhiteTitleBg}
      >
        <span>{constant.strings.mainCategoryPage.bestOffer}</span>
      </WidgetTitle>
      <PurpuleBox />
      <WidgetBox imgUrl={constant.Images.mainCategoryPage.bgWidget}>
        <MoreBox>
          <ProductWidgetTopArea>
            <BetweenRow>
              <MoreIcon>{constant.strings.Common.showMore}</MoreIcon>
              <IconBox
                size={24}
                data-icon="J"
                color={constant.Colors.orangeDark}
              />
            </BetweenRow>
          </ProductWidgetTopArea>
        </MoreBox>
        <SwiperComponent
          space={10}
          width={'95%'}
          name={'offer'}
          breakpoints={{
            300: {
              slidesPerView: 2.25,
            },
            450: {
              slidesPerView: 2.3,
            },
            600: {
              slidesPerView: 2.3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5.3,
            },
          }}
        >
          {renderSlider()}
        </SwiperComponent>
      </WidgetBox>
    </WidgetConatiner>
  )
}

export default WidgetOffer
