import tw from 'twin.macro'
import styled from 'styled-components'
import { ColumnContainer } from 'src/styles/sharedStyle'

export const FaqBoxQuestionItem = styled(ColumnContainer)`
  ${tw`
        px-[30px]
        py-[15px]
        cursor-pointer
        justify-between
        mt-[15px]
        border-b-[1px]
        border-b-[rgba(37, 56, 88, 0.26)]
        text-[20px]
        text-[#494f55]
    `}
  &:last-child {
    border: 0px;
  }

  @media (max-width: 639px) {
    ${tw`
        px-[0]
        text-[16px]
        line-height[1.7]
    `}
  }
`
export const FaqBoxReplyItem = styled.span`
  ${tw`
        text-[17px]
        text-[#6d757d]
        text-align[right]
        mt-[30px]
        mb-[20px]
    `}

  @media (max-width: 639px) {
    ${tw`
        mt-[5px]
        mb-[0]
    `}
  }
`
