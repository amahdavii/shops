import { useState } from 'react'
import MainLayout from 'src/layout/mainLayout'
import { RowContainer, ColumnContainer } from 'src/styles/sharedStyle'
import Factor from '../../components/checkout/factor'
import Address from '../../components/checkout/address'

import {
  CheckoutBox,
  CheckoutContainer,
  CheckoutEmpty,
  UnavailableText,
  DeleteItemBtn,
} from '../../styles/checkout'

import CartCheckout from '../../components/checkout/cart'

import CheckoutMobileLayout from '../../layout/mobile/checkoutLayout'
import {
  CartItemContainer,
  DetailCartItem,
  TitleContainer,
} from '../../components/common/cartItem/style'
import * as constants from 'src/constants'
import Image from 'next/image'
import { CartCheckoutDiscountPrice } from '../../components/checkout/cart/style'
import {
  MainPrice,
  DiscountBox,
} from '../../components/common/productCard/style'
import ChangeCounCart from '../../components/common/changeCounCart'

import EmptyIcon from '../../../public/assets/image/cart.svg'

const CheckOut = () => {
  const ProductItems = [1, 2]

  const renderCartItem = () => (
    <CartItemContainer>
      <Image
        src={constants.Images.mainCategoryPage.brnj}
        width={80}
        height={80}
      />
      <TitleContainer>
        <span>برنج ایرانی هاشمی دودی گیلان طبیعت 2.5 کیلوگرمی</span>
        <DetailCartItem>
          <ColumnContainer>
            <RowContainer className="mb-1">
              <CartCheckoutDiscountPrice>12,700</CartCheckoutDiscountPrice>
              <DiscountBox>
                <span>10%</span>
              </DiscountBox>
            </RowContainer>
            <RowContainer>
              <MainPrice>12,000</MainPrice>
              <span>{constants.strings.Common.currency}</span>
            </RowContainer>
          </ColumnContainer>
          <ChangeCounCart width={'100px'} />
        </DetailCartItem>
      </TitleContainer>
    </CartItemContainer>
  )

  return (
    <>
      <MainLayout>
        <CheckoutContainer>
          <CheckoutBox>
            <Address />
            <CartCheckout />
          </CheckoutBox>
          <Factor />
        </CheckoutContainer>
      </MainLayout>

      <CheckoutMobileLayout
        totalPrice={ProductItems.length >= 1 ? true : false}
      >
        <CartItemContainer>
          <Image
            src={constants.Images.mainCategoryPage.brnj}
            width={80}
            height={80}
          />
          <TitleContainer>
            <span>برنج ایرانی هاشمی دودی گیلان طبیعت 2.5 کیلوگرمی</span>
            <DetailCartItem>
              <ColumnContainer>
                <RowContainer className="mb-1">
                  <UnavailableText>اتمام موجودی</UnavailableText>
                </RowContainer>
              </ColumnContainer>
              <DeleteItemBtn>حذف از سبد</DeleteItemBtn>
            </DetailCartItem>
          </TitleContainer>
        </CartItemContainer>
        {ProductItems.length >= 1 ? (
          ProductItems.map(() => renderCartItem())
        ) : (
          <CheckoutEmpty>
            <Image src={EmptyIcon} />
            <span>سبد خرید شما خالی است</span>
          </CheckoutEmpty>
        )}
      </CheckoutMobileLayout>
    </>
  )
}

export default CheckOut
