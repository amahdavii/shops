import {
  ProductMobileContainer,
  ProductHeaderContainer,
  ProductHeaderTitleArea,
  ProductHeaderTitle,
  ProductHeaderBasket,
  ProductHeaderBasketBadge,
} from './style'
import { IconBox } from 'src/styles/sharedStyle'
import { useRouter } from 'next/router'

const ProductMobileLayout = ({ children }) => {
  const router = useRouter()
  return (
    <ProductMobileContainer>
      <ProductHeaderContainer>
        <ProductHeaderTitleArea>
          <IconBox
            data-icon="z"
            size="24"
            color="#494f55"
            onClick={() => router.back()}
          />
          <ProductHeaderTitle>جزئیات محصول</ProductHeaderTitle>
        </ProductHeaderTitleArea>
        <ProductHeaderBasket>
          <IconBox data-icon="~" size="18" color="#494f55" />
          <ProductHeaderBasketBadge>10</ProductHeaderBasketBadge>
        </ProductHeaderBasket>
      </ProductHeaderContainer>
      {children}
    </ProductMobileContainer>
  )
}

export default ProductMobileLayout
