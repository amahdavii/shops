import styled from 'styled-components'

export const MainStoreBottomNav = styled.nav`
  @media (max-width: 639px) {
    position: fixed;
    background-color: #fff;
    width: 100%;
    height: 8%;
    bottom: 0;
    box-shadow: -1px -1px 15px #eee;
    display: ${(porps) => porps.hideNav ? 'none' : 'flex'};
    align-items: center;
    justify-content: space-around;
    z-index: 1000;
  }
`

export const MainStoreNavItem = styled.div`
  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #494f55;
    font-weight: 500;
    font-size: 15px;
  }
`