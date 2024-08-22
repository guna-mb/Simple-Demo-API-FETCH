import React from 'react'
import  Button from './Button'

const User = ({reqType,setReqType}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
<Button
buttonText="posts"
reqType={reqType}
setReqType={setReqType}
/>
<Button
buttonText="users"
reqType={reqType}
setReqType={setReqType}
/>
<Button
buttonText="Comments"
reqType={reqType}
setReqType={setReqType}
/>

    </form>
  )
}

export default User