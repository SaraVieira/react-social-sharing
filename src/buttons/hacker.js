import React from 'react'
import is from 'styled-is'
import ButtonFactory from './factory'
import {
  HackerIconFill,
  HackerIconCircle,
  HackerIconCircleSolid
} from '../svg/hacker.js'
import { SharingButton } from '../common'
import links from '../consts'

const Hacker = SharingButton.extend`
  background-color: #ff6600;
  border-color: #ff6600;

  &:hover,
  &:active {
    background-color: #fb6200;
    border-color: #fb6200;
  }
`

export default ({ link, message, ...props }) => (
  <ButtonFactory
    {...props}
    name="HackerNews"
    href={links.hacker(link, message)}
    buttonComponent={Hacker}
    iconFill={HackerIconFill}
    iconCircle={HackerIconCircle}
    iconCircleSolid={HackerIconCircleSolid}
  />
)
