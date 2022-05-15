import { useState } from 'react'
import MobileCategoryLayout from '../../../../../layout/mobile/categoryLayout'
import {
  EditProfileContainer,
  EditProfileTitle,
  EditProfileInput,
  EditProfileBtn,
} from '../../../../../styles/profile/edit'

const EditProfileBirthday = () => {
  const [birthday, setBirthday] = useState('1374/05/02')
  const [active, setActive] = useState(false)

  const InputLength = birthday.length
  const handleBirthday = (event) => {
    setBirthday(event.target.value)
    event.target.value.length > InputLength ||
    event.target.value.length < InputLength
      ? setActive(true)
      : setActive(false)
  }

  return (
    <MobileCategoryLayout pageTitle="تاریخ تولد" hideNav fullHeight fullPage>
      <EditProfileContainer>
        <EditProfileTitle>تاریخ تولد</EditProfileTitle>
        <EditProfileInput value={birthday} onChange={handleBirthday} />
        <EditProfileBtn active={active}>ثبت اطلاعات</EditProfileBtn>
      </EditProfileContainer>
    </MobileCategoryLayout>
  )
}

export default EditProfileBirthday
