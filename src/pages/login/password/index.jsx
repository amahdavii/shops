import LoginLayout from '../../../layout/loginLayout'
import logo from '../../../../public/assets/logo/alinshops-logo.png'
import Image from 'next/image'
import {
  LoginPasswordContainer,
  LoginPasswordTitle,
  LoginPasswordDesc,
  LoginPasswordInput,
  LoginPasswordLink,
  LoginLinkContaienr,
  LoginTimerCountDown,
  LoginButton,
  LoginHeaderArea,
  LoginBack,
  LoginFormMobile,
  LoginDescContainer,
  LoginRegisterHeading,
  LoginPassIcon,
  LinkPageLogin,
} from 'src/styles/login/password'

import OtpCounter from '../../../components/common/otpCounter'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import LoginMobileLayout from '../../../layout/mobile/loginLayout'

export default function LoginPassword() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  // const [loginByPassApi] = useLoginByPassApiMutation()
  // const [forgetPassApi] = useForgetPassApiMutation()

  // const [sendOtpApi] = useSendOtpApiMutation()
  const router = useRouter()
  const { mobile } = router.query

  const [pass, setPass] = useState('')

  useEffect(() => {
    console.log('mobile', mobile)
    if (!mobile) router.replace({ pathname: '/login' })
  }, [mobile])

  const handleButton = () => {
    let body = {
      login_field: mobile,
      password: pass,
    }
    // loginByPassApi(body)
    //   .unwrap()
    //   .then((res) => {
    //     setCookie('user', res.data.token)
    router.push({ pathname: '/location' })
    //   })
    //   .catch((error) => console.log(error.message))
  }

  const handleForgetController = () => {
    let body = { login_field: mobile }
    // forgetPassApi(body)
    router.push(
      {
        pathname: '/login/verification',
        query: { state: 'changePass', mobile: mobile },
      },
      '/login/verification'
    )
  }

  const handleLoginController = () => {
    let body = { mobile: mobile }
    // sendOtpApi(body)
    router.push(
      {
        pathname: '/login/verification',
        query: { state: 'login', mobile: mobile },
      },
      '/login/verification'
    )
  }

  return (
    <>
      <LoginLayout>
        <LoginHeaderArea>
          <LoginBack data-icon="z" onClick={() => router.back()} />
          <Image src={logo} alt="alinshops logo" width={150} height={40} />
        </LoginHeaderArea>
        <LoginPasswordContainer>
          <LoginPasswordTitle>رمز عبور را وارد کنید</LoginPasswordTitle>
          <LoginPasswordDesc>
            رمز عبور حساب کاربری خود را وارد کنید
          </LoginPasswordDesc>
        </LoginPasswordContainer>
        <LoginPasswordInput
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
        />
        <LoginLinkContaienr>
          <LoginPasswordLink onClick={handleLoginController}>
            ورود با رمز یکبار مصرف
          </LoginPasswordLink>
          <LoginPasswordLink onClick={handleForgetController}>
            بازیابی رمز عبور
          </LoginPasswordLink>
        </LoginLinkContaienr>
        <LoginButton onClick={handleButton}>ورود به آلین لند</LoginButton>
      </LoginLayout>

      <LoginMobileLayout>
        <LoginFormMobile>
          <LoginDescContainer>
            <LoginRegisterHeading>رمز عبور را وارد کنید</LoginRegisterHeading>
            <LoginPasswordDesc>
              رمز عبور حساب کاربری خود را وارد کنید
            </LoginPasswordDesc>
          </LoginDescContainer>
          <LoginPasswordInput
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
          />

          <LinkPageLogin onClick={handleLoginController}>
            ورود با رمز عبور یک بار مصرف
            <LoginPassIcon data-icon="J" />
          </LinkPageLogin>

          <LinkPageLogin onClick={handleForgetController}>
            بازیابی رمز عبور
            <LoginPassIcon data-icon="J" />
          </LinkPageLogin>

          <LoginButton onClick={handleButton}>ادامه</LoginButton>
        </LoginFormMobile>
      </LoginMobileLayout>
    </>
  )
}
