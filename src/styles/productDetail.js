import styled from 'styled-components'
import { symbolName } from 'typescript'

export const ProductDetailContainer = styled.section`
  @media (max-width: 639px) {
    background-color: #fff;
    margin-top: 13px;
    padding: 15px;
  }
`
export const ProductDetailItem = styled.div`
  @media (max-width: 639px) {
    display: flex;
    justify-content: center;
  }
`

export const ProductSliderArea = styled.div`
  @media (max-width: 639px) {
    border-bottom: 1px solid #eee;
    padding-bottom: 25px;
  }
`
export const ProductDetailDescArea = styled.div`
  @media (max-width: 639px) {
    padding: 25px 0;
    border-bottom: 1px solid #eee;

    h3 {
      font-weight: 600;
      color: #494f55;
    }
  }
`

export const ProductDetailDesc = styled.div`
  @media (max-width: 639px) {
    padding: 0 5px;
    margin-top: 10px;
  }
`

export const ProducDetailItem = styled.span`
  @media (max-width: 639px) {
    display: inline-flex;
    width: 50%;
    padding: 0 5px;
    color: #494f55;
    margin: 5px 0;
    font-size: 15px;
    font-weight: 500;
    span {
      color: #004f9e;
      margin-right: 5px;
    }
  }
`
export const SimilarProduct = styled.section`
  @media (max-width: 639px) {
    padding-right: 15px;

    section > div:first-of-type > div {
      margin-left: 15px;
    }
  }
`
