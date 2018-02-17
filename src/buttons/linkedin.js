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
  solidcircle
}) => (
  <Link href={links.linkedin(message, link)} target="_blank" aria-label="">
    <Linkedin small={small}>
      <Icon
        solid={(!solid && !circle && !solidcircle) || solid}
        solidcircle={solidcircle}
        aria-hidden="true"
      >
        {solid && small ? <LinkedinIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <LinkedinIconFill /> LinkedIn{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <LinkedinIconFill /> Share on LinkedIn{' '}
          </Fragment>
        ) : null}
        {circle && small ? <LinkedinIconCircle /> : null}
        {circle && medium ? (
          <Fragment>
            <LinkedinIconCircle /> LinkedIn{' '}
          </Fragment>
        ) : null}
        {circle && big ? (
          <Fragment>
            <LinkedinIconCircle /> Share on LinkedIn{' '}
          </Fragment>
        ) : null}
        {solidcircle && small ? <LinkedinIconCircleSolid /> : null}
        {solidcircle && medium ? (
          <Fragment>
            <LinkedinIconCircleSolid /> LinkedIn{' '}
          </Fragment>
        ) : null}
        {solidcircle && big ? (
          <Fragment>
            <LinkedinIconCircleSolid /> Share on LinkedIn{' '}
          </Fragment>
        ) : null}
        {!solid && !circle && !solidcircle ? <LinkedinIconFill /> : null}

        {!big && !small && !medium ? <Fragment> LinkedIn </Fragment> : null}
      </Icon>
    </Linkedin>
  </Link>
)

export default Button
