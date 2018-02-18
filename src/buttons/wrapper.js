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
  if (solid) {
    if (small) {
      return Fill()
    }

    if (medium) {
      return (
        <Fragment>
          {Fill()} {name}{' '}
        </Fragment>
      )
    }

    if (big) {
      return (
        <Fragment>
          {Fill()} share on {name}{' '}
        </Fragment>
      )
    }

    return (
      <Fragment>
        {Fill()} {name}{' '}
      </Fragment>
    )
  }

  if (circle) {
    if (small) {
      return Circle()
    }

    if (medium) {
      return (
        <Fragment>
          {Circle()} {name}{' '}
        </Fragment>
      )
    }

    if (big) {
      return (
        <Fragment>
          {Circle()} share on {name}{' '}
        </Fragment>
      )
    }

    return (
      <Fragment>
        {Circle()} {name}{' '}
      </Fragment>
    )
  }

  if (solidcircle) {
    if (small) {
      return CircleSolid()
    }

    if (medium) {
      return (
        <Fragment>
          {CircleSolid()} {name}{' '}
        </Fragment>
      )
    }

    if (big) {
      return (
        <Fragment>
          {CircleSolid()} share on {name}{' '}
        </Fragment>
      )
    }

    return (
      <Fragment>
        {CircleSolid()} {name}{' '}
      </Fragment>
    )
  }

  return (
    <Fragment>
      {Fill()} {name}{' '}
    </Fragment>
  )
}
