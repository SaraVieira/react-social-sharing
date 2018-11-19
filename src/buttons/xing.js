import React from 'react'
import styled from 'styled-components'
import ButtonFactory from './factory'
import {
  XingIconFill,
  XingIconCircle,
  XingIconCircleSolid
} from '../svg/xing.js'
import { SharingButton } from '../common'
import links from '../consts'

const Xing = styled(SharingButton)`
  background-color: #1a7576;
  border-color: #1a7576;

  &:hover,
  &:active {
    background-color: #114c4c;
    border-color: #114c4c;
  }
`

export default ({ link, message, ...props }) => (
  <ButtonFactory
    {...props}
    name="Xing"
    href={links.xing(link, message)}
    buttonComponent={Xing}
    iconFill={XingIconFill}
    iconCircle={XingIconCircle}
    iconCircleSolid={XingIconCircleSolid}
  />
)
