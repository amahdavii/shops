import ProductMobileLayout from '../../layout/mobile/productLayout'
import {
  ProductDetailContainer,
  ProductDetailItem,
  ProductSliderArea,
  ProductDetailDescArea,
  ProductDetailDesc,
  ProducDetailItem,
  SimilarProduct,
} from '../../styles/productDetail'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import Image from 'next/image'

import BerenjProduct from '../../../public/assets/image/brnj.png'
import ProductsCategory from '../../components/category/mobile/productsCategory'

const ProductDetailPage = () => {
  return (
    <ProductMobileLayout>
      <ProductDetailContainer>
        <ProductSliderArea>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <ProductDetailItem>
                <Image
                  src={BerenjProduct}
                  width={300}
                  height={250}
                  alt="product image"
                />
              </ProductDetailItem>
            </SwiperSlide>
            <SwiperSlide>
              <ProductDetailItem>
                <Image
                  src={BerenjProduct}
                  width={300}
                  height={250}
                  alt="product image"
                />
              </ProductDetailItem>
            </SwiperSlide>
            <SwiperSlide>
              <ProductDetailItem>
                <Image
                  src={BerenjProduct}
                  width={300}
                  height={250}
                  alt="product image"
                />
              </ProductDetailItem>
            </SwiperSlide>
            <SwiperSlide>
              <ProductDetailItem>
                <Image
                  src={BerenjProduct}
                  width={300}
                  height={250}
                  alt="product image"
                />
              </ProductDetailItem>
            </SwiperSlide>
          </Swiper>
        </ProductSliderArea>

        <ProductDetailDescArea>
          <h3>ماست موسیر پاک 2 کیلوگرم</h3>
          <ProductDetailDesc>
            <ProducDetailItem>
              برند: <span>پگاه</span>
            </ProducDetailItem>
            <ProducDetailItem>
              دسته بندی: <span>لبنیات</span>
            </ProducDetailItem>
            <ProducDetailItem>
              نوع: <span>موسیر</span>
            </ProducDetailItem>
            <ProducDetailItem>
              فروشگاه: <span>وال مارکت</span>
            </ProducDetailItem>
          </ProductDetailDesc>
        </ProductDetailDescArea>
      </ProductDetailContainer>
      <SimilarProduct>
        <ProductsCategory CategoryName="لبنیات" />
      </SimilarProduct>
    </ProductMobileLayout>
  )
}

export default ProductDetailPage
