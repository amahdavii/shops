import styled from 'styled-components'

export const HeaderCategoryContainer = styled.header`
  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;
    background-color: #f5f8fa;
  }
`

export const HeaderCategoryTopArea = styled.div`
  @media (max-width: 639px) {
    background: #fff;
    border-bottom: 1px solid #dcdfe1;
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const HeaderCategoryTitleArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
  }
`
export const HeaderCategoryTitle = styled.h2`
  @media (max-width: 639px) {
    color: #494f55;
    margin-right: 5px;
    font-weight: 600;
    font-size: 15px;
  }
`

export const HeaderFilterCategoryArea = styled.nav`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: ${(props) => (props.mysterious ? '#6a78d1' : '#fff')};
    border-bottom: 1px solid #dcdfe1;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
export const HeaderFilterCategoryItems = styled.ul`
  @media (max-width: 639px) {
    list-style: none;
    display: flex;
    align-items: center;
    color: ${(props) => (props.mysterious ? '#494f55' : '#fff')};
    padding: 0;

    li {
      white-space: nowrap;
      padding: 5px 15px;
      margin: 0 8px;
      border-radius: 5px;
      font-weight: 500;
      font-size: 15px;
      color: ${(props) => (props.mysterious ? '#fff' : '#494f55')};

      &:first-child {
        margin-right: 0;
        border: ${(props) => (props.mysterious ? '1px solid #fff' : 'none')};
        background: ${(props) => (props.mysterious ? 'none' : '#004f9e')};
        color: #fff;
      }

      &:last-child {
        margin-left: 0;
      }

      /* &:hover {
        background: #004f9e;
        color: #fff;
      } */
    }
  }
`
export const HeaderFilterSubCategoryArea = styled.nav`
  @media (max-width: 639px) {
    display: ${(props) => (props.subFilter ? 'flex' : 'none')};
    align-items: center;
    padding: 10px 15px;
    background-color: #fff;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
export const HeaderFilterSubCategoryItems = styled.ul`
  @media (max-width: 639px) {
    list-style: none;
    display: flex;
    align-items: center;
    color: #494f55;
    padding: 0;

    li {
      white-space: nowrap;
      padding: 4px 15px;
      margin: 0 8px;
      border-radius: 5px;
      font-weight: 500;
      border: 1px solid #eef5f9;
      font-size: 15px;

      &:first-child {
        margin-right: 0;
        color: #004f9e;
        border: 1px solid #004f9e;
      }

      &:last-child {
        margin-left: 0;
      }

      /* &:hover {
        color: #004f9e;
        border: 1px solid #004f9e;
      } */
    }
  }
`
export const HeaderFilterProducts = styled.div`
  @media (max-width: 639px) {
    margin-top: 15px;
    background: #fff;
    padding: 12px 15px;
    display: ${(props) => (props.subCategory ? 'flex' : 'none')};
    justify-content: space-between;
  }
`

export const HeaderProductFilter = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;

    span {
      margin-left: 6px;
    }
  }
`

export const HeaderProductCount = styled.span`
  @media (max-width: 639px) {
    font-size: 15px;
  }
`
