import tw from "twin.macro"
import styled from "styled-components"
import {CenterContainer} from "src/styles/sharedStyle";

export const PagerItems = styled.ul`
   ${tw`
     list-none
     flex
     justify-center
     items-center
     p-[2%]
     transition-all
     delay-75
  `}
`

export const PaginationItem = styled(CenterContainer)`
   ${tw`
     w-[18px]
     h-[18px]
     rounded-[10px]
     p-[15px]
     ml-[5px]
     text-[20px]
     text-[#494f55]
     cursor-pointer
     transition-all
     delay-75

  `}

  &:last-child{
    border-right: 1.5px solid #dcdfe1;
    border-radius: 0;
    margin-right: 20px;
    width: 50px;
  }
`
export const PaginationItemsspan = styled.span`
   ${tw`
      text-decoration[none]
      text-[#494f55]
      cursor-pointer
      transition-all
      delay-75
  `}
`
export const IsActive = styled(PaginationItem)`
    background-color: #0747a6;
    span {
      color: #fff;
    }
`

export const LiSelect = styled.li`
    ${tw`
      cursor-pointer
      mx-5
      h-[20px]
      flex
      items-center
      justify-center
      transition-all
      delay-75
    `}

/* transform: rotate(180deg); */
`
