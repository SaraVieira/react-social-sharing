import React from 'react'
import is from 'styled-is'
import ButtonFactory from './factory'
import {
  RedditIconFill,
  RedditIconCircle,
  RedditIconCircleSolid
} from '../svg/reddit.js'
import { SharingButton } from '../common'
import links from '../consts'

const Reddit = SharingButton.extend`
  background-color: #5f99cf;
  border-color: #5f99cf;

  &:hover,
  &:active {
    background-color: #3a80c1;
    border-color: #3a80c1;
  }
`

export default ({ link, ...props }) => (
  <ButtonFactory
    {...props}
    name="Reddit"
    href={links.reddit(link)}
    buttonComponent={Reddit}
    iconFill={RedditIconFill}
    iconCircle={RedditIconCircle}
    iconCircleSolid={RedditIconCircleSolid}
  />
)
