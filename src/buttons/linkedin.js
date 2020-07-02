import React from 'react'
import styled from 'styled-components'
import ButtonFactory from './factory'
import {
  LinkedinIconFill,
  LinkedinIconCircle,
  LinkedinIconCircleSolid
} from '../svg/linkedin.js'
import { SharingButton } from '../common'
import links from '../consts'

const Linkedin = styled(SharingButton)`
  background-color: #0077b5;
  border-color: #0077b5;

  &:hover,
  &:active {
    background-color: #046293;
    border-color: #046293;
  }
`

export default ({ link, name, message, ...props }) => (
  <ButtonFactory
    {...props}
    name={name || 'LinkedIn'}
    href={links.linkedin(link, message)}
    buttonComponent={Linkedin}
    iconFill={LinkedinIconFill}
    iconCircle={LinkedinIconCircle}
    iconCircleSolid={LinkedinIconCircleSolid}
  />
)
