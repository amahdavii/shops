import styled from 'styled-components'

export const EditProfileContainer = styled.section`
  @media (max-width: 639px) {
    background-color: #fff;
    padding: 15px;
    min-height: 80vh;
    height: 100%;
    margin-top: 15px;
  }
`

export const EditProfileTitle = styled.span`
  @media (max-width: 639px) {
    color: #494f55;
    font-weight: 600;
    font-size: 17px;
  }
`
export const EditProfileInput = styled.input`
  @media (max-width: 639px) {
    color: #6d757d;
    border-bottom: 1px solid #efefef;
    padding: 10px 0 15px 0;
    display: block;
    width: 100%;
    outline: none;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 20px;
  }
`
export const EditProfileBtn = styled.button`
  @media (max-width: 639px) {
    display: block;
    width: 100%;
    background: ${(props) => (props.active ? '#ed7203' : '#dcdfe1')};
    color: ${(props) => (props.active ? '#fff' : '#494f55')};
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
  }
`
export const ProfileCheckContainer = styled.div`
  @media (max-width: 639px) {
    margin-bottom: 15px;
  }
`

export const ProfileGenderContainer = styled.div`
  @media (max-width: 639px) {
    display: block;
    align-items: center;
    margin-bottom: 15px;
    label {
      font-size: 16px;
      font-weight: 500;
    }
  }
`
