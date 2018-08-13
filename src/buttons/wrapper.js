import React, { Fragment } from 'react'

export default (
  small,
  solid,
  medium,
  big,
  circle,
  solidcircle,
  Fill,
  Circle,
  CircleSolid,
  name
) => {
  const buttonLabel = !small ? (
    <span>{!big ? name : `Share on ${name}`}</span>
  ) : null

  if (solid) {
    return (
      <Fragment>
        {Fill()} {buttonLabel}
      </Fragment>
    )
  }

  if (circle) {
    return (
      <Fragment>
        {Circle()} {buttonLabel}
      </Fragment>
    )
  }

  if (solidcircle) {
    return (
      <Fragment>
        {CircleSolid()} {buttonLabel}
      </Fragment>
    )
  }

  return (
    <Fragment>
      {Fill()} {buttonLabel}
    </Fragment>
  )
}
