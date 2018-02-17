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

const Reddit = SharingButton.extend`
  background-color: #5f99cf;
  border-color: #5f99cf;

  &:hover,
  &:active {
    background-color: #3a80c1;
    border-color: #3a80c1;
  }
`

const Button = ({ small, solid, link, medium, big, circle, solidcircle }) => (
  <Link href={links.reddit(link)} target="_blank" aria-label="">
    <Reddit small={small}>
      <Icon
        solid={(!solid && !circle && !solidcircle) || solid}
        solidcircle={solidcircle}
        aria-hidden="true"
      >
        {solid && small ? <RedditIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <RedditIconFill /> Reddit{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <RedditIconFill /> Share on Reddit{' '}
          </Fragment>
        ) : null}
        {circle && small ? <RedditIconCircle /> : null}
        {circle && medium ? (
          <Fragment>
            <RedditIconCircle /> Reddit{' '}
          </Fragment>
        ) : null}
        {circle && big ? (
          <Fragment>
            <RedditIconCircle /> Share on Reddit{' '}
          </Fragment>
        ) : null}
        {solidcircle && small ? <RedditIconCircleSolid /> : null}
        {solidcircle && medium ? (
          <Fragment>
            <RedditIconCircleSolid /> Reddit{' '}
          </Fragment>
        ) : null}
        {solidcircle && big ? (
          <Fragment>
            <RedditIconCircleSolid /> Share on Reddit{' '}
          </Fragment>
        ) : null}

        {!solid && !circle && !solidcircle ? <RedditIconFill /> : null}

        {!big && !small && !medium ? <Fragment> Reddit </Fragment> : null}
      </Icon>
    </Reddit>
  </Link>
)

export default Button
