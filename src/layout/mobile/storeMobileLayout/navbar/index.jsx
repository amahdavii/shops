import { MainStoreBottomNav, MainStoreNavItem } from './style'

const StoreMobileNavbar = () => {
    return (
      <MainStoreBottomNav>
        <MainStoreNavItem>
          <span>1</span>
          <span>خانه</span>
        </MainStoreNavItem>
        <MainStoreNavItem>
          <span>1</span>
          <span>سفارش ها</span>
        </MainStoreNavItem>{' '}
        <MainStoreNavItem>
          <span>1</span>
          <span>دسته بندی</span>
        </MainStoreNavItem>{' '}
        <MainStoreNavItem>
          <span>1</span>
          <span>سبد خرید</span>
        </MainStoreNavItem>{' '}
      </MainStoreBottomNav>
    )
}
 
export default StoreMobileNavbar;