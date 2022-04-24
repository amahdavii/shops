import LoginLayout from '../../../layout/loginLayout'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../public/assets/logo/alinshops-logo.png'
import {
  VerificationContainer,
  VerificationTitle,
  VerificationInput,
  VerificationPasswordLogin,
  LoginTimerCountDown,
  LoginButton,
  LoginHeaderArea,
  LoginBack,
  LoginFormMobile,
  LoginPassIcon,
} from '../../../styles/login/verification'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { useCookies } from 'react-cookie'
import OtpCounter from '../../../components/common/otpCounter'
import LoginMobileLayout from '../../../layout/mobile/loginLayout'

function LoginVerification() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const router = useRouter()
  const { mobile, state } = router.query

  const [otp, setOtp] = useState('')

  const verificationInputRef = useRef(null)

  useEffect(() => {
    verificationInputRef.current.focus()
  }, [])

  useEffect(() => {
    console.log('mobile', mobile)
    if (!mobile) router.replace({ pathname: '/login' })
  }, [mobile])

  const handleButton = (event) => {
    if (event) event.preventDefault()
    if (state == 'changePass') {
      router.push(
        {
          pathname: '/login/setPassword',
          query: { otp: otp, mobile: mobile },
        },
        '/login/setPassword'
      )
    } else {
      let body = { mobile, verification_code: otp }
      // verifyOtpApi(body)
      // .unwrap()
      // .then((res) => {
      // setCookie('user', res.data.token)
      router.push({ pathname: '/location' })
      // })
      // .catch((error) => console.log(error.message))
    }
  }

  return (
    <>
      <LoginLayout>
        <LoginHeaderArea>
          <LoginBack data-icon="z" onClick={() => router.back()} />
          <Image src={logo} alt="alinshops logo" width={150} height={40} />
        </LoginHeaderArea>
        <VerificationContainer>
          <VerificationTitle>کد تایید ارسال شده را وارد کنید</VerificationTitle>
          <VerificationInput
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            ref={verificationInputRef}
            maxLength={6}
          />
          <Link
            href={{
              pathname: '/login/password',
              query: { mobile: mobile },
            }}
            as="/login/password"
          >
            <VerificationPasswordLogin>
              ورود با رمز عبور
            </VerificationPasswordLogin>
          </Link>

          <LoginTimerCountDown>
            <OtpCounter initialSeconds={70} mobile={mobile} />
          </LoginTimerCountDown>

          <LoginButton onClick={handleButton}>ورود به آلین لند</LoginButton>
        </VerificationContainer>
      </LoginLayout>

      <LoginMobileLayout>
        <LoginFormMobile>
          <VerificationTitle>رمز یکبار مصرف را وارد کنید</VerificationTitle>
          <VerificationInput
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            ref={verificationInputRef}
            maxLength={6}
          />
          <Link
            href={{
              pathname: '/login/password',
              query: { mobile: mobile },
            }}
            as="/login/password"
          >
            <VerificationPasswordLogin>
              ورود با رمز عبور
              <LoginPassIcon data-icon="J" />
            </VerificationPasswordLogin>
          </Link>

          <LoginTimerCountDown>
            <OtpCounter initialSeconds={70} mobile={mobile} />
          </LoginTimerCountDown>

          <LoginButton onClick={handleButton}>ادامه</LoginButton>
        </LoginFormMobile>
      </LoginMobileLayout>
    </>
  )
}

export default LoginVerification
