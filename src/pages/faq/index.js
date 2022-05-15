import MainLayout from 'src/layout/mainLayout'
import DropBox from '../../components/common/dropBox'
import { FaqHeader, FaqSection, FaqHeaderDesc } from 'src/styles/faq'
import { ColumnContainer, BoldSpan } from 'src/styles/sharedStyle'
import * as constants from 'src/constants'
import CategoryLayout from '../../layout/mobile/categoryLayout'
import { EditProfileContainer } from '../../styles/profile/edit'


const FAQ = () => {
  return (
    <>
      <MainLayout>
        <FaqHeader imgUrl={constants.Images.faq}>
          <BoldSpan margin="100px 0 0 0" siz="200">
            پاسخ به پرسش های متداول
          </BoldSpan>
        </FaqHeader>
        <ColumnContainer>
          <FaqSection>
            <DropBox
              title={
                'چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟'
              }
              des={
                'چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟'
              }
            />
            <DropBox
              title={
                'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
              }
              des={
                'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
              }
            />
            <DropBox
              title={'چطور میتوانم سفارشم را لغو کنم ؟'}
              des={
                '.شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از ارسال آن منصرف شدید را لغو نمایید. میتوانید برای مشاهده روند لغو سفارش به توضیحات تکمیلی مراجعه کنید'
              }
            />
            <DropBox
              title={'چطور میتوانم امتیاز‌ بگیریم؟'}
              des={'چطور میتوانم امتیاز‌ بگیریم؟'}
            />
            <DropBox
              title={'چطور میتوانم سفارشم را پیگیری کنم ؟'}
              des={'چطور میتوانم سفارشم را پیگیری کنم ؟'}
            />
            <DropBox
              title={
                'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
              }
              des={
                'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
              }
            />
            <DropBox
              title={
                'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
              }
              des={
                'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
              }
            />
          </FaqSection>
        </ColumnContainer>
      </MainLayout>

      <CategoryLayout pageTitle="سوالات متداول" hideNav fullPage>
        <EditProfileContainer>
          <FaqHeader imgUrl={constants.Images.faq}>
            <FaqHeaderDesc>پاسخ به پرسش های متداول</FaqHeaderDesc>
          </FaqHeader>
          <ColumnContainer>
            <FaqSection>
              <DropBox
                title={
                  'چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟'
                }
                des={
                  'چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟'
                }
              />
              <DropBox
                title={
                  'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
                }
                des={
                  'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
                }
              />
              <DropBox
                title={'چطور میتوانم سفارشم را لغو کنم ؟'}
                des={
                  '.شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از ارسال آن منصرف شدید را لغو نمایید. میتوانید برای مشاهده روند لغو سفارش به توضیحات تکمیلی مراجعه کنید'
                }
              />
              <DropBox
                title={'چطور میتوانم امتیاز‌ بگیریم؟'}
                des={'چطور میتوانم امتیاز‌ بگیریم؟'}
              />
              <DropBox
                title={'چطور میتوانم سفارشم را پیگیری کنم ؟'}
                des={'چطور میتوانم سفارشم را پیگیری کنم ؟'}
              />
              <DropBox
                title={
                  'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
                }
                des={
                  'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
                }
              />
              <DropBox
                title={
                  'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
                }
                des={
                  'شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟'
                }
              />
            </FaqSection>
          </ColumnContainer>
        </EditProfileContainer>
      </CategoryLayout>
    </>
  )
}

export default FAQ
