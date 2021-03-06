import React from 'react'
import styled from 'styled-components'
import ButtonFactory from './factory'
import { TumblrIconFill, TumblrIconCircle } from '../svg/tumblr.js'
import { SharingButton } from '../common'
import links from '../consts'

const Tumblr = styled(SharingButton)`
  background-color: #35465c;
  border-color: #35465c;

  &:hover,
  &:active {
    background-color: #222d3c;
    border-color: #222d3c;
  }
`

export default ({ link, name, ...props }) => (
  <ButtonFactory
    {...props}
    name={name || 'Tumblr'}
    href={links.tumblr(link)}
    buttonComponent={Tumblr}
    iconFill={TumblrIconFill}
    iconCircle={TumblrIconCircle}
    iconCircleSolid={TumblrIconCircle}
  />
)
