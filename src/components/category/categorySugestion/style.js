import tw from "twin.macro"
import styled from "styled-components"
import { Container ,BetweenRow,ColumnContainer} from "src/styles/sharedStyle";

export const CategorySuggestionConatiner = styled.div`
   ${tw`
        // w-[100vw]
        overflow-hidden
        absolute
        left-0
        right-0
        pt-[30px]
        pb-[70px]
  `}
   background-image: ${(props) => `url(${props.imgUrl.src})`};  
   /* width:100vw!important ; */
`

export const CategoryConatiner = styled(Container)`
   ${tw`
        flex
        flex-col
        w-full
  `}
`

export const TitleSuggestion = styled.span`
   ${tw`

        text-[#fff]
        text-[20px]
        font-bold
        mb-[50px]
  `}
`
export const TitleSuggestionCategory = styled.span`
   ${tw`

        text-[#fff]
        text-[15px]
        font-bold
        mt-[10px]
  `}
`

export const CategoryRowConatiner = styled(BetweenRow)`
   ${tw`
        
        w-full
        overflow-scroll
  `}
`


export const SuggestionItem = styled(ColumnContainer)`
   ${tw`        
        min-w-[120px]
        ml-[20px]
        mb-[20px]
  `}

  &:last-child{
      margin-left:0 ;
  }
`