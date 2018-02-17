import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  TelegramIconFill,
  TelegramIconCircle,
  TelegramIconCircleSolid
} from './svg/telegram.js'
import { SharingButton, Link, Icon } from './common'
import links from './consts'

const Telegram = SharingButton.extend`
  background-color: #1a7576;
  border-color: #1a7576;

  &:hover,
  &:active {
    background-color: #114c4c;
    border-color: #114c4c;
  }
`

export default ({
  small,
  solid,
  link,
  message,
  medium,
  big,
  circle,
  solidcircle
}) => (
  <Link href={links.telegram(message, link)} target="_blank" aria-label="">
    <Telegram small={small}>
      <Icon solid={solid} solidcircle={solidcircle} aria-hidden="true">
        {solid && small ? <TelegramIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <TelegramIconFill /> Telegram{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <TelegramIconFill /> Share on Telegram{' '}
          </Fragment>
        ) : null}
        {circle && small ? <TelegramIconCircle /> : null}
        {circle && medium ? (
          <Fragment>
            <TelegramIconCircle /> Telegram{' '}
          </Fragment>
        ) : null}
        {circle && big ? (
          <Fragment>
            <TelegramIconCircle /> Share on Telegram{' '}
          </Fragment>
        ) : null}
        {solidcircle && small ? <TelegramIconCircleSolid /> : null}
        {solidcircle && medium ? (
          <Fragment>
            <TelegramIconCircleSolid /> Telegram{' '}
          </Fragment>
        ) : null}
        {solidcircle && big ? (
          <Fragment>
            <TelegramIconCircleSolid /> Share on Telegram{' '}
          </Fragment>
        ) : null}
      </Icon>
    </Telegram>
  </Link>
)
