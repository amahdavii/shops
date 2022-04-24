import tw from 'twin.macro'
import styled from 'styled-components'

export const LoginBackground = styled.main`
  ${tw`  
      w-full   
      h-screen		
      bg-no-repeat
      bg-cover
      bg-center
  `}

  background-image: ${(props) => `url(${props.imgUrl.src})`};
  @media (max-width: 639px) {
    display: none;
  }
`

export const LoginContainer = styled.div`
  width: 460px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.06);
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 639px) {
    display: none;
  }
`
