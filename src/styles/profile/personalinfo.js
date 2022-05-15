import styled from 'styled-components'

export const PersonalInfoContainer = styled.section`
  @media (max-width: 639px) {
    background-color: #fff;
    padding: 15px;
    min-height: 80vh;
    height: 100%;
    margin-top: 15px;
  }
`

export const ProfileInfoItems = styled.ul`
  @media (max-width: 639px) {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
`

export const ProfileInfoItem = styled.li`
  @media (max-width: 639px) {
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    &:not(:last-child) {
      border-bottom: 1px solid #efefef;
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }
`

export const ProfileInfoTitleArea = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ProfileInfoTitle = styled.div`
  @media (max-width: 639px) {
    font-weight: 500;
  }
`
export const ProfileInfoDesc = styled.span`
  @media (max-width: 639px) {
    font-weight: 500;
    color: #6d757d;
    margin-top: 5px;
  }
`
