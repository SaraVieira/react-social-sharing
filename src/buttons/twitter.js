import React from 'react'
import styled from 'styled-components'
import ButtonFactory from './factory'
import { TwitterIconFill, TwitterIconCircle } from '../svg/twitter.js'
import { SharingButton } from '../common'
import links from '../consts'

const Twitter = styled(SharingButton)`
  background-color: #55acee;
  border-color: #55acee;

  &:hover,
  &:active {
    background-color: #2795e9;
    border-color: #2795e9;
  }
`

export default ({ link, name, message, ...props }) => (
  <ButtonFactory
    {...props}
    name={name || 'Twitter'}
    href={links.twitter(link, message)}
    buttonComponent={Twitter}
    iconFill={TwitterIconFill}
    iconCircle={TwitterIconCircle}
    iconCircleSolid={TwitterIconCircle}
  />
)
