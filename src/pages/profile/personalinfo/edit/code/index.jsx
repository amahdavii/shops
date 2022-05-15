import { useState } from 'react'
import MobileCategoryLayout from '../../../../../layout/mobile/categoryLayout'
import {
  EditProfileContainer,
  EditProfileTitle,
  EditProfileInput,
  EditProfileBtn,
  ProfileCheckContainer,
} from '../../../../../styles/profile/edit'

const EditProfileCode = () => {
  const [code, setCode] = useState('0659876523')
  const [active, setActive] = useState(false)

  const InputLength = code.length
  const handleCode = (event) => {
    setCode(event.target.value)

    event.target.value.length > InputLength ||
    event.target.value.length < InputLength
      ? setActive(true)
      : setActive(false)
  }
  return (
    <MobileCategoryLayout pageTitle="کدملی" hideNav fullHeight fullPage>
      <EditProfileContainer>
        <EditProfileTitle>کدملی</EditProfileTitle>
        <EditProfileInput value={code} onChange={handleCode} />
        <ProfileCheckContainer>
          <input
            class="styled-checkbox"
            id="styled-checkbox-1"
            type="checkbox"
            value="value1"
          />
          <label for="styled-checkbox-1">تبعه ی غیر ایرانی کد ملی هستم</label>
        </ProfileCheckContainer>

        <EditProfileBtn active={active}>ثبت اطلاعات</EditProfileBtn>
      </EditProfileContainer>
    </MobileCategoryLayout>
  )
}

export default EditProfileCode
