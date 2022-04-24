import {
  StoreUserAddress,
  StoreLocationIcon,
  UserAddressDesc,
  UserAddressArrow,
} from './style'

const UserAddress = () => {
  return (
    <StoreUserAddress>
      <StoreLocationIcon data-icon="]" />
      <UserAddressDesc>تهران، سعادت آباد، بزرگراه شهید</UserAddressDesc>
      <UserAddressArrow data-icon=")" />
    </StoreUserAddress>
  )
}

export default UserAddress
