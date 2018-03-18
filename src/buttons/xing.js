import React from 'react'
import is from 'styled-is'
import ButtonFactory from './factory'
import {
  XingIconFill,
  XingIconCircle,
  XingIconCircleSolid
} from '../svg/xing.js'
import { SharingButton } from '../common'
import links from '../consts'

const Xing = SharingButton.extend`
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
    name="Xing"
    href={links.xing(link)}
    buttonComponent={Xing}
    iconFill={XingIconFill}
    iconCircle={XingIconCircle}
    iconCircleSolid={XingIconCircleSolid}
  />
)
