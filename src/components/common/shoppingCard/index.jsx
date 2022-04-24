import {
  ShoppingCardContainer,
  ShoppingCardImage,
  ShoppingCardTitle,
  ShoppingBuyBtn,
  ShoppingCardTitleContainer,
  ShoppingCardBadge,
  DeliverTimeContainer,
  DeliverTimeDesc,
  DescriiptionRow,
  LineBetween,
} from './style'
import Image from 'next/image'
import * as Images from '../../../constants/images'
import { IconBox } from '@/src/styles/sharedStyle'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import ChangeLocationModal from 'src/components/modal/changeLocation'
const ShoppingCard = ({ store, location, inStore = false, hide }) => {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['location'])
  const [visible, setVisible] = useState(false)

  const goToStore = () => {
    router.push(
      {
        pathname: `/category/main/[id]`,
      },
      `/category/main/${store.id}`
    )
  }
  const confirm = () => {
    setVisible(false)
    hide()
    goToStore()
  }
  const handleClick = () => {
    if (inStore) {
      setVisible(true)
    } else {
      setCookie(
        'location',
        JSON.stringify({ lat: location.lat, long: location.long })
      )
      goToStore()
    }
  }
  return (
    <>
      <ChangeLocationModal
        visibility={visible}
        hide={() => setVisible(false)}
        confirmFun={() => confirm()}
        header="تغییر فروشگاه"
        title="درصورت تغییر فروشگاه کالاهای موجود در سبد خرید شما حذف می شود"
        confirm="فروشگاه دیگری را انتخاب می کنم"
        cancel="فروشگاه خود را تغییر نمی دهم"
      />
      <ShoppingCardContainer>
        <ShoppingCardImage
          imageUrl={
            !store ? '/assets/image/daily.png' : '/assets/image/daily.png'
          }
        >
          <ShoppingCardBadge>
            <Image
              src={!store ? Images.Images.dailyBadge : Images.Images.dailyBadge}
              alt="arrow left"
              width={110}
              height={40}
            />
          </ShoppingCardBadge>
          <ShoppingCardTitleContainer>
            <ShoppingCardTitle>{store ? store.name : ''}</ShoppingCardTitle>
            <ShoppingBuyBtn onClick={handleClick}>
              شروع خرید
              <span data-icon="<" />
            </ShoppingBuyBtn>
          </ShoppingCardTitleContainer>
        </ShoppingCardImage>
        <DeliverTimeContainer>
          <DescriiptionRow color={'#ed7203'}>
            {/* <span data-icon=","/> */}
            <IconBox
              data-icon=","
              size="24"
              color="#ed7203"
              margin="0 0 0 5px"
            />
            تحویل
            {store?.delivery_duration} دقیقه برای این فروشگاه فعال است
          </DescriiptionRow>
          <LineBetween />
          <DescriiptionRow color={'#494f55'}>
            {/* <span data-icon="7"/> */}
            <IconBox
              data-icon="&#xe00a;"
              size="24"
              color="#494f55"
              margin="0 0 0 5px"
            />

            {store?.open_time}
          </DescriiptionRow>
        </DeliverTimeContainer>
      </ShoppingCardContainer>
    </>
  )
}

export default ShoppingCard
