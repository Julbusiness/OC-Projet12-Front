import React from 'react'

/**
 * Function that returns JSX (home page)
 * @returns JSX
 */
export default function EmptyPage(props) {
  return (
    <div className='container'>{props.page}</div>
  )
}
