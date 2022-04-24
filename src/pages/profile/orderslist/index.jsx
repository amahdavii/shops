import ProfileLayout from '../../../layout/profileLayout'
import OrderListItem from '../../../components/orderListItem'
import { ProfileTitle } from 'src/styles/profile/ordersList'

const ProfileOrdersList = ({ pageTitle }) => {
  return (
    <ProfileLayout>
      <ProfileTitle>لیست سفارش ها</ProfileTitle>
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
    </ProfileLayout>
  )
}

export default ProfileOrdersList
