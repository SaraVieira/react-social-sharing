import React from 'react'
import is from 'styled-is'
import ButtonFactory from './factory'
import { TwitterIconFill, TwitterIconCircle } from '../svg/twitter.js'
import { SharingButton } from '../common'
import links from '../consts'

const Twitter = SharingButton.extend`
  background-color: #55acee;
  border-color: #55acee;

  &:hover,
  &:active {
    background-color: #2795e9;
    border-color: #2795e9;
  }
`

export default ({ link, message, ...props }) => (
  <ButtonFactory
    {...props}
    name="Twitter"
    href={links.twitter(link, message)}
    buttonComponent={Twitter}
    iconFill={TwitterIconFill}
    iconCircle={TwitterIconCircle}
    iconCircleSolid={TwitterIconCircle}
  />
)
