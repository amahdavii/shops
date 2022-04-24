import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperCore, { Navigation } from 'swiper'
import { AbsolutNavleft, AbsolutNavRight, SwiperContainer } from './style'
import * as constant from '../../../constants'
import Image from 'next/image'
import { useState } from 'react'
import { IconBox } from '@/src/styles/sharedStyle'
SwiperCore.use([Navigation])

const SwiperComponent = (props) => {
  const [beginning, setBeginning] = useState(true)
  const [end, setEnd] = useState(false)

  const handleSlidChange = (e) => {
    setBeginning(e.isBeginning)
    setEnd(e.isEnd)
  }

  return (
    <SwiperContainer width={props.width}>
      <Swiper
        allowTouchMove={true}
        onSlideChange={handleSlidChange}
        breakpoints={props.breakpoints}
        spaceBetween={props.space}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={false}
        navigation={{
          prevEl: `.prev${props.name}`,
          nextEl: `.next${props.name}`,
        }}
        //   navigation={false}
        className="mySwiper"
      >
        {props.children}
      </Swiper>

      <div className={`hidden md:block prev${props.name}`}>
        {!beginning ? (
          <AbsolutNavRight>
            <IconBox size={24} data-icon="~" />
          </AbsolutNavRight>
        ) : null}
      </div>
      <div className={`hidden  md:block next${props.name}`}>
        {!end ? (
          <AbsolutNavleft>
            <IconBox size={24} data-icon="J" />
          </AbsolutNavleft>
        ) : null}
      </div>
    </SwiperContainer>
  )
}

export default SwiperComponent
