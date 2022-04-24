import Header from '../../components/common/header'
import Footer from '../../components/common/footer'
import { LocationBackground } from './style'

const LocationLayout = (props) => {
  const { children } = props
  return (
    <>
      <Header withoutShop={true}/>
      <LocationBackground>
        {children}
      </LocationBackground>
      <Footer />
    </>
  )
}

export default LocationLayout
