import React from 'react'
import ButtonFactory from './factory'
import {
  TelegramIconFill,
  TelegramIconCircle,
  TelegramIconCircleSolid
} from '../svg/telegram.js'
import { SharingButton } from '../common'
import links from '../consts'

const Telegram = SharingButton.extend`
  background-color: #54a9eb;
  border-color: #54a9eb;

  &:hover,
  &:active {
    background-color: #4b97d1;
    border-color: #4b97d1;
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
