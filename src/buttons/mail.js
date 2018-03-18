import React from 'react'
import is from 'styled-is'
import ButtonFactory from './factory'
import {
  EmailIconFill,
  EmailIconCircle,
  EmailIconCircleSolid
} from '../svg/mail.js'
import { SharingButton } from '../common'
import links from '../consts'

const Email = SharingButton.extend`
  background-color: #777777;
  border-color: #777777;

  &:hover,
  &:active {
    background-color: #5e5e5e;
    border-color: #5e5e5e;
  }
`

export default ({ link, ...props }) => (
  <ButtonFactory
    {...props}
    name="E-mail"
    href={links.mail(link)}
    buttonComponent={Email}
    iconFill={EmailIconFill}
    iconCircle={EmailIconCircle}
    iconCircleSolid={EmailIconCircleSolid}
  />
)
