import tw from 'twin.macro'
import styled from 'styled-components'
import {
  BetweenRow,
  ColumnContainer,
  CenterContainer,
} from 'src/styles/sharedStyle'
// import Button from '../../components/common/button'

export const ContactSection = styled(ColumnContainer)`
  ${tw`
    bg-[#fff]
    rounded-[5px]
  `}
`

export const ContactContainer = styled(ColumnContainer)`
  ${tw`
    pt-[50px]
    px-[50px]
  `}
`

export const ContactHeader = styled(BetweenRow)`
  ${tw`
    border-b-[#dcdfe1]
    border-b-[1px]
    w-full
    py-[20px]
    mb-[20px]
  `}
`
export const LinkTitle = styled.a`
  ${tw`
    text-[#ed7203]
    text-decoration[none]
    outline-none
  `}
`
export const ContactChildren = styled(BetweenRow)`
  ${tw`
    w-full
    overflow-hidden
    h-[630px]
    mt-[50px]
  `}
`
export const InputThinField = styled.input`
  ${tw`
    outline-none
    h-[50px]
    w-[95%]
    border-[#dcdfe1]
    border-[1px]
    rounded-[5px]
    px-[10px]
    my-[10px]
  `}
`
export const InputBigField = styled.input`
  ${tw`
    outline-none
    h-[150px] 
    w-[95%]
    border-[#dcdfe1]
    border-[1px]
    rounded-[5px]
    px-[10px]
    my-[10px]
  `}
`

export const FlexFit = styled(ColumnContainer)`
  ${tw`
    w-[49%]
    overflow-hidden 
    h-full
  `}
`

export const ContactSendButton = styled.div`
  ${tw`
    w-[95%]
    flex
    justify-end
    mt-[10px]
  `}
`

export const ContactMap = styled(CenterContainer)`
  ${tw`
    mt-[35px]
    overflow-hidden
    rounded-[10px]
  `}
`
export const ContactFooter = styled(BetweenRow)`
  ${tw`
    w-full
    h-[154]
    mt-[100px]
    bg-[#fff]
    justify-center
    items-center
  `}
  box-shadow: 0 -4px 20px 0 rgba(0, 79, 158, 0.08);
`
export const ContactFooterItem = styled(ColumnContainer)`
  ${tw`
    flex-1
    border-l-[1px]
    border-l-[#dcdfe1]
    relative
    justify-between
    items-center
    my-[40px]
  `}
  &:last-child {
    border-left: 0px;
  }
`
export const ContactFooterItemCircle = styled(CenterContainer)`
  ${tw`
    absolute
    h-[50px]
    w-[50px]
    rounded-[25px]    
    bg-[#fff]

  `}
  box-shadow: 0 3px 6px 0 rgba(0, 79, 158, 0.08);
  top: -80%;
  left: 50%;
  transform: translate(-50%, -50%);
`
