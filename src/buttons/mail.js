import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  EmailIconFill,
  EmailIconCircle,
  EmailIconCircleSolid
} from '../svg/mail.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Email = SharingButton.extend`
  background-color: #777777;
  border-color: #777777;

  &:hover,
  &:active {
    background-color: #5e5e5e;
    border-color: #5e5e5e;
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
    href={links.mail(message, link)}
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Share on E-Mail"
    simple={simple}
    simpleReverse={simpleReverse}
  >
    {simple || simpleReverse ? (
      <EmailIconFill {...props} />
    ) : (
      <Email small={small} {...props}>
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
            EmailIconFill,
            EmailIconCircle,
            EmailIconCircleSolid,
            'E-Mail'
          )}
        </Icon>
      </Email>
    )}
  </Link>
)

export default Button
