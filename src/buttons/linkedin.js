import React from 'react'
import is from 'styled-is'
import ButtonFactory from './factory'
import {
  LinkedinIconFill,
  LinkedinIconCircle,
  LinkedinIconCircleSolid
} from '../svg/linkedin.js'
import { SharingButton } from '../common'
import links from '../consts'

const Linkedin = SharingButton.extend`
  background-color: #0077b5;
  border-color: #0077b5;

  &:hover,
  &:active {
    background-color: #046293;
    border-color: #046293;
  }
`

export default ({ link, ...props }) => (
  <ButtonFactory
    {...props}
    name="LinkedIn"
    href={links.linkedin(link)}
    buttonComponent={Linkedin}
    iconFill={LinkedinIconFill}
    iconCircle={LinkedinIconCircle}
    iconCircleSolid={LinkedinIconCircleSolid}
  />
)
