import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { VKIconFill, VKIconCircle, VKIconCircleSolid } from '../svg/vk.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const VK = SharingButton.extend`
  background-color: #507299;
  border-color: #507299;

  &:hover,
  &:active {
    background-color: #43648c;
    border-color: #43648c;
  }
`

const Button = ({
  small,
  solid,
  link,
  message,
  medium,
  big,
  circle,
  solidcircle,
  simple,
  simpleReverse,
  ...props
}) => (
  <Link
    href={links.vk(message, link)}
    target="_blank"
    aria-label="Share on VK"
    simple={simple}
    simpleReverse={simpleReverse}
  >
    {simple || simpleReverse ? (
      <VKIconFill {...props} />
    ) : (
      <VK small={small} {...props}>
        <Icon
          solid={(!solid && !circle && !solidcircle) || solid}
          solidcircle={solidcircle}
          aria-hidden="true"
          rel="noreferrer noopener"
        >
          {wrapper(
            small,
            solid,
            medium,
            big,
            circle,
            solidcircle,
            VKIconFill,
            VKIconCircle,
            VKIconCircleSolid,
            'VK'
          )}
        </Icon>
      </VK>
    )}
  </Link>
)

export default Button
