import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  PinterestIconFill,
  PinterestIconCircle,
  PinterestIconCircleSolid
} from './svg/pinterest.js'
import { SharingButton, Link, Icon } from './common'
import links from './consts'

const Pinterest = SharingButton.extend`
  background-color: #bd081c;
  border-color: #bd081c;

  &:hover,
  &:active {
    background-color: #8c0615;
    border-color: #8c0615;
  }
`

export default ({
  small,
  solid,
  message,
  link,
  medium,
  big,
  circle,
  solidcircle
}) => (
  <Link href={links.pinterest(message, link)} target="_blank" aria-label="">
    <Pinterest small={small}>
      <Icon solid={solid} solidcircle={solidcircle} aria-hidden="true">
        {solid && small ? <PinterestIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <PinterestIconFill /> Pinterest{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <PinterestIconFill /> Share on Pinterest{' '}
          </Fragment>
        ) : null}
        {circle && small ? <PinterestIconCircle /> : null}
        {circle && medium ? (
          <Fragment>
            <PinterestIconCircle /> Pinterest{' '}
          </Fragment>
        ) : null}
        {circle && big ? (
          <Fragment>
            <PinterestIconCircle /> Share on Pinterest{' '}
          </Fragment>
        ) : null}
        {solidcircle && small ? <PinterestIconCircleSolid /> : null}
        {solidcircle && medium ? (
          <Fragment>
            <PinterestIconCircleSolid /> Pinterest{' '}
          </Fragment>
        ) : null}
        {solidcircle && big ? (
          <Fragment>
            <PinterestIconCircleSolid /> Share on Pinterest{' '}
          </Fragment>
        ) : null}
      </Icon>
    </Pinterest>
  </Link>
)
