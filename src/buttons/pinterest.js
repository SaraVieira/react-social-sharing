import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  PinterestIconFill,
  PinterestIconCircle,
  PinterestIconCircleSolid
} from '../svg/pinterest.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Pinterest = SharingButton.extend`
  background-color: #bd081c;
  border-color: #bd081c;

  &:hover,
  &:active {
    background-color: #8c0615;
    border-color: #8c0615;
  }
`

const Button = ({
  small,
  solid,
  message,
  link,
  medium,
  big,
  circle,
  solidcircle,
  simple,
  simpleReverse,
  ...props
}) => (
  <Link
    href={links.pinterest(message, link)}
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Share on Pinterest"
    simple={simple}
    simpleReverse={simpleReverse}
  >
    {simple || simpleReverse ? (
      <PinterestIconFill {...props} />
    ) : (
      <Pinterest small={small} {...props}>
        <Icon
          solid={(!solid && !circle && !solidcircle) || solid}
          solidcircle={solidcircle}
          aria-hidden="true"
        >
          {wrapper(
            small,
            solid,
            medium,
            big,
            circle,
            solidcircle,
            PinterestIconFill,
            PinterestIconCircle,
            PinterestIconCircleSolid,
            'Pinterest'
          )}
        </Icon>
      </Pinterest>
    )}
  </Link>
)

export default Button
