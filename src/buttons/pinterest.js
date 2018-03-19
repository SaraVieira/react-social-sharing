import React from 'react'
import is from 'styled-is'
import ButtonFactory from './factory'
import {
  PinterestIconFill,
  PinterestIconCircle,
  PinterestIconCircleSolid
} from '../svg/pinterest.js'
import { SharingButton } from '../common'
import links from '../consts'

const Pinterest = SharingButton.extend`
  background-color: #bd081c;
  border-color: #bd081c;

  &:hover,
  &:active {
    background-color: #8c0615;
    border-color: #8c0615;
  }
`

export default ({ link, message, ...props }) => (
  <ButtonFactory
    {...props}
    name="Pinterest"
    href={links.pinterest(link, message)}
    buttonComponent={Pinterest}
    iconFill={PinterestIconFill}
    iconCircle={PinterestIconCircle}
    iconCircleSolid={PinterestIconCircleSolid}
  />
)
