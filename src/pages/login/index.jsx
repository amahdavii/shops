import LoginLayout from '../../layout/loginLayout'
import logo from '../../../public/assets/logo/alinshops-logo.png'
import Image from 'next/image'
import {
  LoginForm,
  LoginRegisterHeading,
  LoginDescContainer,
  LoginDesc,
  LoginPhoneInput,
  LoginButton,
  LoginRules,
  LoginRulesBold,
  LoginPhoneInputArea,
  LoginFormMobile,
  LoginClearInput,
} from 'src/styles/login/login'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import LoginMobileLayout from '../../layout/mobile/loginLayout'

export default function Login() {
  const [mobile, setMobile] = useState('')
  // const [sendOtpApi] = useSendOtpApiMutation()
  const [clearIcon, setClearIcon] = useState(false)

  const router = useRouter()

  const phoneInputRef = useRef(null)

  useEffect(() => {
    phoneInputRef.current.focus()
  }, [])

  const handleLogin = (event) => {
    if (event) event.preventDefault()
    let body = { mobile }
    // sendOtpApi(body)
    router.push(
      {
        pathname: '/login/verification',
        query: { mobile: mobile },
      },
      '/login/verification'
    )
  }

  const handleLoginInput = (event) => {
    let inputValue = event.target.value
    setMobile(inputValue)
    inputValue.length > 0 ? setClearIcon(true) : setClearIcon(false)
  }

  const clearLoginInput = () => {
    setMobile('')
    setClearIcon(false)
  }

  return (
    <>
      <LoginLayout>
        <Image src={logo} alt="alinshops logo" width={150} height={40} />

        <LoginForm>
          <LoginDescContainer>
            <LoginRegisterHeading>ورود/عضویت</LoginRegisterHeading>
            <LoginDesc>
              جهت ثبت سفارش در سایت شماره موبایل خود را وارد کنید
            </LoginDesc>
          </LoginDescContainer>

          <LoginPhoneInput
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            ref={phoneInputRef}
          />

          <LoginButton onClick={handleLogin}>ورود به آلین لند</LoginButton>
          <LoginRules>
            با ورود و یا ثبت نام در آلین لند شما
            <LoginRulesBold>
              &nbsp;&nbsp; شرایط و قوانین&nbsp;&nbsp;
            </LoginRulesBold>
            استفاده از سرویس های سایت و
            <LoginRulesBold>
              &nbsp;&nbsp; قوانین حریم خصوصی&nbsp;&nbsp;
            </LoginRulesBold>
            آن را می پذیرید
          </LoginRules>
        </LoginForm>
      </LoginLayout>

      <LoginMobileLayout>
        <LoginFormMobile>
          <LoginDescContainer>
            <LoginRegisterHeading>ورود/عضویت</LoginRegisterHeading>
            <LoginDesc>
              جهت ثبت سفارش در سایت شماره موبایل خود را وارد کنید
            </LoginDesc>
          </LoginDescContainer>
          <LoginPhoneInputArea>
            <LoginPhoneInput
              value={mobile}
              onChange={handleLoginInput}
              ref={phoneInputRef}
              placeholder="شماره موبایل"
              withClose={clearIcon}
            />
            {clearIcon ? (
              <LoginClearInput onClick={clearLoginInput}>
                <span data-icon="u" />
              </LoginClearInput>
            ) : null}
          </LoginPhoneInputArea>
          <LoginButton onClick={handleLogin}>ورود به آلین لند</LoginButton>
        </LoginFormMobile>
      </LoginMobileLayout>
      
    </>
  )
}
