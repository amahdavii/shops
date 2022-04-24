import tw from "twin.macro"
import { Colors } from "../../../constants/color"
import styled from "styled-components"
import { BetweenRow, CenterContainer, ColumnContainer, FlexContainer } from "@/src/styles/sharedStyle"

export const SearchContainer = styled.div`
  ${tw`
        rounded-lg
        flex
        justify-center
        items-center
        border
        w-full
        px-5
        py-1

    `}

`
export const SearchInput = styled.input`
  ${tw`
       appearance-none 
       bg-transparent 
       border-none 
       w-full 
       text-gray-700 
       mr-1 py-1 
      //  px-2 
       leading-tight 
       focus:outline-none
    `}

`

export const SearchMainContainer = styled.div`
  ${tw`
    flex
    items-center
    z-[99]     
    w-[50%]
    m-5


  `}

`
export const SearchRelativeContainer = styled.div`
  ${tw`
    flex-1
    relative
  `}
`
export const SearchBack = styled.div`
  ${tw`
    w-[100vw]
    h-[100vh]
    fixed
    top-0
    left-0
    right-0
    bottom-0
    bg-[transparent]
    z-[3]
  `}
`
export const SearchResult = styled.div`
  ${tw`
    fixed
    flex
    flex-col
    mr-[40px]
    w-[510px]
    top-[3%]
    rounded-[5px]
    px-[20px]
    z-[4]
    bg-[#fff]
    border-[1px]
    border-[#dcdfe1]
    transition-all
    max-h-[70vh]
  `}
    box-shadow: 0 1.5px 3px 0 #a8aeb4;

  input {
      width: 100%;
      order: 2;
      border: none;
      font-family: inherit;
      outline: none;
      padding: 3px 5px;
      background: none;
      &::placeholder {
          color: #99acc2;
      }
  }

`
export const SearchResultButton = styled.div`
  ${tw`
    cursor-pointer
    border-0
    bg-none
  `}
`
export const SearchResultHeader = styled.div`
  ${tw`
    flex
    border-b-[1px]
    border-b-[#dcdfe1]
    py-[10px]
    mb-[15px]
  `}
`
export const SearchResultHeaderClose = styled.div`
  ${tw`
    absolute
    left-[20px]
    cursor-pointer
  `}
`

export const SearchResultRowTitle = styled(BetweenRow)`
  ${tw`
    text-[#494f55]
    my-[20px]
  `}
`

export const SearchResultRowTitleBold = styled.span`
  ${tw`
    font-extrabold    
  `}
`
export const SearchResultRowTitleBoldClick = styled.span`
  ${tw`
  cursor-pointer 
  font-extrabold    

  `}
`
export const SearchResultBoxContainer = styled(ColumnContainer)`
  ${tw`
    max-h-[300px]
    flex-1
    overflow-scroll
    mb-[10px]
  `}
`
export const SearchResultBox = styled(FlexContainer)`
  ${tw`
    rounded-[5px]
    p-[10px]
    border-[1px]
    border-[#dcdfe1]
    mb-[5px]

  `}

  span{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  img{
    max-width: 50px;
    max-height: 50px;
    min-width: 50px;
    min-height: 50px;
    margin-left: 10px;

  }
`
export const SearchResultBoxDetail = styled(ColumnContainer)`
  ${tw`
    flex-1
    text-[#494f55]
    w-[80%]
  `}
`
export const SearchResultDetailTitleBox = styled.span`
  ${tw`
    mt-[5px]
    flex
    max-w-[70%]
    text-[11px]
  `}
  span{
    flex: 1;
  }
`
export const SearchResultDetailTitle = styled.span`
  ${tw`
    mb-[5px]
    text-[14px]
  `}
`


export const SearchResultDetailTitleBoxContent = styled.span`
  ${tw`
    flex-1
    text-[#494f55]
    w-[80%]
  `}
`

export const SearchNoResult = styled(CenterContainer)`
  ${tw`
    w-[100%]
    py-[20px]
    text-[16px]
  `}
`

export const SearchCategoryBox = styled(ColumnContainer)`
  ${tw`
    border-t-[1px]
    border-t-[#dcdfe1]
    min-h-[20vh]
    max-h-[20vh]
    overflow-scroll
    pt-[10px]
    mt-[10px]
    
  `}
`