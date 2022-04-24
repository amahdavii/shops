import { useState, useEffect } from 'react'
// import { useSendOtpApiMutation } from '../../../services/loginService'

import { OtpDesc, OtpTimer } from './style'

const OtpCounter = (props) => {
  const { initialMinute = 0, initialSeconds = 0, mobile } = props
  const [minutes, setMinutes] = useState(initialMinute)
  const [seconds, setSeconds] = useState(initialSeconds)
  // const [sendOtpApi] = useSendOtpApiMutation()

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  const sendOtpAgain = () => {
    let body = { mobile }
    // sendOtpApi(body)
    setSeconds(initialSeconds)
  }

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <button onClick={sendOtpAgain}>ارسال مجدد کد</button>
      ) : (
        <OtpDesc>
          {' '}
          ارسال مجدد کد تا{' '}
          <OtpTimer>
            {minutes > 0 ? `${minutes} :` : null}
            {seconds < 10 ? `${seconds}` : seconds}
          </OtpTimer>{' '}
          ثانیه دیگر
        </OtpDesc>
      )}
    </div>
  )
}

export default OtpCounter
