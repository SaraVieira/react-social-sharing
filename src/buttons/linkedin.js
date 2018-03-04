import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  LinkedinIconFill,
  LinkedinIconCircle,
  LinkedinIconCircleSolid
} from '../svg/linkedin.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Linkedin = SharingButton.extend`
  background-color: #0077b5;
  border-color: #0077b5;

  &:hover,
  &:active {
    background-color: #046293;
    border-color: #046293;
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
    href={links.linkedin(message, link)}
    target="_blank"
    rel="noreferrer noopener"
    simple={simple}
    simpleReverse={simpleReverse}
    aria-label="Share on Linkedin"
  >
    {simple || simpleReverse ? (
      <LinkedinIconFill {...props} />
    ) : (
      <Linkedin small={small} {...props}>
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
            LinkedinIconFill,
            LinkedinIconCircle,
            LinkedinIconCircleSolid,
            'LinkedIn'
          )}
        </Icon>
      </Linkedin>
    )}
  </Link>
)

export default Button
