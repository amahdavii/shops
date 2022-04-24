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
