import React from 'react'
import ButtonFactory from './factory'
import {
  WhatsappIconFill,
  WhatsappIconCircle,
  WhatsappIconCircleSolid
} from '../svg/whatsapp.js'
import { SharingButton } from '../common'
import links from '../consts'

const Whatsapp = SharingButton.extend`
  background-color: #25d366;
  border-color: #25d366;

  &:hover,
  &:active {
    background-color: #1da851;
    border-color: #1da851;
  }
`

export default ({ link, ...props }) => (
  <ButtonFactory
    {...props}
    name="WhatsApp"
    href={links.whatsapp(link)}
    buttonComponent={Whatsapp}
    iconFill={WhatsappIconFill}
    iconCircle={WhatsappIconCircle}
    iconCircleSolid={WhatsappIconCircleSolid}
  />
)
