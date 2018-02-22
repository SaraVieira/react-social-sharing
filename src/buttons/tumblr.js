import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { TumblrIconFill, TumblrIconCircle } from '../svg/tumblr.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Tumblr = SharingButton.extend`
  background-color: #35465c;
  border-color: #35465c;

  &:hover,
  &:active {
    background-color: #222d3c;
    border-color: #222d3c;
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
  simpleReverse
}) => (
  <Link
    href={links.tumblr(link)}
    target="_blank"
    aria-label="Share on Tumblr"
    rel="noreferrer noopener"
    simple={simple}
    simpleReverse={simpleReverse}
  >
    {simple || simpleReverse ? (
      <TumblrIconFill />
    ) : (
      <Tumblr small={small}>
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
            TumblrIconFill,
            TumblrIconCircle,
            TumblrIconCircle,
            'Tumblr'
          )}
        </Icon>
      </Tumblr>
    )}
  </Link>
)

export default Button
