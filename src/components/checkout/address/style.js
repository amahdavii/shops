
import tw from 'twin.macro'
import styled from 'styled-components'
import {CenterContainer,ColumnContainer,RowContainer,BetweenRow} from 'src/styles/sharedStyle'


export const TitleBox = styled(BetweenRow)`
  ${tw` 
    mb-[20px]
  `}
`
export const AddressBox = styled(ColumnContainer)`
  ${tw`
    p-[20px]
    rounded-[10px]
    bg-[#fff]
    // min-h-[120px]
    justify-between    
    mb-[20px]
  `}
`
export const EditAddressSpan = styled.span`
  ${tw`
    text-[13px]
    text-[#004f9e]
    cursor-pointer
    font-bold

  `}
`
export const AddressItem = styled(RowContainer)`
  ${tw`
    cursor-pointer
    relative
    py-[20px]
    mt-[5px]
  `}
  background:${props=>props.edit ?'#fff4eb' :'transparent'} ;

`


export const HoverBox = styled(CenterContainer)`
  ${tw`
    w-full
    absolute
    top-0
    bottom-0
    left-0
    right-0
    bg-[rgba(136, 136, 136, 0.59)]
    text-[#fff]
  `}
  backdrop-filter: blur(3px);
   
`