import React from 'react'
import { useRef } from 'react'


export const Notification = ({text}) => {
  const notification = useRef(null)
  const removeNotification=()=>{
    return notification.current.remove()
  }
  return (
    <div className="bg-green-500 py-2 px-4 rounded-md text-white text-center fixed bottom-4 right-4 flex gap-4" ref={notification}>
        <p>{text}</p>
        <span className="cursor-pointer font-bold" onClick={removeNotification}><sup>X</sup></span>
    </div>
  )
}

export default Notification