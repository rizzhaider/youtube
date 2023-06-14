import React, {memo} from 'react'

const ChildDemo = ({handler}) => {
    console.log("children render")
  return (
    <div>childDemo</div>
  )
}

export default memo(ChildDemo)