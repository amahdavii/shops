import tw from 'twin.macro'
import styled from 'styled-components'

export const ShoppingCardContainer = styled.div`
  /* width: 350px; */
  /* height: 220px; */
  background-color: #fff;
  border: solid 1px #dcdfe1;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;

  @media (max-width: 639px) {
    border-radius: 5px;
  }
`

export const ShoppingCardImage = styled.div`
  /* background-image: ${(props) => `
   linear-gradient(
      rgba(0, 75, 147, 0.5),
      rgba(0, 75, 147, 0.5)
    ),
  url(${props.imgUrl})
  `}; */

  background-image: linear-gradient(
      rgba(0, 75, 147, 0.5),
      rgba(0, 75, 147, 0.5)
    ),
    url('/assets/image/daily.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 10px;
`
export const ShoppingCardBadge = styled.a`
  display: inline-block;
  cursor: pointer;
`

export const ShoppingCardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`

export const ShoppingCardTitle = styled.h3`
  color: #fff;
  font-weight: 600;
`

export const ShoppingBuyBtn = styled.a`
  display: inline-flex;
  align-items: center;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  span {
    display: flex;
    margin-right: 5px;
  }
`
export const DeliverTimeContainer = styled.div`
  padding: 10px 20px;
`

export const DeliverTimeDesc = styled.p`
  color: #ed7203;
  font-size: 14px;
  font-weight: 500;
`

export const DescriiptionRow = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => `${props.color}`};
  margin: 10px 0px;
  @media (max-width: 370px) {
    font-size: 13.5px;
  }
`
export const LineBetween = styled.div`
  display: flex;
  height: 1px;
  background: #dcdfe1;
  width: 100%;
`
