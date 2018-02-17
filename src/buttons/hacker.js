import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  HackerIconFill,
  HackerIconCircle,
  HackerIconCircleSolid
} from '../svg/hacker.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'

const Hacker = SharingButton.extend`
  background-color: #ff6600;
  border-color: #ff6600;

  &:hover,
  &:active {
    background-color: #fb6200;
    border-color: #fb6200;
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
  solidcircle
}) => (
  <Link href={links.hacker(message, link)} target="_blank" aria-label="">
    <Hacker small={small}>
      <Icon
        solid={(!solid && !circle && !solidcircle) || solid}
        solidcircle={solidcircle}
        aria-hidden="true"
      >
        {solid && small ? <HackerIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <HackerIconFill /> HackerNews{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <HackerIconFill /> Share on HackerNews{' '}
          </Fragment>
        ) : null}
        {circle && small ? <HackerIconCircle /> : null}
        {circle && medium ? (
          <Fragment>
            <HackerIconCircle /> HackerNews{' '}
          </Fragment>
        ) : null}
        {circle && big ? (
          <Fragment>
            <HackerIconCircle /> Share on HackerNews{' '}
          </Fragment>
        ) : null}
        {solidcircle && small ? <HackerIconCircleSolid /> : null}
        {solidcircle && medium ? (
          <Fragment>
            <HackerIconCircleSolid /> HackerNews{' '}
          </Fragment>
        ) : null}
        {solidcircle && big ? (
          <Fragment>
            <HackerIconCircleSolid /> Share on HackerNews{' '}
          </Fragment>
        ) : null}
        {!solid && !circle && !solidcircle ? <HackerIconFill /> : null}

        {!big && !small && !medium ? <Fragment> HackerNews </Fragment> : null}
      </Icon>
    </Hacker>
  </Link>
)

export default Button
