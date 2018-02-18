import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  HackerIconFill,
  HackerIconCircle,
  HackerIconCircleSolid
} from '../svg/hacker.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Hacker = SharingButton.extend`
  background-color: #ff6600;
  border-color: #ff6600;

  &:hover,
  &:active {
    background-color: #fb6200;
    border-color: #fb6200;
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
  solidcircle
}) => (
  <Link href={links.hacker(message, link)} target="_blank" aria-label="">
    <Hacker small={small}>
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
          HackerIconFill,
          HackerIconCircle,
          HackerIconCircleSolid,
          'HackerNews'
        )}
      </Icon>
    </Hacker>
  </Link>
)

export default Button
