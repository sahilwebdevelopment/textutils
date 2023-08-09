import React from 'react'

export default function Alert(props) {
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
  return (
    props.alert && <>
 <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  {props.alert.message}
</div>
    </>
  )
}
