import dynamic from 'next/dynamic'
import {
  EditLocationTitle,
  DeliveryLocationMapArea,
  DeliveryFormContaier,
  DeliveryPhoneContainer,
  DeliveryAddressContainer,
  DeliveryLabel,
  DeliveryInput,
  DeliveryLocationBtn,
} from './style'

const DynamicMap = dynamic(() => import('src/components/common/mapirArea'), {
  ssr: false,
})

const EditLocation = () => {
  return (
    <>
      <EditLocationTitle>ویرایش آدرس</EditLocationTitle>
      <DeliveryLocationMapArea>
        <DynamicMap />
      </DeliveryLocationMapArea>
      <DeliveryFormContaier>
        <DeliveryPhoneContainer>
          <DeliveryLabel>شماره تماس تحویل گیرنده</DeliveryLabel>
          <DeliveryInput />
        </DeliveryPhoneContainer>
        <DeliveryAddressContainer>
          <DeliveryLabel>آدرس تحویل گیرنده</DeliveryLabel>
          <DeliveryInput />
        </DeliveryAddressContainer>
      </DeliveryFormContaier>
      <DeliveryLocationBtn>ویرایش آدرس</DeliveryLocationBtn>
    </>
  )
}

export default EditLocation
