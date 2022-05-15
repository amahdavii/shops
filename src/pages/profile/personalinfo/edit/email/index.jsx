import { useState } from 'react'
import MobileCategoryLayout from '../../../../../layout/mobile/categoryLayout'
import {
  EditProfileContainer,
  EditProfileTitle,
  EditProfileInput,
  EditProfileBtn,
} from '../../../../../styles/profile/edit'

const EditProfileEmail = () => {
  const [email, setEmail] = useState('mohammadreza.h@gmail.com')
  const [active, setActive] = useState(false)
  const InputLength = email.length

  const handleEmail = (event) => {
    setEmail(event.target.value)
    event.target.value.length > InputLength ||
    event.target.value.length < InputLength
      ? setActive(true)
      : setActive(false)
  }

  return (
    <MobileCategoryLayout pageTitle="پست الکترونیک" hideNav fullHeight fullPage>
      <EditProfileContainer>
        <EditProfileTitle>ایمیل</EditProfileTitle>
        <EditProfileInput type="email" value={email} onChange={handleEmail} />
        <EditProfileBtn active={active}>ثبت اطلاعات</EditProfileBtn>
      </EditProfileContainer>
    </MobileCategoryLayout>
  )
}

export default EditProfileEmail
