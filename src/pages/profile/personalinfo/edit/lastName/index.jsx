import { useState } from 'react'
import MobileCategoryLayout from '../../../../../layout/mobile/categoryLayout'
import {
  EditProfileContainer,
  EditProfileTitle,
  EditProfileInput,
  EditProfileBtn,
} from '../../../../../styles/profile/edit'

const EditProfileLastName = () => {
  const [lastName, setLastName] = useState('منصوری')
  const [active, setActive] = useState(false)

  const InputLength = lastName.length
  const handleLastName = (event) => {
    setLastName(event.target.value)

    event.target.value.length > InputLength ||
    event.target.value.length < InputLength
      ? setActive(true)
      : setActive(false)
  }
  return (
    <MobileCategoryLayout pageTitle="نام خانوادگی" hideNav fullHeight fullPage>
      <EditProfileContainer>
        <EditProfileTitle>نام خانوادگی</EditProfileTitle>
        <EditProfileInput value={lastName} onChange={handleLastName} />
        <EditProfileBtn active={active}>ثبت اطلاعات</EditProfileBtn>
      </EditProfileContainer>
    </MobileCategoryLayout>
  )
}

export default EditProfileLastName
