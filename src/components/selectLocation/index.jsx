import {
  SelectLocationContainer,
  SelectLocationTitle,
  LocationAreaContainer,
  LocationIcon,
  LocationInput,
  CurrentLocation,
  CurrentLocationIcon,
  CurrentLocationText,
  LocationArea,
  LocationButton,
} from './style'
import dynamic from 'next/dynamic'
import {IconBox} from 'src/styles/sharedStyle'

import {useStoreListQuery} from '../../services/location'
import { useEffect, useState } from 'react'
const DynamicMap = dynamic(
  () => import('src/components/common/mapirArea'),
  { ssr: false }
)
import { gql, useMutation, useQuery } from '@apollo/client';

const GET_STORLIST = gql`
   query($lat: Float,$long : Float) {
    StoresList(lat: $lat, long: $long) {
      name
      id
      shop_url
      image
      logo
      delivery_duration
      open_time
    }
  }
`;


export default function SelectLocation({setShops}) {

  const[userLocation,setUserLocation]=useState(null)
  const[mapLocation,setMapLocation]=useState(null)

  const { data, isLoading, isFetching } = useStoreListQuery( userLocation,{
    skip:!userLocation ?true :false
  })

  useEffect(()=>{
    setShops(data?.StoresList)
  },[data])


  return (
    <SelectLocationContainer>
      <SelectLocationTitle>انتخاب آدرس</SelectLocationTitle>
      <LocationAreaContainer>
        <LocationIcon>
          <IconBox data-icon="N" size={30}/>
        </LocationIcon>
        <LocationInput placeholder="جستجو منطقه یا محله..." />
      </LocationAreaContainer>
      <CurrentLocation>
        <CurrentLocationIcon>
          <IconBox data-icon="R" size={30} color={"#ed7203"}/>
        </CurrentLocationIcon>
        <CurrentLocationText>استفاده از موقعیت مکانی فعلی</CurrentLocationText>
      </CurrentLocation>
      <LocationArea>        
        <DynamicMap setLocation={setMapLocation}/>
      </LocationArea>
      <LocationButton onClick={()=>setUserLocation(mapLocation)}>
جستجوی فروشگاه ها         
      </LocationButton>
    </SelectLocationContainer>
  )
}
