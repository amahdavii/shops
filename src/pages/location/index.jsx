import SelectLocation from '../../components/selectLocation'
import LocationLayout from '../../layout/locationLayout'
import {
  LocationTopSide,
  LocationBottomSide,
  HederShopContainer,
  LocationSection,
  TitleBottonHeader,
  ShopContainer,
  ShopBox,
  LocationMobileArea,
  LocationMobileHeader,
  LoginLocationBtn,
  LocationLogoArea,
  LoginIconBtn,
  LocationSearchShopSection,
  LocationSearchShopTitle,
  LocationSearchDesc,
  SearchRegionArea,
  SearchRegionIcon,
  SearchRegionInput,
  SearchRegionNotif,
  RegionBanner,
} from '../../styles/location'
import ShoppingCard from '../../components/common/shoppingCard'
import { Container, ColumnContainer } from 'src/styles/sharedStyle'
var shop = [1, 2, 3, 4, 5, 6, 7]
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/assets/logo/alinshops-logo.png'

export default function Location() {
  const [shops, setShops] = useState(null)
  const storeSection = useRef(null)
  const scrollDown = () => {
    if (shops) {
      window.scrollTo({
        top: storeSection?.current?.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    if (shops) {
      scrollDown()
    }
  }, [shops])

  const renderShopCard = () => shops?.map((item) => <ShoppingCard />)
  return (
    <>
      <LocationLayout>
        <LocationSection>
          <Container>
            <SelectLocation setShops={setShops} />
          </Container>
        </LocationSection>
        {shops ? (
          <ShopBox ref={storeSection}>
            <Container>
              <HederShopContainer>
                <ColumnContainer>
                  <span>انتخاب از فروشگاه های اطراف</span>
                  <TitleBottonHeader />
                </ColumnContainer>
              </HederShopContainer>
              <ShopContainer>{renderShopCard()}</ShopContainer>
            </Container>
          </ShopBox>
        ) : null}
      </LocationLayout>

      <LocationMobileArea>
        <LocationTopSide>
          <LocationMobileHeader>
            <Link href="/">
              <LocationLogoArea>
                <Image
                  src={logo}
                  width={110}
                  height={28}
                  alt="alinshops logo"
                />
              </LocationLogoArea>
            </Link>
            <Link href="/login">
              <a>
                <LoginLocationBtn>
                  <LoginIconBtn data-icon="H" />
                  ورود به حساب کاربری
                </LoginLocationBtn>
              </a>
            </Link>
          </LocationMobileHeader>
          <LocationSearchShopSection>
            <LocationSearchShopTitle>
              امکان خرید فوری از فروشگاه های اطراف
            </LocationSearchShopTitle>
            <LocationSearchDesc>
              ارسال رایگان در کوتاهترین زمان!
            </LocationSearchDesc>

            <SearchRegionArea>
              <SearchRegionIcon data-icon="]" />
              <SearchRegionInput placeholder="جستجو منطقه یا محله..." />
            </SearchRegionArea>

            <SearchRegionNotif>
              {' '}
              برای دسترسی به آدرس های قبلی
              <Link href="/login">
                <a>وارد شوید</a>
              </Link>
            </SearchRegionNotif>
          </LocationSearchShopSection>
        </LocationTopSide>

        <LocationBottomSide>
          <RegionBanner />
        </LocationBottomSide>
      </LocationMobileArea>
    </>
  )
}
