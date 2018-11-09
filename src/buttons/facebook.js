import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import ButtonFactory from './factory'
import { FacebookIconFill, FacebookIconCircle } from '../svg/facebook.js'
import { SharingButton } from '../common'
import links from '../consts'

const Facebook = styled(SharingButton)`
  background-color: #3b5998;
  border-color: #3b5998;

  ${is('solidcircle')`
    svg path { fill: #3b5998 };
  `};

  &:hover,
  &:active {
    background-color: #2d4373;
    border-color: #2d4373;
  }
`

export default ({ link, ...props }) => (
  <ButtonFactory
    {...props}
    name="Facebook"
    href={links.facebook(link)}
    buttonComponent={Facebook}
    iconFill={FacebookIconFill}
    iconCircle={FacebookIconCircle}
    iconCircleSolid={FacebookIconCircle}
  />
)
