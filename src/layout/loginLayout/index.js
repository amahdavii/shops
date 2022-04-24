import {
  LoginBackground,
  LoginContainer,
  LoginMobileClose,
  LoginMobileContainer,
} from './style'
import loginBg from '../../../public/assets/image/login-background.png'
import { CenterFullContainer } from 'src/styles/sharedStyle'

const LoginLayout = (props) => {
  const { children } = props
  return (
    <LoginBackground imgUrl={loginBg}>
      <CenterFullContainer>
        <LoginContainer>{children}</LoginContainer>
      </CenterFullContainer>
    </LoginBackground>
  )
}

export default LoginLayout
