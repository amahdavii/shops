import * as Images from '../../constants/images'

import {
  OrderItemWrap,
  WrapBtn,
  DetailBtn,
  ReorderBtn,
  OrderPriceWrap,
  OrderPrice,
  OrderRightSide,
  OrderLeftSide,
  OrderShopDetailArea,
  OrderShopDetail,
  OrderShopTitle,
  OrderShopDetailItem,
} from './style'

import Image from 'next/image'

const OrderListItem = () => {
  return (
    <OrderItemWrap>
      <OrderRightSide>
        <Image
          src={Images.Images.dailyBadge}
          width="120"
          height="40"
          alt="order shop image"
        />
        <OrderShopDetailArea>
          <OrderShopTitle>فروشگاه دیلی مارکت</OrderShopTitle>
          <OrderShopDetail>
            <OrderShopDetailItem>سعادت آباد</OrderShopDetailItem>
            <OrderShopDetailItem>شنبه ۳۰ بهمن</OrderShopDetailItem>
            <OrderShopDetailItem>تحویل داده شده</OrderShopDetailItem>
          </OrderShopDetail>
        </OrderShopDetailArea>
      </OrderRightSide>
      <OrderLeftSide>
        <OrderPriceWrap>
          <OrderPrice>396,000</OrderPrice>
          تومان
        </OrderPriceWrap>
        <WrapBtn>
          <DetailBtn>مشاهده جزییات</DetailBtn>
          <ReorderBtn>سفارش مجدد</ReorderBtn>
        </WrapBtn>
      </OrderLeftSide>
    </OrderItemWrap>
  )
}

export default OrderListItem
