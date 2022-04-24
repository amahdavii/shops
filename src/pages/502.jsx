import { ErrorPageMobileContainer } from '../styles/error'
import ServerErrorImage from '../../public/assets/image/502.svg'
import Image from 'next/image'
import Link from 'next/link'

const ServerErrorPage = () => {
  return (
    <ErrorPageMobileContainer>
      <Image src={ServerErrorImage} />
      <h3>لطفاً مجدد تلاش کنید.</h3>
      <p>متاسفانه برای چند لحظه کوتاه ارتباط با سرور قطع شد</p>
      <Link href="/">
        <a>صفحه اصلی</a>
      </Link>
    </ErrorPageMobileContainer>
  )
}

export default ServerErrorPage
