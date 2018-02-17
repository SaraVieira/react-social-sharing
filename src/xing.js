import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  XingIconFill,
  XingIconCircle,
  XingIconCircleSolid
} from './svg/xing.js'
import { SharingButton, Link, Icon } from './common'
import links from './consts'

const Xing = SharingButton.extend`
  background-color: #1a7576;
  border-color: #1a7576;

  &:hover,
  &:active {
    background-color: #114c4c;
    border-color: #114c4c;
  }
`

export default ({
  small,
  solid,
  link,
  message,
  medium,
  big,
  circle,
  solidcircle
}) => (
  <Link href={links.xing(message, link)} target="_blank" aria-label="">
    <Xing small={small}>
      <Icon solid={solid} solidcircle={solidcircle} aria-hidden="true">
        {solid && small ? <XingIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <XingIconFill /> Xing{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <XingIconFill /> Share on Xing{' '}
          </Fragment>
        ) : null}
        {circle && small ? <XingIconCircle /> : null}
        {circle && medium ? (
          <Fragment>
            <XingIconCircle /> Xing{' '}
          </Fragment>
        ) : null}
        {circle && big ? (
          <Fragment>
            <XingIconCircle /> Share on Xing{' '}
          </Fragment>
        ) : null}
        {solidcircle && small ? <XingIconCircleSolid /> : null}
        {solidcircle && medium ? (
          <Fragment>
            <XingIconCircleSolid /> Xing{' '}
          </Fragment>
        ) : null}
        {solidcircle && big ? (
          <Fragment>
            <XingIconCircleSolid /> Share on Xing{' '}
          </Fragment>
        ) : null}
      </Icon>
    </Xing>
  </Link>
)
