import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  EmailIconFill,
  EmailIconCircle,
  EmailIconCircleFill
} from './svg/mail.js'
import { SharingButton, Link, Icon } from './common'
import links from './consts'

const Email = SharingButton.extend`
  background-color: #777777;
  border-color: #777777;

  &:hover,
  &:active {
    background-color: #5e5e5e;
    border-color: #5e5e5e;
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
  <Link href={links.mail(message, link)} target="_blank" aria-label="">
    <Email small={small}>
      <Icon solid={solid} solidcircle={solidcircle} aria-hidden="true">
        {solid && small ? <EmailIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <EmailIconFill /> E-Mail{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <EmailIconFill /> Share by E-Mail{' '}
          </Fragment>
        ) : null}
        {circle && small ? <EmailIconCircle /> : null}
        {circle && medium ? (
          <Fragment>
            <EmailIconCircle /> E-Mail{' '}
          </Fragment>
        ) : null}
        {circle && big ? (
          <Fragment>
            <EmailIconCircle /> Share by E-Mail{' '}
          </Fragment>
        ) : null}
        {solidcircle && small ? <EmailIconCircleFill /> : null}
        {solidcircle && medium ? (
          <Fragment>
            <EmailIconCircleFill /> E-Mail{' '}
          </Fragment>
        ) : null}
        {solidcircle && big ? (
          <Fragment>
            <EmailIconCircleFill /> Share by E-Mail{' '}
          </Fragment>
        ) : null}
      </Icon>
    </Email>
  </Link>
)
