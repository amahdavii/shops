import { useState } from 'react'
import Image from 'next/image'
import {
  OrderTrackingContainer,
  OrderLogoArea,
  OrderTrackingStatusArea,
  OrderTrackingStatusTitle,
  OrderTrackingDetail,
  OrderTrackingItem,
  OrderMoneyUnit,
  OrderTrackingBtn,
} from '../../styles/orderTracking'
import ShopsLogo from '../../../public/assets/logo/alinshops-logo.png'
import SuccessIcon from '../../../public/assets/image/check.gif'

import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

const OrderTrackingPage = () => {
  const [open, setOpen] = useState(true)

  return (
    <>
      {' '}
      <OrderTrackingContainer>
        <OrderLogoArea>
          <Image src={ShopsLogo} width="140" height="35" alt="Alinshops logo" />
        </OrderLogoArea>
        <OrderTrackingStatusArea>
          <Image
            src={SuccessIcon}
            width="120"
            height="120"
            alt="Alinshops logo"
          />
          <OrderTrackingStatusTitle>
            پرداخت باموفقیت انجام شد.
          </OrderTrackingStatusTitle>
          <OrderTrackingDetail>
            <OrderTrackingItem>
              <div>مبلغ پرداختی</div>
              <div>
                ۳۰۰،۰۰۰ <span>تومان</span>
              </div>
            </OrderTrackingItem>
            <OrderTrackingItem>
              <div>شیوه پرداخت</div>
              <div>درگاه بانکی</div>
            </OrderTrackingItem>
          </OrderTrackingDetail>
          <OrderTrackingBtn>پیگیری سفارش</OrderTrackingBtn>
        </OrderTrackingStatusArea>
      <BottomSheet open={open}>My awesome content here</BottomSheet>
      </OrderTrackingContainer>
    </>
  )
}

export default OrderTrackingPage
