import ProductMobileLayout from '../../layout/mobile/productLayout'
import {
  ProductDetailContainer,
  ProductDetailItem,
  ProductSliderArea,
  ProductDetailDescArea,
  ProductDetailDesc,
  ProducDetailItem,
  SimilarProduct,
  ProductPriceContainer,
  ProductPriceDetail,
  ProductDiscountArea,
  ProductPriceArea,
  ProductMainPriceArea,
} from '../../styles/productDetail'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import Image from 'next/image'

import BerenjProduct from '../../../public/assets/image/brnj.png'
import ProductsCategory from '../../components/category/mobile/productsCategory'

import { IconBox } from 'src/styles/sharedStyle'
import { AddToCartTitle } from '../../components/common/ProductView/style'
import { AddToCartBox } from '../../components/common/addToCart/style'
import {
  DiscountBox,
  DiscountPrice,
  MainPrice,
} from '../../components/common/productCard/style'

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

        <ProductPriceContainer>
          <ProductPriceArea>
            <ProductDiscountArea>
              <DiscountPrice>52000</DiscountPrice>
              <DiscountBox>10%</DiscountBox>
            </ProductDiscountArea>
            <ProductMainPriceArea>
              <MainPrice>27،000</MainPrice>
              تومان
            </ProductMainPriceArea>
          </ProductPriceArea>
          <ProductPriceDetail>
            <AddToCartBox
              color="#fff"
              background="#ed7203"
              radius={'30px'}
              padingX="15px"
              padingY="10px"
            >
              <IconBox className="icon-add_black_24dp" color="#fff" size="20" />
              <AddToCartTitle>افزودن به سبد خرید</AddToCartTitle>
            </AddToCartBox>
          </ProductPriceDetail>
        </ProductPriceContainer>
      </ProductDetailContainer>
      <SimilarProduct>
        <ProductsCategory CategoryName="لبنیات" />
      </SimilarProduct>
    </ProductMobileLayout>
  )
}

export default ProductDetailPage
