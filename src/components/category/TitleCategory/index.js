import { ArrowLeft, RowContainerCenter, TitleBox, TitleSpan } from "./style"
import * as constants from 'src/constants'
import{RowContainer,IconBox} from 'src/styles/sharedStyle'

import Image from "next/image"
const TitleCategory=(props)=>{
    const{title,bg}=props

    const renderTitle=()=>(
        title.map((item,index)=>(
            <RowContainer key={index}>
                <TitleSpan>{item}</TitleSpan>
                <IconBox data-icon="J" size="24" />
            </RowContainer>
        ))
    )
    return(
        <TitleBox background={bg}>
            <RowContainer>
                <TitleSpan>{constants.strings.Common.nameStore}</TitleSpan>
                <IconBox data-icon="J" size="24" />
            </RowContainer>
            {renderTitle()}
        </TitleBox>
    )
}
export default TitleCategory