import Link from 'next/link'
import MobileCategoryLayout from '../../../layout/mobile/categoryLayout'

import {
  PersonalInfoContainer,
  ProfileInfoItems,
  ProfileInfoItem,
  ProfileInfoTitleArea,
  ProfileInfoTitle,
  ProfileInfoDesc,
} from '../../../styles/profile/personalinfo'

import { IconBox } from '../../../styles/sharedStyle'

const PersonalInfo = () => {
  return (
    <MobileCategoryLayout pageTitle="اطلاعات شخصی" hideNav fullPage>
      <PersonalInfoContainer>
        <ProfileInfoItems>
          <ProfileInfoItem>
            <Link href="/profile/personalinfo/edit/name/">
              <a>
                <ProfileInfoTitleArea>
                  <ProfileInfoTitle>نام</ProfileInfoTitle>
                  <IconBox size={22} data-icon="J" color="#494f55" />
                </ProfileInfoTitleArea>
                <ProfileInfoDesc>کیانا</ProfileInfoDesc>
              </a>
            </Link>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <Link href="/profile/personalinfo/edit/lastName/">
              <a>
                <ProfileInfoTitleArea>
                  <ProfileInfoTitle>نام خانوادگی</ProfileInfoTitle>
                  <IconBox size={22} data-icon="J" color="#494f55" />
                </ProfileInfoTitleArea>
                <ProfileInfoDesc>منصوری</ProfileInfoDesc>
              </a>
            </Link>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <Link href="/profile/personalinfo/edit/code/">
              <a>
                <ProfileInfoTitleArea>
                  <ProfileInfoTitle>کدملی</ProfileInfoTitle>
                  <IconBox size={22} data-icon="J" color="#494f55" />
                </ProfileInfoTitleArea>
                <ProfileInfoDesc>۰۶۵۹۸۷۶۵۲۳</ProfileInfoDesc>
              </a>
            </Link>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <ProfileInfoTitleArea>
              <ProfileInfoTitle>شماره همراه</ProfileInfoTitle>
            </ProfileInfoTitleArea>
            <ProfileInfoDesc>۰۹۳۵۶۷۸۹۸۴۵</ProfileInfoDesc>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <Link href="/profile/personalinfo/edit/birthday/">
              <a>
                <ProfileInfoTitleArea>
                  <ProfileInfoTitle>تاریخ تولد</ProfileInfoTitle>
                  <IconBox size={22} data-icon="J" color="#494f55" />
                </ProfileInfoTitleArea>
                <ProfileInfoDesc>1374/05/02</ProfileInfoDesc>
              </a>
            </Link>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <Link href="/profile/personalinfo/edit/gender/">
              <a>
                <ProfileInfoTitleArea>
                  <ProfileInfoTitle>جنسیت</ProfileInfoTitle>
                  <IconBox size={22} data-icon="J" color="#494f55" />
                </ProfileInfoTitleArea>
                <ProfileInfoDesc>زن</ProfileInfoDesc>
              </a>
            </Link>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <Link href="/profile/personalinfo/edit/email/">
              <a>
                <ProfileInfoTitleArea>
                  <ProfileInfoTitle>ایمیل</ProfileInfoTitle>
                  <IconBox size={22} data-icon="J" color="#494f55" />
                </ProfileInfoTitleArea>
                <ProfileInfoDesc>mohammadreza.h@gmail.com</ProfileInfoDesc>
              </a>
            </Link>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <Link href="/">
              <a>
                <ProfileInfoTitleArea>
                  <ProfileInfoTitle>رمزعبور</ProfileInfoTitle>
                  <IconBox size={22} data-icon="J" color="#494f55" />
                </ProfileInfoTitleArea>
                <ProfileInfoDesc>****</ProfileInfoDesc>
              </a>
            </Link>
          </ProfileInfoItem>
        </ProfileInfoItems>
      </PersonalInfoContainer>
    </MobileCategoryLayout>
  )
}

export default PersonalInfo
