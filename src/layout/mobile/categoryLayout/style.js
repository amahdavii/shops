import styled from 'styled-components'

export const HeaderCategoryArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #dcdfe1;
    padding: 15px;
  }
`

export const HeaderCategoryTitleArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
  }
`

export const HeaderCategoryTitle = styled.h3`
  @media (max-width: 639px) {
    color: #494f55;
    font-weight: 500;
    margin-right: 7px;
  }
`

export const MainCategoryContent = styled.main`
  @media (max-width: 639px) {
    /* background: #f5f8fa; */
    padding: ${(props) => (props.fullPage ? '0' : '15px 15px 18% 15px')};
    min-height: ${(props) => (props.fullHeight ? 'auto' : '93vh')};
    height: 100%;
  }
`
export const HeaderMobileCart = styled.div`
  @media (max-width: 639px) {
    background: #f5f8fa;
    padding: 15px;
    height: 100vh;
  }
`

export const LayoutCategoryContainer = styled.div`
  @media (max-width: 639px) {
    background: #f5f8fa;
  }

  @media (min-width: 639px) {
    display: none;
  }
`
