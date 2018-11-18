import React from 'react'
import styled from 'styled-components'
import ButtonFactory from './factory'
import {
  TelegramIconFill,
  TelegramIconCircle,
  TelegramIconCircleSolid
} from '../svg/telegram.js'
import { SharingButton } from '../common'
import links from '../consts'

const Telegram = styled(SharingButton)`
  background-color: #1a7576;
  border-color: #1a7576;

  &:hover,
  &:active {
    background-color: #114c4c;
    border-color: #114c4c;
  }
`

export default ({ link, ...props }) => (
  <ButtonFactory
    {...props}
    name="Telegram"
    href={links.telegram(link)}
    buttonComponent={Telegram}
    iconFill={TelegramIconFill}
    iconCircle={TelegramIconCircle}
    iconCircleSolid={TelegramIconCircleSolid}
  />
)
