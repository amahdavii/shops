import ProfileLayout from '../../layout/profileLayout'
import {
  ProfileTitle,
  ProfileInfoWrap,
  ProfileInfoInput,
  ProfileInfoLabel,
  ProfileInfo,
  ProfileBtn,
  ProfileMainMobile,
  ProfileItemsMobile,
  ProfileItemMobile,
  ProfileItemTitle,
  ProfileWelcomemsg,
  ProfileUserSection,
} from 'src/styles/profile/profile'
import MobileCategoryLayout from '../../layout/mobile/categoryLayout'
import { IconBox, BetweenRow } from '../../styles/sharedStyle'
import Link from 'next/link'
import { useState } from 'react'

const ProfilePage = () => {
  const [login, setLogin] = useState(true)

  return (
    <>
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

      <MobileCategoryLayout pageTitle="حساب کاربری" fullPage>
        {login ? (
          <>
            <ProfileWelcomemsg>کیانا منصوری عزیز، سلام!</ProfileWelcomemsg>
            <ProfileUserSection>
              {' '}
              <ProfileItemsMobile>
                <ProfileItemMobile>
                  <Link href="login">
                    <a>
                      <ProfileItemTitle>
                        <IconBox size={22} data-icon="|" color="#494f55" />
                        اطلاعات حساب کاربری
                      </ProfileItemTitle>
                      <IconBox size={22} data-icon="J" color="#494f55" />
                    </a>
                  </Link>
                </ProfileItemMobile>

                <ProfileItemMobile>
                  <Link href="profile/support">
                    <a>
                      <ProfileItemTitle>
                        <IconBox
                          size={24}
                          data-icon="&#xe004;"
                          color="#494f55"
                        />
                        لیست سفارش ها
                      </ProfileItemTitle>
                      <IconBox size={22} data-icon="J" color="#494f55" />
                    </a>
                  </Link>
                </ProfileItemMobile>

                <ProfileItemMobile>
                  <Link href="profile/support">
                    <a>
                      <ProfileItemTitle>
                        <IconBox
                          size={24}
                          data-icon="&#xe004;"
                          color="#494f55"
                        />
                        مدیریت کیف پول
                      </ProfileItemTitle>
                      <IconBox size={22} data-icon="J" color="#494f55" />
                    </a>
                  </Link>
                </ProfileItemMobile>

                <ProfileItemMobile>
                  <Link href="profile/support">
                    <a>
                      <ProfileItemTitle>
                        <IconBox
                          size={24}
                          data-icon="&#xe004;"
                          color="#494f55"
                        />
                        مدیریت آدرس ها
                      </ProfileItemTitle>
                      <IconBox size={22} data-icon="J" color="#494f55" />
                    </a>
                  </Link>
                </ProfileItemMobile>
              </ProfileItemsMobile>
            </ProfileUserSection>

            <ProfileUserSection>
              {' '}
              <ProfileItemsMobile>
                <ProfileItemMobile>
                  <Link href="login">
                    <a>
                      <ProfileItemTitle>
                        <IconBox size={22} data-icon="|" color="#494f55" />
                        سوالات متداول
                      </ProfileItemTitle>
                      <IconBox size={22} data-icon="J" color="#494f55" />
                    </a>
                  </Link>
                </ProfileItemMobile>

                <ProfileItemMobile>
                  <Link href="profile/support">
                    <a>
                      <ProfileItemTitle>
                        <IconBox
                          size={24}
                          data-icon="&#xe004;"
                          color="#494f55"
                        />
                        تماس باما
                      </ProfileItemTitle>
                      <IconBox size={22} data-icon="J" color="#494f55" />
                    </a>
                  </Link>
                </ProfileItemMobile>

                <ProfileItemMobile>
                  <Link href="profile/support">
                    <a>
                      <ProfileItemTitle>
                        <IconBox
                          size={24}
                          data-icon="&#xe004;"
                          color="#494f55"
                        />
                        درباره ما
                      </ProfileItemTitle>
                      <IconBox size={22} data-icon="J" color="#494f55" />
                    </a>
                  </Link>
                </ProfileItemMobile>

                <ProfileItemMobile>
                  <Link href="profile/support">
                    <a>
                      <ProfileItemTitle>
                        <IconBox
                          size={24}
                          data-icon="&#xe004;"
                          color="#494f55"
                        />
                        پشتیبانی
                      </ProfileItemTitle>
                      <IconBox size={22} data-icon="J" color="#494f55" />
                    </a>
                  </Link>
                </ProfileItemMobile>
              </ProfileItemsMobile>
            </ProfileUserSection>

            <ProfileUserSection>
              <ProfileItemsMobile>
                <ProfileItemMobile>
                  <Link href="profile/support">
                    <a>
                      <ProfileItemTitle>
                        <IconBox
                          size={24}
                          data-icon="&#xe004;"
                          color="#494f55"
                        />
                        خروج از حساب کاربری
                      </ProfileItemTitle>

                    </a>
                  </Link>
                </ProfileItemMobile>
              </ProfileItemsMobile>
            </ProfileUserSection>
          </>
        ) : (
          <ProfileMainMobile>
            <ProfileItemsMobile>
              <ProfileItemMobile>
                <Link href="login">
                  <a>
                    <ProfileItemTitle>
                      <IconBox size={22} data-icon="|" color="#494f55" />
                      ورود و عضویت
                    </ProfileItemTitle>
                    <IconBox size={22} data-icon="J" color="#494f55" />
                  </a>
                </Link>
              </ProfileItemMobile>

              <ProfileItemMobile>
                <Link href="profile/support">
                  <a>
                    <ProfileItemTitle>
                      <IconBox size={24} data-icon="&#xe004;" color="#494f55" />
                      سوالات متداول
                    </ProfileItemTitle>
                    <IconBox size={22} data-icon="J" color="#494f55" />
                  </a>
                </Link>
              </ProfileItemMobile>

              <ProfileItemMobile>
                <Link href="profile/support">
                  <a>
                    <ProfileItemTitle>
                      <IconBox size={24} data-icon="&#xe004;" color="#494f55" />
                      تماس باما
                    </ProfileItemTitle>
                    <IconBox size={22} data-icon="J" color="#494f55" />
                  </a>
                </Link>
              </ProfileItemMobile>

              <ProfileItemMobile>
                <Link href="profile/support">
                  <a>
                    <ProfileItemTitle>
                      <IconBox size={24} data-icon="&#xe004;" color="#494f55" />
                      درباره ما
                    </ProfileItemTitle>
                    <IconBox size={22} data-icon="J" color="#494f55" />
                  </a>
                </Link>
              </ProfileItemMobile>

              <ProfileItemMobile>
                <Link href="profile/support">
                  <a>
                    <ProfileItemTitle>
                      <IconBox size={24} data-icon="&#xe004;" color="#494f55" />
                      پشتیبانی
                    </ProfileItemTitle>
                    <IconBox size={22} data-icon="J" color="#494f55" />
                  </a>
                </Link>
              </ProfileItemMobile>
            </ProfileItemsMobile>
          </ProfileMainMobile>
        )}
      </MobileCategoryLayout>
    </>
  )
}

export default ProfilePage
