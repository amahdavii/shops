import { useState } from 'react'
import MobileCategoryLayout from '../../../../../layout/mobile/categoryLayout'
import {
  EditProfileContainer,
  EditProfileTitle,
  EditProfileInput,
  EditProfileBtn,
} from '../../../../../styles/profile/edit'

const EditProfileName = () => {
  const [name, setName] = useState('کیانا')
  const [active, setActive] = useState(false)

  const InputLength = name.length
  const handleName = (event) => {
    setName(event.target.value)

    event.target.value.length > InputLength ||
    event.target.value.length < InputLength
      ? setActive(true)
      : setActive(false)
  }

  return (
    <MobileCategoryLayout pageTitle="نام" hideNav fullHeight fullPage>
      <EditProfileContainer>
        <EditProfileTitle>نام</EditProfileTitle>
        <EditProfileInput value={name} onChange={handleName} />
        <EditProfileBtn active={active}>ثبت اطلاعات</EditProfileBtn>
      </EditProfileContainer>
    </MobileCategoryLayout>
  )
}

export default EditProfileName
