import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  XingIconFill,
  XingIconCircle,
  XingIconCircleSolid
} from '../svg/xing.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Xing = SharingButton.extend`
  background-color: #1a7576;
  border-color: #1a7576;

  &:hover,
  &:active {
    background-color: #114c4c;
    border-color: #114c4c;
  }
`

const Button = ({
  small,
  solid,
  link,
  message,
  medium,
  big,
  circle,
  solidcircle,
  simple,
  simpleReverse,
  ...props
}) => (
  <Link
    href={links.xing(message, link)}
    target="_blank"
    aria-label="Share on Xing"
    rel="noreferrer noopener"
    simpleReverse={simpleReverse}
    simple={simple}
  >
    {simple || simpleReverse ? (
      <XingIconFill {...props} />
    ) : (
      <Xing small={small} {...props}>
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
            XingIconFill,
            XingIconCircle,
            XingIconCircleSolid,
            'Xing'
          )}
        </Icon>
      </Xing>
    )}
  </Link>
)

export default Button
