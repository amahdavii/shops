import ProfileLayout from '../../../layout/profileLayout'
import {
  ProfileTitle,
  OrderDetailTitleContainer,
  BackToOrderList,
  OrderFactor,
  WalletTable,
  WalletThead,
  WalletTabelRow,
  WalletTabelHead,
  WalletTabelData,
  WalletFactorRow,
  WalletFactorItem,
  AmountPaidArea,
  AmountPaidItem,
  WalletPaymentArea,
  OrderDetailSection,
  OrderDetailArea,
  OrderDetailItemTitle,
  OrderDetailItem,
} from 'src/styles/profile/orderDetail'

import MobileCategoryLayout from '../../../layout/mobile/categoryLayout'

const OrderDetail = () => {
  return (
    <>
      <ProfileLayout>
        <OrderDetailTitleContainer>
          <ProfileTitle>جزئیات سفارش</ProfileTitle>
          <BackToOrderList>بازگشت به لیست سفارش ها</BackToOrderList>
        </OrderDetailTitleContainer>

        <WalletTable>
          <WalletThead>
            <WalletTabelRow>
              <WalletTabelHead>ردیف</WalletTabelHead>
              <WalletTabelHead>نام کالا</WalletTabelHead>
              <WalletTabelHead>کد کالا</WalletTabelHead>
              <WalletTabelHead>تعداد</WalletTabelHead>
              <WalletTabelHead>قیمت(تومان)</WalletTabelHead>
              <WalletTabelHead>تخفیف(تومان)</WalletTabelHead>
              <WalletTabelHead>مجموع(تومان)</WalletTabelHead>
            </WalletTabelRow>
          </WalletThead>

          <tbody>
            <WalletTabelRow>
              <WalletTabelData>1</WalletTabelData>
              <WalletTabelData>بادام هندی مزمز ۳۰ گرمی</WalletTabelData>
              <WalletTabelData>ALN-10006438</WalletTabelData>
              <WalletTabelData>1</WalletTabelData>
              <WalletTabelData>۱۸,۰۰۰</WalletTabelData>
              <WalletTabelData>0</WalletTabelData>
              <WalletTabelData>۱۸,۰۰۰</WalletTabelData>
            </WalletTabelRow>

            <WalletTabelRow>
              <WalletTabelData>1</WalletTabelData>
              <WalletTabelData>بادام هندی مزمز ۳۰ گرمی</WalletTabelData>
              <WalletTabelData>ALN-10006438</WalletTabelData>
              <WalletTabelData>1</WalletTabelData>
              <WalletTabelData>۱۸,۰۰۰</WalletTabelData>
              <WalletTabelData>0</WalletTabelData>
              <WalletTabelData>۱۸,۰۰۰</WalletTabelData>
            </WalletTabelRow>

            <WalletTabelRow>
              <WalletTabelData>1</WalletTabelData>
              <WalletTabelData>بادام هندی مزمز ۳۰ گرمی</WalletTabelData>
              <WalletTabelData>ALN-10006438</WalletTabelData>
              <WalletTabelData>1</WalletTabelData>
              <WalletTabelData>۱۸,۰۰۰</WalletTabelData>
              <WalletTabelData>0</WalletTabelData>
              <WalletTabelData>۱۸,۰۰۰</WalletTabelData>
            </WalletTabelRow>

            <WalletTabelRow>
              <WalletTabelData>1</WalletTabelData>
              <WalletTabelData>بادام هندی مزمز ۳۰ گرمی</WalletTabelData>
              <WalletTabelData>ALN-10006438</WalletTabelData>
              <WalletTabelData>1</WalletTabelData>
              <WalletTabelData>۱۸,۰۰۰</WalletTabelData>
              <WalletTabelData>0</WalletTabelData>
              <WalletTabelData>۱۸,۰۰۰</WalletTabelData>
            </WalletTabelRow>

            <WalletTabelRow>
              <WalletTabelData>1</WalletTabelData>
              <WalletTabelData>بادام هندی مزمز ۳۰ گرمی</WalletTabelData>
              <WalletTabelData>ALN-10006438</WalletTabelData>
              <WalletTabelData>1</WalletTabelData>
              <WalletTabelData>۱۸,۰۰۰</WalletTabelData>
              <WalletTabelData>0</WalletTabelData>
              <WalletTabelData>۱۸,۰۰۰</WalletTabelData>
            </WalletTabelRow>
          </tbody>
        </WalletTable>
        <WalletPaymentArea>
          <WalletFactorRow>
            <WalletFactorItem>شماره سفارش</WalletFactorItem>
            <WalletFactorItem>34235235</WalletFactorItem>
          </WalletFactorRow>

          <WalletFactorRow>
            <WalletFactorItem>تعداد اقلام</WalletFactorItem>
            <WalletFactorItem>10 عدد</WalletFactorItem>
          </WalletFactorRow>

          <WalletFactorRow>
            <WalletFactorItem>مبلغ کل سفارش</WalletFactorItem>
            <WalletFactorItem>272,782 تومان</WalletFactorItem>
          </WalletFactorRow>

          <WalletFactorRow>
            <WalletFactorItem>هزینه ارسال</WalletFactorItem>
            <WalletFactorItem>رایگان</WalletFactorItem>
          </WalletFactorRow>

          <WalletFactorRow>
            <WalletFactorItem>تخفیف محصول</WalletFactorItem>
            <WalletFactorItem>2,982 تومان</WalletFactorItem>
          </WalletFactorRow>

          <AmountPaidArea>
            <AmountPaidItem>مبلغ پرداخت شده</AmountPaidItem>
            <AmountPaidItem>272,982 تومان</AmountPaidItem>
          </AmountPaidArea>
        </WalletPaymentArea>
      </ProfileLayout>

      <MobileCategoryLayout pageTitle="جزئیات سفارش" fullPage hideNav>
        <OrderDetailSection>
          <OrderDetailArea>
            <OrderDetailItemTitle>
              <span>بادام هندی مزمز ۳۰ گرمی</span>
              <span>1</span>
            </OrderDetailItemTitle>

            <OrderDetailItem>
              <span>کدکالا:</span>
              <span>ALN-10006438</span>
            </OrderDetailItem>
            <OrderDetailItem>
              <span>قیمت:</span>
              <span>24،900 تومان</span>
            </OrderDetailItem>
            <OrderDetailItem>
              <span>تخفیف:</span>
              <span>0</span>
            </OrderDetailItem>
          </OrderDetailArea>
          <OrderDetailArea>
            <OrderDetailItemTitle>
              <span>استروپ وافل عسلی نادری ۴۰ گرمی</span>
              <span>5</span>
            </OrderDetailItemTitle>

            <OrderDetailItem>
              <span>کدکالا:</span>
              <span>ALN-10006438</span>
            </OrderDetailItem>
            <OrderDetailItem>
              <span>قیمت:</span>
              <span>24،900 تومان</span>
            </OrderDetailItem>
            <OrderDetailItem>
              <span>تخفیف:</span>
              <span>0</span>
            </OrderDetailItem>
          </OrderDetailArea>
        </OrderDetailSection>
      </MobileCategoryLayout>
    </>
  )
}

export default OrderDetail
