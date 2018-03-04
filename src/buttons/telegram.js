import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  TelegramIconFill,
  TelegramIconCircle,
  TelegramIconCircleSolid
} from '../svg/telegram.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Telegram = SharingButton.extend`
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
    href={links.telegram(message, link)}
    target="_blank"
    aria-label="Share on Telegram"
    rel="noreferrer noopener"
    simple={simple}
    simpleReverse={simpleReverse}
  >
    {simple || simpleReverse ? (
      <TelegramIconFill {...props} />
    ) : (
      <Telegram small={small} {...props}>
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
            TelegramIconFill,
            TelegramIconCircle,
            TelegramIconCircleSolid,
            'Telegram'
          )}
        </Icon>
      </Telegram>
    )}
  </Link>
)

export default Button
