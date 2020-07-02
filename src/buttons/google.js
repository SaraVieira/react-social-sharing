import React from 'react'
import styled from 'styled-components'
import ButtonFactory from './factory'
import { GoogleIconFill, GoogleIconCircle } from '../svg/google.js'
import { SharingButton } from '../common'
import links from '../consts'

const Google = styled(SharingButton)`
  background-color: #dd4b39;
  border-color: #dd4b39;

  &:hover,
  &:active {
    background-color: #c23321;
    border-color: #c23321;
  }
`

export default ({ link, name, message, ...props }) => (
  <ButtonFactory
    {...props}
    name={name || 'Google +'}
    ariaName={name || 'Google Plus'}
    href={links.google(link, message)}
    buttonComponent={Google}
    iconFill={GoogleIconFill}
    iconCircle={GoogleIconCircle}
    iconCircleSolid={GoogleIconCircle}
  />
)
