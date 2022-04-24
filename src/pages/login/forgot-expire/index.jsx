import LoginLayout from '../../../layout/loginLayout'
import logo from '../../../../public/assets/logo/alinshops-logo.png'
import Image from 'next/image'
import {
  LoginForgotContainer,
  LoginForgotTitle,
  LoginForgotDesc,
  LoginForgotInput,
  LoginTimerCountDown,
  LoginButton,
} from 'src/styles/login/forgot'

export default function LoginForgot() {
  return (
    <LoginLayout>
      <Image src={logo} alt="alinshops logo" width={150} height={40} />
      <LoginForgotContainer>
        <LoginForgotTitle>درخواست بازیابی رمزعبور</LoginForgotTitle>
        <LoginForgotDesc>
          جهت بازیابی رمزعبور شماره موبایل خود را وارد نمایید
        </LoginForgotDesc>
      </LoginForgotContainer>
      <LoginForgotInput />

      <LoginTimerCountDown>ارسال مجدد کد تا ۷۰ ثانیه دیگر</LoginTimerCountDown>
      <LoginButton>ورود به آلین لند</LoginButton>
    </LoginLayout>
  )
}
