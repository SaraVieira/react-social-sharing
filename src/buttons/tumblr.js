import React from 'react'
import ButtonFactory from './factory'
import { TumblrIconFill, TumblrIconCircle } from '../svg/tumblr.js'
import { SharingButton } from '../common'
import links from '../consts'

const Tumblr = SharingButton.extend`
  background-color: #35465c;
  border-color: #35465c;

  &:hover,
  &:active {
    background-color: #222d3c;
    border-color: #222d3c;
  }
`

export default ({ link, ...props }) => (
  <ButtonFactory
    {...props}
    name="Tumblr"
    href={links.tumblr(link)}
    buttonComponent={Tumblr}
    iconFill={TumblrIconFill}
    iconCircle={TumblrIconCircle}
    iconCircleSolid={TumblrIconCircle}
  />
)
