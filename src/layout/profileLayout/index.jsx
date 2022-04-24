import Link from 'next/link'
import MainLayout from '../mainLayout'

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
} from './style'

const ProfileLayout = ({ children, pageTitle }) => {
  return (
    <MainLayout>
      <PageContainer>
        <SubCatContainer>
          <ProfileTitle>پروفایل</ProfileTitle>
          <ProfileList>
            <ProfileListItem>
              <Link href="/profile/userinfo">
                <a>اطلاعات حساب کاربری</a>
              </Link>
            </ProfileListItem>
            <ProfileListItem>
              <Link href="/profile/userinfo">
                <a>لیست سفارش ها</a>
              </Link>
            </ProfileListItem>
            <ProfileListItem>
              <Link href="/profile/userinfo">
                <a>مدیریت کیف پول</a>
              </Link>
            </ProfileListItem>
            <ProfileListItem>
              <Link href="/profile/userinfo">
                <a>مدیریت آدرس ها</a>
              </Link>
            </ProfileListItem>
            <ProfileListItem>
              <Link href="/profile/userinfo">
                <a>خروج</a>
              </Link>
            </ProfileListItem>
          </ProfileList>
        </SubCatContainer>

        <SecondRow>
          {children}
        </SecondRow>
      </PageContainer>
    </MainLayout>
  )
}

export default ProfileLayout
