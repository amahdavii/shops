import ProfileLayout from '../../../layout/profileLayout'
import OrderListItem from '../../../components/orderListItem'
import { ProfileTitle } from 'src/styles/profile/ordersList'
import MobileCategoryLayout from '../../../layout/mobile/categoryLayout'
import { EditProfileContainer } from '../../../styles/profile/edit'
import {
  OrderStatusNav,
  OrderStatusItem,
  OrderShopBadge,
  OrderDetailArea,
  OrderDescContainer,
  OrderDescDetail,
  OrderTotalPrice,
  OrderDetailBtn,
  OrderTrackingBtn,
  OrderBtnArea,
} from '../../../styles/profile/ordersList'
import Image from 'next/image'
import DailyBadge from '../../../../public/assets/image/daily-badge.png'
import { IconBox } from '../../../styles/sharedStyle'

const ProfileOrdersList = ({ pageTitle }) => {
  return (
    <>
      <ProfileLayout>
        <ProfileTitle>لیست سفارش ها</ProfileTitle>
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
      </ProfileLayout>

      <MobileCategoryLayout
        pageTitle="لیست سفارش ها"
        hideNav
        fullHeight
        fullPage
      >
        <EditProfileContainer>
          <OrderStatusNav>
            <OrderStatusItem>درحال انجام</OrderStatusItem>
            <OrderStatusItem active>انجام شده</OrderStatusItem>
          </OrderStatusNav>
          <OrderDetailArea>
            <OrderDescContainer>
              <OrderShopBadge>
                <Image src={DailyBadge} alt="shop badge" />
              </OrderShopBadge>
              <OrderDescDetail>
                <h2>فروشگاه دیلی مارکت</h2>
                <ul>
                  <li>
                    <IconBox size={17} data-icon="9" color="#dcdfe1" />
                    شنبه ۳۰ بهمن
                  </li>
                  <li>
                    <IconBox size={17} data-icon="]" color="#dcdfe1" />
                    سعادت آباد، خیابان صرافهای جنوبی
                  </li>
                  <li>
                    <IconBox size={17} data-icon="#" color="#2bc430" />
                    تحویل داده شده
                  </li>
                </ul>
              </OrderDescDetail>
            </OrderDescContainer>
            <OrderTotalPrice>
              <span>۳۹۶,۰۰۰</span>
              تومان
            </OrderTotalPrice>

            <OrderBtnArea>
              <OrderDetailBtn>مشاهده جزئیات</OrderDetailBtn>
              <OrderDetailBtn reorder>سفارش مجدد</OrderDetailBtn>
            </OrderBtnArea>
          </OrderDetailArea>

          <OrderDetailArea>
            <OrderDescContainer>
              <OrderShopBadge>
                <Image src={DailyBadge} alt="shop badge" />
              </OrderShopBadge>
              <OrderDescDetail>
                <h2>فروشگاه دیلی مارکت</h2>
                <ul>
                  <li>
                    <IconBox size={17} data-icon="9" color="#dcdfe1" />
                    شنبه ۳۰ بهمن
                  </li>
                  <li>
                    <IconBox size={17} data-icon="]" color="#dcdfe1" />
                    سعادت آباد، خیابان صرافهای جنوبی
                  </li>
                  <li>
                    <IconBox size={17} data-icon="#" color="#2bc430" />
                    تحویل داده شده
                  </li>
                </ul>
              </OrderDescDetail>
            </OrderDescContainer>
            <OrderTotalPrice>
              <span>۳۹۶,۰۰۰</span>
              تومان
            </OrderTotalPrice>

            <OrderBtnArea>
              <OrderDetailBtn>مشاهده جزئیات</OrderDetailBtn>
              <OrderDetailBtn reorder>سفارش مجدد</OrderDetailBtn>
            </OrderBtnArea>
          </OrderDetailArea>

          <OrderDetailArea>
            <OrderDescContainer>
              <OrderShopBadge>
                <Image src={DailyBadge} alt="shop badge" />
              </OrderShopBadge>
              <OrderDescDetail>
                <h2>فروشگاه دیلی مارکت</h2>
                <ul>
                  <li>
                    <IconBox size={17} data-icon="9" color="#dcdfe1" />
                    شنبه ۳۰ بهمن
                  </li>
                  <li>
                    <IconBox size={17} data-icon="]" color="#dcdfe1" />
                    سعادت آباد، خیابان صرافهای جنوبی
                  </li>
                  <li>
                    <IconBox size={17} data-icon="{" color="#ed7203" />
                    درحال انجام
                  </li>
                </ul>
              </OrderDescDetail>
            </OrderDescContainer>
            <OrderTotalPrice>
              <span>۳۹۶,۰۰۰</span>
              تومان
            </OrderTotalPrice>

            <OrderBtnArea>
              <OrderDetailBtn>مشاهده جزئیات</OrderDetailBtn>
              <OrderTrackingBtn>پیگیری سفارش</OrderTrackingBtn>
            </OrderBtnArea>
          </OrderDetailArea>
        </EditProfileContainer>
      </MobileCategoryLayout>
    </>
  )
}

export default ProfileOrdersList
