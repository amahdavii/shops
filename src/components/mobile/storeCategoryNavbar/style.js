import styled from 'styled-components'

export const StoreCategoriesNav = styled.nav`
  @media (max-width: 639px) {
    background: #fff;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    overflow: scroll;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
export const StoreCategoriesItems = styled.ul`
  @media (max-width: 639px) {
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    color: #494f55;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      white-space: nowrap;
      margin: 0 10px;
      padding: 5px 10px;
      border-radius: 5px;

      &:first-child {
        margin-right: 0;
      }

      &:last-child {
        margin-left: 0;
      }

      &:hover {
        color: #fff;
        background: #004f9e;
      }
    }
  }
`
