import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { FacebookIconFill, FacebookIconCircle } from '../svg/facebook.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Facebook = SharingButton.extend`
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
    href={links.facebook(link)}
    simple={simple}
    simpleReverse={simpleReverse}
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Share on Facebook"
  >
    {simple || simpleReverse ? (
      <FacebookIconFill {...props} />
    ) : (
      <Facebook small={small} solidcircle={solidcircle} {...props}>
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
            FacebookIconFill,
            FacebookIconCircle,
            FacebookIconCircle,
            'Facebook'
          )}
        </Icon>
      </Facebook>
    )}
  </Link>
)

export default Button
