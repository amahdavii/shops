import {
  LoginMobileContainer,
  LoginMobileClose,
  LoginMobileArea,
} from './style'
import Logo from '../../../../public/assets/logo/alinshops-logo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const LoginMobileLayout = (props) => {
  const { children } = props
  const router = useRouter()

  return (
    <LoginMobileContainer>
      <LoginMobileClose
        data-icon={router.pathname == '/login' ? 'u' : 'z'}
        onClick={() => router.back()}
      />
      <LoginMobileArea>
        <Image src={Logo} alt="alinshop logo" width="150" height="35" />

        {children}





        
      </LoginMobileArea>
    </LoginMobileContainer>
  )
}

export default LoginMobileLayout
