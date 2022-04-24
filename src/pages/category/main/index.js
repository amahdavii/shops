import MainLayout from 'src/layout/mainLayout'
import * as constant from '../../../constants'
import SwiperCatgory from '../../../components/category/swiperCatgory'
import WidgetMore from '../../../components/category/widgetMore'
import WidgetOffer from '../../../components/category/widgetOffer'

import StoreMobileLayout from '../../../layout/mobile/storeMobileLayout'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper'

import Image from 'next/image'
import Labniat from '../../../../public/assets/image/labaniat.png'

import {
  StoreCategoryItems,
  StoreCategoryItem,
  StoreCategoryDetail,
} from '../../../styles/category/main'

import MobileStoreBanner from '../../../../public/assets/image/mobile-store-banner.png'
import MobileMidLevel from '../../../../public/assets/image/mid-store-banner.png'

import ProductsCategory from '../../../components/category/mobile/productsCategory'

const MainCategory = () => {
  return (
    <>
      <MainLayout>
        <Image src={constant.Images.mainCategoryPage.firstBaner} />
        <SwiperCatgory />
        <WidgetOffer />
        <Image src={constant.Images.mainCategoryPage.secondBaner} />
        <WidgetMore name={constant.strings.mainCategoryPage.milks} />
        <WidgetMore name={constant.strings.mainCategoryPage.drinks} />
        <WidgetMore name={constant.strings.mainCategoryPage.breakFast} />
        <WidgetMore name={constant.strings.mainCategoryPage.snacks} />
      </MainLayout>

      <StoreMobileLayout>
        <Image src={MobileStoreBanner} />
        <SwiperCatgory />
        <WidgetOffer />
        <Image src={MobileMidLevel} />

        <ProductsCategory CategoryName="لبنیات" />
        <ProductsCategory CategoryName="نوشیدنی" />
        <ProductsCategory CategoryName="صبحانه" />
        <ProductsCategory CategoryName="تنقلات" />
      </StoreMobileLayout>
    </>
  )
}

export default MainCategory
