import React from 'react'
import styled from 'styled-components'
import ButtonFactory from './factory'
import {
  EmailIconFill,
  EmailIconCircle,
  EmailIconCircleSolid
} from '../svg/mail.js'
import { SharingButton } from '../common'
import links from '../consts'

const Email = styled(SharingButton)`
  background-color: #777777;
  border-color: #777777;

  &:hover,
  &:active {
    background-color: #5e5e5e;
    border-color: #5e5e5e;
  }
`

export default ({ link, name, subject, body, ...props }) => (
  <ButtonFactory
    {...props}
    name={name || 'E-mail'}
    href={links.mail(link, subject, body)}
    target="_self"
    buttonComponent={Email}
    iconFill={EmailIconFill}
    iconCircle={EmailIconCircle}
    iconCircleSolid={EmailIconCircleSolid}
  />
)
