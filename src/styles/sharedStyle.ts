import tw from "twin.macro"
import styled from "styled-components"

///container style
export const Container = styled.div`
  ${tw`
      container
      mx-auto
  `}
`
///all flex style
export const CenterContainer = styled.div`
  ${tw`
        flex
        items-center
        justify-center
    `}
`
export const CenterFullContainer = styled.div`
  ${tw`
        flex
        items-center
        justify-center
        h-full
    `}
`

export const BetweenRow = styled.div`
  ${tw`
        flex
        items-center
        justify-between
    `}
`
export const FitbetweenRow = styled.div`
  ${tw`
        w-full
        flex
        items-center
        justify-between
    `}
`
export const ColumnContainer = styled.div`
  ${tw`
        flex
        flex-col
    `}
`
export const ColumnFitContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
    `}
`
export const ColumnCenterFitContainer = styled.div`
  ${tw`
        flex
        flex-col
        items-center
        justify-center
        flex-1
    `}
`

export const RowContainer = styled.div`
  ${tw`
        flex
        items-center
    `}
`
export const FitContainerEnd = styled.div`
  ${tw`
        flex-1
        flex
        items-center
        justify-end
    `}
`
export const FitContainerStart = styled.div`
  ${tw`
        flex-1
        flex
        items-center
        justify-start
    `}
`

export const FlexContainer= styled.div`
    ${tw`
       flex
    `}
`

interface TextProps {
    size?: number;
    color?: string; 
    margin?: string; 

}
export const BoldSpan= styled.span<TextProps>`
    ${tw`
        // mb-[20px]    
        text-[#494f55]
        font-bold

    `}
    margin: ${props=>props.margin ?props.margin :0};
    font-size: ${props=>props.size ?`${props.size}px` :'20px'};
    color: ${props=>props.color ?`${props.color}` :'#494f55'};



`
export const TextChangable= styled.span<TextProps>`
    font-size: ${props=>props.size ?`${props.size}px` :'32px'};
    color: ${props=>props.color ?`${props.color}` :'#494f55'};
    margin: ${props=>props.margin ?props.margin :0};

`

interface IconProps {
    size?: number;
    color?: string;    
    bold?:boolean;
    margin?:string
  }
export const IconBox= styled.span<IconProps>`
    font-size: ${props=>props.size ?`${props.size}px` :'32px'};
    color: ${props=>props.color ?`${props.color}` :'#494f55'};
    font-weight: ${props=>props.bold ?'600' :'normal'}!important;
    margin: ${props=>props.size ?props.margin :0};

    display: flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
`



