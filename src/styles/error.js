import styled from 'styled-components'

export const ErrorPageMobileContainer = styled.main`
  @media (max-width: 639px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 15px;

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin: 30px 0 15px 0;
      color: #494f55;
      text-align: center;
      line-height: 1.6;
    }

    p {
      color: #6d757d;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 20px;
      text-align: center;
      line-height: 1.6;
    }

    a {
      display: inline-block;
      color: #fff;
      font-weight: 500;
      background: #004f9e;
      padding: 10px 25px;
      border-radius: 10px;
    }
  }
`
