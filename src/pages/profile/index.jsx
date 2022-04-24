import Link from 'next/link'
import ProfileLayout from '../../layout/profileLayout'
import {
  PageContainer,
  SubCatContainer,
  SecondRow,
  ProfileTitle,
  ProfileList,
  ProfileListItem,
  ProfileInfoWrap,
  ProfileInfoInput,
  ProfileInfoLabel,
  ProfileInfo,
  ProfileBtn,
} from 'src/styles/profile/profile'

const ProfilePage = ({ pageTitle }) => {
  return (
    <ProfileLayout>
      <ProfileTitle>اطلاعات شخصی</ProfileTitle>
      <ProfileInfo>
        <ProfileInfoWrap>
          <ProfileInfoLabel>نام</ProfileInfoLabel>
          <ProfileInfoInput />
        </ProfileInfoWrap>

        <ProfileInfoWrap>
          <ProfileInfoLabel>نام خانوادگی</ProfileInfoLabel>
          <ProfileInfoInput />
        </ProfileInfoWrap>

        <ProfileInfoWrap>
          <ProfileInfoLabel>کد ملی</ProfileInfoLabel>
          <ProfileInfoInput />
        </ProfileInfoWrap>

        <ProfileInfoWrap>
          <ProfileInfoLabel>شماره همراه</ProfileInfoLabel>
          <ProfileInfoInput />
        </ProfileInfoWrap>

        <ProfileInfoWrap>
          <ProfileInfoLabel>تاریخ تولد</ProfileInfoLabel>
          <ProfileInfoInput />
        </ProfileInfoWrap>

        <ProfileInfoWrap>
          <ProfileInfoLabel>جنسیت</ProfileInfoLabel>
          <ProfileInfoInput />
        </ProfileInfoWrap>

        <ProfileInfoWrap>
          <ProfileInfoLabel>ایمیل</ProfileInfoLabel>
          <ProfileInfoInput />
        </ProfileInfoWrap>
      </ProfileInfo>

      <ProfileBtn>ثبت</ProfileBtn>
    </ProfileLayout>
  )
}

export default ProfilePage
