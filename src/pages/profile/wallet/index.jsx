import ProfileLayout from '../../../layout/profileLayout'
import {
  WalletTitleContainer,
  ProfileTitle,
  WalletBalanceArea,
  WalletBalance,
  WalletTable,
  WalletThead,
  WalletTabelHead,
  WalletTabelRow,
  WalletPrice,
  WalletTabelData,
} from 'src/styles/profile/wallet'

const ProfileWallet = () => {
  return (
    <ProfileLayout>
      <WalletTitleContainer>
        <ProfileTitle>کیف پول</ProfileTitle>

        <WalletBalanceArea>
          موجودی کیف پول: <WalletBalance>996,000</WalletBalance>
          تومان
        </WalletBalanceArea>
      </WalletTitleContainer>

      <WalletTable>
        <WalletThead>
          <WalletTabelRow>
            <WalletTabelHead>شناسه تراکنش</WalletTabelHead>
            <WalletTabelHead>تغییرات کیف پول</WalletTabelHead>
            <WalletTabelHead>توضیحات</WalletTabelHead>
            <WalletTabelHead>مانده</WalletTabelHead>
            <WalletTabelHead>تاریخ</WalletTabelHead>
          </WalletTabelRow>
        </WalletThead>
        <tbody>
          <WalletTabelRow>
            <WalletTabelData>۳۴۵۴۵۴۶</WalletTabelData>
            <WalletTabelData>
              <WalletPrice>۳۹۶,۰۰۰ </WalletPrice>
              افزایش موجودی
            </WalletTabelData>
            <WalletTabelData>شارژ کیف پول بهمن ماه</WalletTabelData>
            <WalletTabelData>
              <WalletPrice>۹۹۶,۰۰۰</WalletPrice>
              تومان
            </WalletTabelData>
            <WalletTabelData>16 بهمن 1400</WalletTabelData>
          </WalletTabelRow>

          <WalletTabelRow>
            <WalletTabelData>۳۴۵۴۵۴۶</WalletTabelData>
            <WalletTabelData>
              <WalletPrice>۳۹۶,۰۰۰ </WalletPrice>
              افزایش موجودی
            </WalletTabelData>
            <WalletTabelData>شارژ کیف پول بهمن ماه</WalletTabelData>
            <WalletTabelData>
              <WalletPrice>۹۹۶,۰۰۰</WalletPrice>
              تومان
            </WalletTabelData>
            <WalletTabelData>16 بهمن 1400</WalletTabelData>
          </WalletTabelRow>

          <WalletTabelRow>
            <WalletTabelData>۳۴۵۴۵۴۶</WalletTabelData>
            <WalletTabelData>
              <WalletPrice>۳۹۶,۰۰۰ </WalletPrice>
              افزایش موجودی
            </WalletTabelData>
            <WalletTabelData>شارژ کیف پول بهمن ماه</WalletTabelData>
            <WalletTabelData>
              <WalletPrice>۹۹۶,۰۰۰</WalletPrice>
              تومان
            </WalletTabelData>
            <WalletTabelData>16 بهمن 1400</WalletTabelData>
          </WalletTabelRow>

          <WalletTabelRow>
            <WalletTabelData>۳۴۵۴۵۴۶</WalletTabelData>
            <WalletTabelData>
              <WalletPrice>۳۹۶,۰۰۰ </WalletPrice>
              افزایش موجودی
            </WalletTabelData>
            <WalletTabelData>شارژ کیف پول بهمن ماه</WalletTabelData>
            <WalletTabelData>
              <WalletPrice>۹۹۶,۰۰۰</WalletPrice>
              تومان
            </WalletTabelData>
            <WalletTabelData>16 بهمن 1400</WalletTabelData>
          </WalletTabelRow>

          <WalletTabelRow>
            <WalletTabelData>۳۴۵۴۵۴۶</WalletTabelData>
            <WalletTabelData>
              <WalletPrice>۳۹۶,۰۰۰ </WalletPrice>
              افزایش موجودی
            </WalletTabelData>
            <WalletTabelData>شارژ کیف پول بهمن ماه</WalletTabelData>
            <WalletTabelData>
              <WalletPrice>۹۹۶,۰۰۰</WalletPrice>
              تومان
            </WalletTabelData>
            <WalletTabelData>16 بهمن 1400</WalletTabelData>
          </WalletTabelRow>
        </tbody>
      </WalletTable>
    </ProfileLayout>
  )
}

export default ProfileWallet
