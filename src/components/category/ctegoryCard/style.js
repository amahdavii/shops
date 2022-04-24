import tw from "twin.macro"
import styled from "styled-components"
import Image from "next/image";
import { BoldSpan } from "src/styles/sharedStyle";

export const CategoryCardConatiner = styled.div`
  ${tw`
        flex
        flex-col
        overflow-visible
        justify-end
        items-center
        mt-[50px]
        mb-[70px]
  `}
  background-repeat: no-repeat;
  background-size: contain;
  background-image: ${(props) => `url(${props.imgUrl.src})`};
  background-position: bottom;

  @media (max-width: 639px) {
    ${tw`
        mt-[25px]
        mb-[25px]
  `}

  img {
     width: 70px;
  }
  }
`
export const ImageBox = styled.img`
   ${tw`
        
        // h-[200px]
        h-[20vw]
        // w-[150px]
        mb-[-10px]
        object-cover
  `}
`

export const CategoryName = styled(BoldSpan)`
  ${tw`
        
       mt-[10px]
       mb-[10px]

  `}

  @media (max-width: 639px) {
     font-size: 13px;
     white-space: nowrap;
  }
`