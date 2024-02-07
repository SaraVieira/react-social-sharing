import React from 'react'
import styled from 'styled-components'
import ButtonFactory from './factory.js'
import { SharingButton } from '../common.js'
import links from '../consts.js'
import { XIconCircle, XIconFill } from '../svg/X.js'

const XButton = styled(SharingButton)`
  background-color: #000000;
  border-color: #202223;
  transition: transform 200ms ease;
  &:hover,
  &:active {
    transform: scale(1.05);
  }
`

export default ({ link, name, message, ...props }) => (
  <ButtonFactory
    {...props}
    name={name || 'X'}
    href={links.x(link, message)}
    buttonComponent={XButton}
    iconFill={XIconFill}
    iconCircle={XIconCircle}
    iconCircleSolid={XIconCircle}
  />
)
