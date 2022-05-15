import { useState } from 'react'
import { FaqBoxQuestionItem, FaqBoxReplyItem } from './style'
import { BetweenRow, IconBox } from 'src/styles/sharedStyle'

const DropBox = (props) => {
  const { title, des } = props
  const [open, setOpen] = useState(false)

  const changeStatus = () => {
    setOpen(!open)
  }

  return (
    <>
      <FaqBoxQuestionItem>
        <BetweenRow onClick={changeStatus}>
          <span>{title}</span>
          <IconBox data-icon={open ? 'u' : 'l'} size="20" />
        </BetweenRow>
        <FaqBoxReplyItem style={{ display: open ? 'flex' : 'none' }}>
          <span>{des}</span>
        </FaqBoxReplyItem>
      </FaqBoxQuestionItem>
    </>
  )
}

export default DropBox
