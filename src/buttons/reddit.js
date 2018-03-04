import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  RedditIconFill,
  RedditIconCircle,
  RedditIconCircleSolid
} from '../svg/reddit.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Reddit = SharingButton.extend`
  background-color: #5f99cf;
  border-color: #5f99cf;

  &:hover,
  &:active {
    background-color: #3a80c1;
    border-color: #3a80c1;
  }
`

const Button = ({
  small,
  solid,
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
    href={links.reddit(link)}
    target="_blank"
    aria-label="Share on Reddit"
    rel="noreferrer noopener"
    simple={simple}
    simpleReverse={simpleReverse}
  >
    {simple || simpleReverse ? (
      <RedditIconFill {...props} />
    ) : (
      <Reddit small={small} {...props}>
        <Icon
          solid={(!solid && !circle && !solidcircle) || solid}
          solidcircle={solidcircle}
          aria-hidden="true"
        >
          {wrapper(
            small,
            solid,
            medium,
            big,
            circle,
            solidcircle,
            RedditIconFill,
            RedditIconCircle,
            RedditIconCircleSolid,
            'Reddit'
          )}
        </Icon>
      </Reddit>
    )}
  </Link>
)

export default Button
