import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {
  NewAddressArea,
  SearchAddressArea,
  SearchAddressInput,
  SearchBackIcon,
  LocationDynamicMap,
  AutomaticLocation,
  LocationIcon,
  LoginButton,
} from '../../../styles/addAddress'

const DynamicMap = dynamic(() => import('src/components/common/mapirArea'), {
  ssr: false,
})

const AddAddress = () => {
  const router = useRouter()

  return (
    <>
      <NewAddressArea>
        <SearchAddressArea>
          <SearchBackIcon data-icon="z" onClick={() => router.back()} />
          <SearchAddressInput placeholder="جستجوی محله یا منطقه..." />
        </SearchAddressArea>
        <LocationDynamicMap>
          <DynamicMap />
          <AutomaticLocation>
            <LocationIcon data-icon="}" />
            مکان یابی خودکار
          </AutomaticLocation>
        </LocationDynamicMap>
        <LoginButton>تایید آدرس</LoginButton>
      </NewAddressArea>
    </>
  )
}

export default AddAddress
