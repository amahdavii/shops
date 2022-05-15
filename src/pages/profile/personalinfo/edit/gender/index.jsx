import { useState } from 'react'
import MobileCategoryLayout from '../../../../../layout/mobile/categoryLayout'
import {
  EditProfileContainer,
  EditProfileTitle,
  EditProfileInput,
  ProfileGenderContainer,
  EditProfileBtn,
} from '../../../../../styles/profile/edit'

const EditProfileGender = () => {
  return (
    <MobileCategoryLayout pageTitle="جنسیت" hideNav fullHeight fullPage>
      <EditProfileContainer>
        <ProfileGenderContainer>
          <input
            class="styled-checkbox"
            id="styled-checkbox-1"
            type="checkbox"
            value="value1"
          />
          <label for="styled-checkbox-1">زن</label>
        </ProfileGenderContainer>
        <ProfileGenderContainer>
          <input
            class="styled-checkbox"
            id="styled-checkbox-2"
            type="checkbox"
            value="value1"
          />
          <label for="styled-checkbox-2">مرد</label>
        </ProfileGenderContainer>

        <EditProfileBtn active={true}>ثبت اطلاعات</EditProfileBtn>
      </EditProfileContainer>
    </MobileCategoryLayout>
  )
}

export default EditProfileGender
