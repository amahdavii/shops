import dynamic from 'next/dynamic'

import {
  DeliveryLocationTitle,
  DeliveryLocationMapArea,
  DeliveryLocationBtn,
  DeliveryLocationContainer,
} from './style'


const DynamicMap = dynamic(
  () => import('src/components/common/mapirArea'),
  { ssr: false }
)


const DeliveryLocation = () => {
  return (
    <DeliveryLocationContainer>
      <DeliveryLocationTitle>انتخاب آدرس تحویل</DeliveryLocationTitle>
      <DeliveryLocationMapArea>
        <DynamicMap />
      </DeliveryLocationMapArea>
      <DeliveryLocationBtn>تایید محدوده آدرس</DeliveryLocationBtn>
    </DeliveryLocationContainer>
  )
}

export default DeliveryLocation
