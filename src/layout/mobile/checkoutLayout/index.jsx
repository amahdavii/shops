import { useState } from 'react'

import {
  MainCheckoutLayout,
  MobileCheckoutHeader,
  CheckoutHeaderTitleArea,
  CheckoutHeaderTitle,
  CheckoutHeaderTotalProduct,
  CheckoutProductItems,
  CheckoutTotalPriceArea,
  CheckoutShippingDesc,
  CheckoutTotalPrice,
  AmountPayable,
  AmountPayablePrice,
  PaymentButton,
} from './style'

import { IconBox, BetweenRow } from '../../../styles/sharedStyle'
import { useRouter } from 'next/router'

import ShippingIcon from '../../../../public/assets/icon/delivery-truck.svg'
import Image from 'next/image'

const CheckoutMobileLayout = ({ totalPrice, children }) => {
  const router = useRouter()
  const [minPrice, setMinPrice] = useState(50)

  return (
    <MainCheckoutLayout>
      <MobileCheckoutHeader>
        <CheckoutHeaderTitleArea>
          <IconBox
            data-icon="z"
            size="24"
            color="#494f55"
            onClick={() => router.back()}
          />
          <CheckoutHeaderTitle>سبد خرید من</CheckoutHeaderTitle>
          <CheckoutHeaderTotalProduct>(5 کالا)</CheckoutHeaderTotalProduct>
        </CheckoutHeaderTitleArea>
        <IconBox
          data-icon="v"
          size="24"
          color="#494f55"
          onClick={() => router.back()}
        />
      </MobileCheckoutHeader>
      <CheckoutProductItems>{children}</CheckoutProductItems>
      <CheckoutTotalPriceArea totalPrice={totalPrice}>
        {minPrice >= 50 ? (
          <CheckoutShippingDesc>
            <span>
              <Image src={ShippingIcon} width={40} />
            </span>
            هزینه ارسال رایگان خواهد بود
          </CheckoutShippingDesc>
        ) : (
          <CheckoutShippingDesc>
            حداقل مبلغ ثبت سفارش ۵۰.۰۰۰ تومان است{' '}
          </CheckoutShippingDesc>
        )}
        <CheckoutTotalPrice>
          <AmountPayable>
            <span>مبلغ قابل پرداخت</span>
            <AmountPayablePrice>
              300.0000
              <span>تومان</span>
            </AmountPayablePrice>
          </AmountPayable>
          {minPrice >= 50 ? (
            <PaymentButton>تکمیل سفارش</PaymentButton>
          ) : (
            <PaymentButton disabled>تکمیل سفارش</PaymentButton>
          )}
        </CheckoutTotalPrice>
      </CheckoutTotalPriceArea>
    </MainCheckoutLayout>
  )
}

export default CheckoutMobileLayout
