import Image from 'next/image'
import {
  ColumnContainer,
  BoldSpan,
  IconBox,
  TextChangable,
} from 'src/styles/sharedStyle'
import * as constants from 'src/constants'
import { TitleBottonHeader } from '../../styles/location'
import MainLayout from 'src/layout/mainLayout'
import {
  AboutUsItem,
  AboutUsSection,
  CenterAboutUs,
  CenterRowAboutUs,
  CircleNumber,
  CircleNumberBorder,
  ColumnPic,
  ImageBigContainer,
  ImageSmallContainer,
  ImageThinContainer,
  NumberRow,
  NumberRowColumn,
  RowAboutUs,
  AboutusTitle,
  AboutusDesc,
  TrustSection,
  TrustNamadArea,
} from 'src/styles/aboutUs'

import CategoryLayout from '../../layout/mobile/categoryLayout'
import { EditProfileContainer } from '../../styles/profile/edit'
import BussinessNamad from '../../../public/assets/image/bussiness.png'
import InternationalNamad from '../../../public/assets/image/internatinal.png'
import TejaratNamad from '../../../public/assets/image/tejaart.png'

const AboutUs = () => {
  return (
    <>
      <MainLayout>
        <AboutUsSection>
          <Image src={constants.Images.aboutUs} />
          <CenterAboutUs>
            <BoldSpan>داستان ما</BoldSpan>
            <TitleBottonHeader width={'80px'} />
            <p>
              {' '}
              فروشگاه اینترنتی آلین لند فعالیت خود را از سال 99 آغاز کرده است و
              با شروع فروش اینترنتی مجموعه کالای سوپرمارکتی متعهد شده است تا
              نیازهای مشتریان را در سراسر کشور برآورده کند. در آلین لند
              می‌توانید محصولات مورد نظرتان را اعم از خوردنی و آشامیدنی، آرایشی‌
              و بهداشتی، لوازم خانگی و برقی، کالای دیجیتال، مد و پوشاک و ... را
              ضمن اطمینان از اصالت کالا، با بهترین کیفیت و اقتصادی ترین قیمت، با
              یک کلیک سفارش داده و با دقتی بی نظیر در سریعترین زمان ممکن تحویل
              بگیریددر این راستا کسب اعتماد و رضایت مشتری اصلی است که بر روی آن
              تاکید داریم که این مهم جز با عرضه .محصولات سالم و مطمئن میسر
              نخواهد بود
            </p>
          </CenterAboutUs>
          <BoldSpan>ما که هستیم؟</BoldSpan>
          <TitleBottonHeader width={'100px'} />
          <RowAboutUs>
            <p>
              شرکت سبک زندگی خلاق زیر مجموعه هلدینگ میهن با هدف ارائه شیوه های
              نوین در بستر تجارت الکترونیک در تلاش است فرایند خرید آنلاین را
              برای مشتریان خود تسهیل بخشد ما در خانواده ی کاریمان با پایداری و
              ثبات در راستای تسهیل و تغییر خلاقانه سبک زندگی، به دنبال تغییری
              نوآورانه هستیم که منجر به ایجاد رفاه بیشتر همراه با آرامش و و
              آسایش مردم شود شرکت سبک زندگی خلاق زیر مجموعه هلدینگ میهن با هدف
              ارائه شیوه های نوین در بستر تجارت الکترونیک در تلاش است فرایند
              خرید آنلاین را برای مشتریان خود تسهیل بخشد ما در خانواده ی کاریمان
              با پایداری و ثبات در راستای تسهیل و تغییر خلاقانه سبک زندگی، به
              دنبال تغییری نوآورانه هستیم
            </p>
            <ColumnPic>
              <ImageSmallContainer src={constants.Images.alinland3.src} />
              <ImageThinContainer src={constants.Images.alinland2.src} />
            </ColumnPic>
            <ImageBigContainer src={constants.Images.alinland1.src} />
          </RowAboutUs>
          <CenterAboutUs>
            <BoldSpan>اهداف ما</BoldSpan>
            <TitleBottonHeader width={'80px'} />
            <p>
              {' '}
              آلین لند با توجه به درخواست و استقبال مشتریان خود قصد دارد ابتدا
              با پوشش تهران و دیگر شهرستان های کشور، علاوه بر اینکه به تعداد
              محصولات خود در گروه های کالایی مختلف و تنوع آنها بیفزاید تا نیاز
              افراد با سلیقه و نیازمندی‌های مختلف را که در جست و جوی ارائه خدمات
              و محصولات با کیفیت هستند برآورده سازد، همچنین در مرحله بعدی از
              فعالیت خود با هدف ورود به بازار نیازمندی های سطح خاورمیانه پا به
              این عرضه خواهد گذاشت.
            </p>
          </CenterAboutUs>

          <CenterRowAboutUs>
            <AboutUsItem>
              <IconBox data-icon="&#xe005;" size={24} />
              <BoldSpan color="#ed7203" margin="10px 0">
                +5300000
              </BoldSpan>
              <TextChangable size="12px">فروشندگان فعال</TextChangable>
            </AboutUsItem>
            <AboutUsItem>
              <IconBox data-icon="&#xe000;" size={24} />
              <BoldSpan color="#ed7203" margin="10px 0">
                +5300000
              </BoldSpan>
              <TextChangable size="12px">تنوع کالا های موجود</TextChangable>
            </AboutUsItem>
            <AboutUsItem>
              <IconBox data-icon='"' size={24} />
              <BoldSpan color="#ed7203" margin="10px 0">
                +5300000
              </BoldSpan>
              <TextChangable size="12px">آمار فروش ماهانه</TextChangable>
            </AboutUsItem>
          </CenterRowAboutUs>

          <BoldSpan>مزیت های ما</BoldSpan>
          <TitleBottonHeader width={'100px'} />

          <NumberRow>
            <CircleNumber>
              <CircleNumberBorder>1</CircleNumberBorder>
            </CircleNumber>
            <NumberRowColumn>
              <BoldSpan size="15">اعتماد</BoldSpan>
              <TextChangable size="13">
                تعهد به ضمانت مرجوع کردن کالا برای جلب اعتماد و رضایت هرچه بیشتر
                مشتریان{' '}
              </TextChangable>
            </NumberRowColumn>
          </NumberRow>

          <NumberRow>
            <CircleNumber>
              <CircleNumberBorder>2</CircleNumberBorder>
            </CircleNumber>
            <NumberRowColumn>
              <BoldSpan size="15">عملکرد</BoldSpan>
              <TextChangable size="13">
                {' '}
                .ضمانت در ارسال و تحویل بدون تاخیر سفارشات در زمان مقرر که نشان
                دهنده دقت بالای سیستم ارسال و همراهی همیشگی بخش ارتباط با
                مشتریان آلین لند خواهد بود
              </TextChangable>
            </NumberRowColumn>
          </NumberRow>
          <NumberRow>
            <CircleNumber>
              <CircleNumberBorder>3</CircleNumberBorder>
            </CircleNumber>
            <NumberRowColumn>
              <BoldSpan size="15">پایداری</BoldSpan>
              <TextChangable size="13">
                .تداوم حضور در بازار با پشتوانه قوی با تنوع بالای محصولات موجود
                که نشان دهنده ی پایداریمان در این راه است{' '}
              </TextChangable>
            </NumberRowColumn>
          </NumberRow>
        </AboutUsSection>
      </MainLayout>

      <CategoryLayout pageTitle="درباره ما" hideNav fullPage>
        <EditProfileContainer>
          <AboutusTitle>داستان ما</AboutusTitle>
          <TitleBottonHeader width={'70px'} />
          <AboutusDesc>
            {' '}
            فروشگاه اینترنتی آلین لند فعالیت خود را از سال 99 آغاز کرده است و با
            شروع فروش اینترنتی مجموعه کالای سوپرمارکتی متعهد شده است تا نیازهای
            مشتریان را در سراسر کشور برآورده کند. در آلین لند می‌توانید محصولات
            مورد نظرتان را اعم از خوردنی و آشامیدنی، آرایشی‌ و بهداشتی، لوازم
            خانگی و برقی، کالای دیجیتال، مد و پوشاک و ... را ضمن اطمینان از
            اصالت کالا، با بهترین کیفیت و اقتصادی ترین قیمت، با یک کلیک سفارش
            داده و با دقتی بی نظیر در سریعترین زمان ممکن تحویل بگیریددر این
            راستا کسب اعتماد و رضایت مشتری اصلی است که بر روی آن تاکید داریم که
            این مهم جز با عرضه محصولات سالم و مطمئن میسر نخواهد بود
          </AboutusDesc>
          <AboutusTitle>مزیت های ما</AboutusTitle>
          <TitleBottonHeader width={'90px'} />
          <NumberRow>
            <CircleNumber>
              <CircleNumberBorder>1</CircleNumberBorder>
            </CircleNumber>
            <NumberRowColumn>
              <BoldSpan size="15">اعتماد</BoldSpan>
              <TextChangable size="14.5">
                تعهد به ضمانت مرجوع کردن کالا برای جلب اعتماد و رضایت هرچه بیشتر
                مشتریان{' '}
              </TextChangable>
            </NumberRowColumn>
          </NumberRow>

          <NumberRow>
            <CircleNumber>
              <CircleNumberBorder>2</CircleNumberBorder>
            </CircleNumber>
            <NumberRowColumn>
              <BoldSpan size="15">عملکرد</BoldSpan>
              <TextChangable size="14.5">
                {' '}
                ضمانت در ارسال و تحویل بدون تاخیر سفارشات در زمان مقرر که نشان
                دهنده دقت بالای سیستم ارسال و همراهی همیشگی بخش ارتباط با
                مشتریان آلین لند خواهد بود
              </TextChangable>
            </NumberRowColumn>
          </NumberRow>
          <NumberRow>
            <CircleNumber>
              <CircleNumberBorder>3</CircleNumberBorder>
            </CircleNumber>
            <NumberRowColumn>
              <BoldSpan size="15">پایداری</BoldSpan>
              <TextChangable size="14.5">
                تداوم حضور در بازار با پشتوانه قوی با تنوع بالای محصولات موجود
                که نشان دهنده ی پایداریمان در این راه است{' '}
              </TextChangable>
            </NumberRowColumn>
          </NumberRow>
        </EditProfileContainer>

        <TrustSection>
          <TrustNamadArea>
            <Image src={BussinessNamad} width="100" height="110" />
            <Image src={InternationalNamad} width="100" height="110" />
            <Image src={TejaratNamad} width="100" height="110" />
          </TrustNamadArea>
        </TrustSection>
      </CategoryLayout>
    </>
  )
}

export default AboutUs
