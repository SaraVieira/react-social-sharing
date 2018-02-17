import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { TwitterIconFill, TwitterIconCircle } from '../svg/twitter.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'

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
  solidcircle
}) => (
  <Link href={links.twitter(message, link)} target="_blank" aria-label="">
    <Twitter small={small}>
      <Icon
        solid={(!solid && !circle && !solidcircle) || solid}
        solidcircle={solidcircle}
        aria-hidden="true"
      >
        {solid && small ? <TwitterIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <TwitterIconFill /> Twitter{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <TwitterIconFill /> Share on Twitter{' '}
          </Fragment>
        ) : null}
        {(solidcircle || circle) && small ? <TwitterIconCircle /> : null}
        {(solidcircle || circle) && medium ? (
          <Fragment>
            <TwitterIconCircle /> Twitter{' '}
          </Fragment>
        ) : null}
        {(solidcircle || circle) && big ? (
          <Fragment>
            <TwitterIconCircle /> Share on Twitter{' '}
          </Fragment>
        ) : null}
        {!solid && !circle && !solidcircle ? <TwitterIconFill /> : null}

        {!big && !small && !medium ? <Fragment> Twitter </Fragment> : null}
      </Icon>
    </Twitter>
  </Link>
)

export default Button
