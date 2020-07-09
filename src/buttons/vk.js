import React from 'react'
import styled from 'styled-components'
import ButtonFactory from './factory'
import { VKIconFill, VKIconCircle, VKIconCircleSolid } from '../svg/vk.js'
import { SharingButton } from '../common'
import links from '../consts'

const VK = styled(SharingButton)`
  background-color: #507299;
  border-color: #507299;

  &:hover,
  &:active {
    background-color: #43648c;
    border-color: #43648c;
  }
`

export default ({ link, name, message, ...props }) => (
  <ButtonFactory
    {...props}
    name={name || 'VK'}
    href={links.vk(link, message)}
    buttonComponent={VK}
    iconFill={VKIconFill}
    iconCircle={VKIconCircle}
    iconCircleSolid={VKIconCircleSolid}
  />
)
