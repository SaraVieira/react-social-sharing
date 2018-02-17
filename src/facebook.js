import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { FacebookIconFill, FacebookIconCircle } from './svg/facebook.js'
import { SharingButton, Link, Icon } from './common'
import links from './consts'

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

export default ({ small, solid, link, medium, big, circle, solidcircle }) => (
  <Link href={links.facebook(link)} target="_blank" aria-label="">
    <Facebook small={small} solidcircle={solidcircle}>
      <Icon solid={solid} solidcircle={solidcircle} aria-hidden="true">
        {solid && small ? <FacebookIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <FacebookIconFill /> Facebook{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <FacebookIconFill /> Share on Facebook{' '}
          </Fragment>
        ) : null}
        {(solidcircle || circle) && small ? <FacebookIconCircle /> : null}
        {(solidcircle || circle) && medium ? (
          <Fragment>
            <FacebookIconCircle /> Facebook{' '}
          </Fragment>
        ) : null}
        {(solidcircle || circle) && big ? (
          <Fragment>
            <FacebookIconCircle /> Share on Facebook{' '}
          </Fragment>
        ) : null}
      </Icon>
    </Facebook>
  </Link>
)
