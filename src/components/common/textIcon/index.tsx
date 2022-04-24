import Image from "next/image"
import { TextIconContainer } from "./style"
import * as constants from '../../../constants'
import { IconBox } from "@/src/styles/sharedStyle"
interface textIcon {
  firstIcon?: string
  firstIconColor?: string
  title?: string
  secondIcon?:string
  secondIconColor?:string
  iconSizeFirst?:number
  iconSizeSecond?:number
  onClick?:any,
  imageIcon?:string,
  boldIcon?:boolean,
  color?:string
  hover?:string

}

export default function TextIcon(props: textIcon) {
  const { 
    firstIcon,
    title,
    secondIcon,
    iconSizeFirst,
    iconSizeSecond,
    onClick,
    firstIconColor,
    secondIconColor,
    imageIcon,
    boldIcon,
    color,
    hover
  } = props
  return (
    <TextIconContainer
    color={color}
    onClick={onClick}
    hover={hover}
    >
      {imageIcon ?<Image src={imageIcon} height={iconSizeFirst ?iconSizeFirst :24} width={iconSizeFirst ?iconSizeFirst :24}/> :null}
      {firstIcon 
      ?<IconBox color={firstIconColor} data-icon={firstIcon} size={iconSizeFirst} bold={boldIcon ?true :false}/>
      // ?<Image src={icon} height={iconSize ?iconSize :24} width={iconSize ?iconSize :24}/> 
      :null
      }
      <span>{title}</span>
      {/* {secondIcon ?<Image src={secondIcon} height={iconSizeSecond ?iconSizeSecond :8} width={iconSizeSecond ?iconSizeSecond :13}/> :null}       */}
      {secondIcon 
      ?<IconBox color={secondIconColor} data-icon={secondIcon} size={iconSizeSecond}/>
      // ?<Image src={icon} height={iconSize ?iconSize :24} width={iconSize ?iconSize :24}/> 
      :null
      }
    </TextIconContainer>
  )
}
