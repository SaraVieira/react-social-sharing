import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { GoogleIconFill, GoogleIconCircle } from '../svg/google.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Google = SharingButton.extend`
  background-color: #dd4b39;
  border-color: #dd4b39;

  &:hover,
  &:active {
    background-color: #c23321;
    border-color: #c23321;
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
    href={links.google(link)}
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Share on Google Plus"
    simple={simple}
    simpleReverse={simpleReverse}
  >
    {simple || simpleReverse ? (
      <GoogleIconFill {...props} />
    ) : (
      <Google small={small} solidcircle={solidcircle} {...props} >
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
            GoogleIconFill,
            GoogleIconCircle,
            GoogleIconCircle,
            'Google +'
          )}
        </Icon>
      </Google>
    )}
  </Link>
)

export default Button
