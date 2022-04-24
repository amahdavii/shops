import LoginLayout from '../../../layout/loginLayout'
import Image from 'next/image'
import logo from '../../../../public/assets/logo/alinshops-logo.png'
import {
  SetPasswordContainer,
  SetPasswordTitle,
  SetPasswordDesc,
  SetPasswordInput,
  SetPasswordLabel,
  LoginButton,
  LoginHeaderArea,
  LoginBack,
  LoginFormMobile,
  LoginDescContainer,
  LoginRegisterHeading,
  LoginPasswordDesc,
} from '../../../styles/login/setPassword'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import LoginMobileLayout from '../../../layout/mobile/loginLayout'

const SetPassword = () => {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { mobile, otp } = router.query
  // const [verifyForgetPassApi] = useVerifyForgetPassApiMutation()

  const [pass, setPass] = useState('')
  const [passConf, setPassConf] = useState('')

  useEffect(() => {
    console.log(`otp: ${otp} mobile: ${mobile}`)
  }, [])

  const handleButton = (event) => {
    if (event) event.preventDefault()
    let body = {
      login_field: mobile,
      password: pass,
      password_confirmation: passConf,
      verification_code: otp,
    }
    // verifyForgetPassApi(body)
    //   .unwrap()
    //   .then((res) => {
    //     setCookie('user', res.data.token)
    router.push({ pathname: '/location' })
    //   })
    //   .catch((error) => console.log(error.message))
  }

  return (
    <>
      <LoginLayout>
        <LoginHeaderArea>
          <LoginBack data-icon="z" onClick={() => router.back()} />
          <Image src={logo} alt="alinshops logo" width={150} height={40} />
        </LoginHeaderArea>
        <SetPasswordContainer>
          <SetPasswordTitle>تغییر رمز عبور</SetPasswordTitle>
          <SetPasswordDesc>رمز عبور باید حداقل 6 حرفی باشد</SetPasswordDesc>
          <SetPasswordLabel>
            رمزعبور جدید<span>*</span>
          </SetPasswordLabel>
          <SetPasswordInput
            onChange={(e) => setPass(e.target.value)}
            type="password"
          />
          <SetPasswordLabel>
            تکرار رمزعبور جدید<span>*</span>
          </SetPasswordLabel>
          <SetPasswordInput
            onChange={(e) => setPassConf(e.target.value)}
            type="password"
          />
          <LoginButton onClick={handleButton}>تغییر رمز</LoginButton>
        </SetPasswordContainer>
      </LoginLayout>

      <LoginMobileLayout>
        <LoginFormMobile>
          <LoginDescContainer>
            <SetPasswordTitle>تغییر رمز عبور</SetPasswordTitle>
            <SetPasswordDesc>رمز عبور باید حداقل 6 حرفی باشد</SetPasswordDesc>
          </LoginDescContainer>

          <SetPasswordLabel>
            رمزعبور جدید<span>*</span>
          </SetPasswordLabel>
          <SetPasswordInput
            onChange={(e) => setPass(e.target.value)}
            type="password"
          />
          <SetPasswordLabel>
            تکرار رمزعبور جدید<span>*</span>
          </SetPasswordLabel>
          <SetPasswordInput
            onChange={(e) => setPassConf(e.target.value)}
            type="password"
          />

          <LoginButton onClick={handleButton}>تغییر رمز</LoginButton>
        </LoginFormMobile>
      </LoginMobileLayout>
    </>
  )
}

export default SetPassword
