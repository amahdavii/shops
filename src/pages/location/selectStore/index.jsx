import { SelectStoreHeader, SelectStoreMain, SelectStoreTitle } from './style'
import UserAddress from '../../../components/common/userAddress'
import { IconBox } from 'src/styles/sharedStyle'
import ShoppingCard from '../../../components/common/shoppingCard'
import { useRouter } from 'next/router'

const SelectStore = () => {
  const router = useRouter()

  return (
    <>
      <SelectStoreHeader>
        <UserAddress />
        <IconBox data-icon="u" size="24" onClick={() => router.back()} />
      </SelectStoreHeader>
      <SelectStoreMain>
        <SelectStoreTitle>انتخاب از فروشگاه های اطراف</SelectStoreTitle>
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
      </SelectStoreMain>
    </>
  )
}

export default SelectStore
