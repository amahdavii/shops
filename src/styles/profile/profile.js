import tw from 'twin.macro'
import styled from 'styled-components'
import {
  CenterContainer,
  FlexContainer,
  ColumnContainer,
} from '../../styles/sharedStyle'

export const MainContainer = styled(ColumnContainer)`
  ${tw`
        bg-[#f5f8fa]
        min-h-[100vh]
        pt-[410px]
        pb-10
  `}
`

export const PageContainer = styled(FlexContainer)`
  ${tw`
     justify-between
  `}
`

export const SubCatContainer = styled(ColumnContainer)`
  ${tw`
     min-w-[20%]
     bg-white
     rounded-md		
     p-5
     h-[245px]
  `}
`

export const SubCatBoxSimple = styled(ColumnContainer)`
  ${tw`
     w-full
     rounded-[10px]
     border-[1px]
     border-[#dcdfe1]
     text-[14px]
     mb-[20px]
     bg-[#fff]
     text-[#494f55]
    //  p-[20px]

  `}
`

export const SecondRow = styled(ColumnContainer)`
  ${tw`
     w-[78%]
     bg-white
     rounded-md	
     p-5	
  `}
`
export const ProfileTitle = styled.h3`
  color: #494f55;
  border-bottom: 1px solid #dcdfe1;
  padding-bottom: 12px;
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 15px;
`

export const ProfileList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

export const ProfileListItem = styled.li`
  color: #494f55;
  font-weight: 500;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  a {
    display: block;
  }

  &:hover {
    color: #004f9e;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
`

export const ProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-bottom: 15px;
`
export const ProfileInfoInput = styled.input`
  border: 1px solid #dcdfe1;
  border-radius: 5px;
  outline: none;
  padding: 10px;
`
export const ProfileInfoLabel = styled.label`
  color: #494f55;
  font-weight: 500;
  margin-bottom: 8px;
`

export const ProfileBtn = styled.button`
  display: inline-block;
  width: 100px;
  background: #004f9e;
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: 10px;
  align-self: flex-end;
  margin-left: 20px;
  font-weight: 600;
  margin-top: 20px;
`
export const ProfileMainMobile = styled.section`
  @media (max-width: 639px) {
    background: #fff;
    margin-top: 15px;
    min-height: 80vh;
    height: 100%;
    padding: 15px;
  }
`

export const ProfileItemsMobile = styled.ul`
  @media (max-width: 639px) {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
`
export const ProfileItemMobile = styled.li`
  @media (max-width: 639px) {
    color: #494f55;
    font-weight: 500;

    a {
      display: flex;
      align-items: center;
      font-size: 15px;
      justify-content: space-between;
      padding: 12px 0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #f5f8fa;
    }
  }
`
export const ProfileItemTitle = styled.div`
  @media (max-width: 639px) {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }
`

export const ProfileWelcomemsg = styled.span`
  @media (max-width: 639px) {
    display: block;
    font-size: 16.5px;
    padding: 15px;
    color: #494f55;
    font-weight: 500;
  }
`

export const ProfileUserSection = styled.section`
  @media (max-width: 639px) {
    padding: 0 15px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
`
