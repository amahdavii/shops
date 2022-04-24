import {
  StoreMobileHeader,
  StoreUserDetail,
  UserAccountIcon,
  ShopsDetailArea,
  ShopsBrandArea,
  ShopsBrandLogo,
  ShopsBrandDesc,
  StoreDeliveryArea,
  StoreDeliveryTime,
  StoreDeliveryIcon,
  StoreDeliveryShippingIcon,
  StoreDeliveryShipping,
  ChangeStoreBtn,
  SearchStoreArea,
  SearchStoreInput,
  SearchStoreBtn,
} from './style'

import Image from 'next/image'
import dailyLogo from '../../../../../public/assets/image/daily-badge.png'
import Link from 'next/link'
import UserAddress from '../../../../components/common/userAddress'
const StoreHeader = () => {
  return (
    <StoreMobileHeader>
      <StoreUserDetail>
        <UserAddress />
        <UserAccountIcon data-icon="H" />
      </StoreUserDetail>

      <ShopsDetailArea>
        <ShopsBrandArea>
          <ShopsBrandLogo>
            <Image src={dailyLogo} width={85} height={30} alt="shops logo" />
          </ShopsBrandLogo>
          <ShopsBrandDesc>
            فروشگاه زنجیره ای دیلی مارکت
          </ShopsBrandDesc>
        </ShopsBrandArea>

        <StoreDeliveryArea>
          <StoreDeliveryTime>
            <StoreDeliveryIcon data-icon="q" />
            30 دقیقه
          </StoreDeliveryTime>

          <StoreDeliveryShipping>
            <StoreDeliveryShippingIcon data-icon="," />
            ارسال رایگان
          </StoreDeliveryShipping>

          <Link href="/changeStore">
            <a>
              <ChangeStoreBtn>
                تغییر فروشگاه
                <span data-icon=")" />
              </ChangeStoreBtn>
            </a>
          </Link>
        </StoreDeliveryArea>

        <SearchStoreArea>
          <SearchStoreInput placeholder="جستجو در دیلی مارکت سعادآباد" />
          <SearchStoreBtn data-icon="=" />
        </SearchStoreArea>
      </ShopsDetailArea>
    </StoreMobileHeader>
  )
}

export default StoreHeader
