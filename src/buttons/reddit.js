import React from 'react'
import styled from 'styled-components'
import ButtonFactory from './factory'
import {
  RedditIconFill,
  RedditIconCircle,
  RedditIconCircleSolid,
} from '../svg/reddit.js'
import { SharingButton } from '../common'
import links from '../consts'

const Reddit = styled(SharingButton)`
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
    href={links.reddit(link, message)}
    buttonComponent={Reddit}
    iconFill={RedditIconFill}
    iconCircle={RedditIconCircle}
    iconCircleSolid={RedditIconCircleSolid}
  />
)
