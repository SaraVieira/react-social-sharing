import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { TwitterIconFill, TwitterIconCircle } from '../svg/twitter.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Twitter = SharingButton.extend`
  background-color: #55acee;
  border-color: #55acee;

  &:hover,
  &:active {
    background-color: #2795e9;
    border-color: #2795e9;
  }
`

const Button = ({
  small,
  solid,
  message,
  link,
  medium,
  big,
  circle,
  solidcircle,
  simple,
  simpleReverse,
  ...props
}) => (
  <Link
    href={links.twitter(message, link)}
    target="_blank"
    aria-label="Share on Twitter"
    simple={simple}
    simpleReverse={simpleReverse}
  >
    {simple || simpleReverse ? (
      <TwitterIconFill {...props} />
    ) : (
      <Twitter small={small} {...props}>
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
            TwitterIconFill,
            TwitterIconCircle,
            TwitterIconCircle,
            'Twitter'
          )}
        </Icon>
      </Twitter>
    )}
  </Link>
)

export default Button
