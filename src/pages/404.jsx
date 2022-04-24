import { ErrorPageMobileContainer } from '../styles/error'
import NotFoundImage from '../../public/assets/image/404.svg'
import Image from 'next/image'
import Link from 'next/link'


const NotFoundPage = () => {
  return (
    <ErrorPageMobileContainer>
      <Image src={NotFoundImage} />
      <h3>صفحه ای که به دنبال آن بودید پیدا نشد!</h3>
      <Link href="/">
        <a>صفحه اصلی</a>
      </Link>
    </ErrorPageMobileContainer>
  )
}

export default NotFoundPage
