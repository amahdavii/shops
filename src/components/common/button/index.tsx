import { IconBox } from "@/src/styles/sharedStyle"
import Image from "next/image"
import { ComponentType } from "react"
import { ButtonContainer } from "./style"

interface Button {
  title?: string
  background: string
  border: string | Boolean
  color: string
  deactive: string | Boolean
  icon?:string
  iconSize?:number
  children?:any
  onClick?:any
  height?:string
  width?:string
  margin?:string


}

export default function Button(props: Button) {
  const { title, background, border, color, deactive,icon ,iconSize,onClick,height,width,margin} = props
  return (
    <ButtonContainer
      background={background}
      border={border}
      color={color}
      deactive={deactive}
      onClick={onClick}
      height={height}
      width={width}
      margin={margin}
    >
      {
      icon 
      ?<IconBox color={color} data-icon={icon} size={iconSize}/>
      // ?<Image src={icon} height={iconSize ?iconSize :24} width={iconSize ?iconSize :24}/> 
      :null
      }
      {title ?<span>{title}</span> :null}
      {props.children}
    </ButtonContainer>
  )
}
