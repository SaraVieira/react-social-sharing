import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { TumblrIconFill, TumblrIconCircle } from './svg/tumblr.js'
import { SharingButton, Link, Icon } from './common'
import links from './consts'

const Tumblr = SharingButton.extend`
  background-color: #35465c;
  border-color: #35465c;

  &:hover,
  &:active {
    background-color: #222d3c;
    border-color: #222d3c;
  }
`

export default ({ small, solid, link, medium, big, circle, solidcircle }) => (
  <Link href={links.tumblr(link)} target="_blank" aria-label="">
    <Tumblr small={small}>
      <Icon solid={solid} solidcircle={solidcircle} aria-hidden="true">
        {solid && small ? <TumblrIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <TumblrIconFill /> Tumblr{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <TumblrIconFill /> Share on Tumblr{' '}
          </Fragment>
        ) : null}
        {(solidcircle || circle) && small ? <TumblrIconCircle /> : null}
        {(solidcircle || circle) && medium ? (
          <Fragment>
            <TumblrIconCircle /> Tumblr{' '}
          </Fragment>
        ) : null}
        {(solidcircle || circle) && big ? (
          <Fragment>
            <TumblrIconCircle /> Share on Tumblr{' '}
          </Fragment>
        ) : null}
      </Icon>
    </Tumblr>
  </Link>
)
