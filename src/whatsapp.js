import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  WhatsappIconFill,
  WhatsappIconCircle,
  WhatsappIconCircleSolid
} from './svg/whatsapp.js'
import { SharingButton, Link, Icon } from './common'
import links from './consts'

const Whatsapp = SharingButton.extend`
  background-color: #25d366;
  border-color: #25d366;

  &:hover,
  &:active {
    background-color: #1da851;
    border-color: #1da851;
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
  <Link href={links.whatsapp(message, link)} target="_blank" aria-label="">
    <Whatsapp small={small}>
      <Icon solid={solid} solidcircle={solidcircle} aria-hidden="true">
        {solid && small ? <WhatsappIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <WhatsappIconFill /> Whatsapp{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <WhatsappIconFill /> Share on Whatsapp{' '}
          </Fragment>
        ) : null}
        {circle && small ? <WhatsappIconCircle /> : null}
        {circle && medium ? (
          <Fragment>
            <WhatsappIconCircle /> Whatsapp{' '}
          </Fragment>
        ) : null}
        {circle && big ? (
          <Fragment>
            <WhatsappIconCircle /> Share on Whatsapp{' '}
          </Fragment>
        ) : null}
        {solidcircle && small ? <WhatsappIconCircleSolid /> : null}
        {solidcircle && medium ? (
          <Fragment>
            <WhatsappIconCircleSolid /> Whatsapp{' '}
          </Fragment>
        ) : null}
        {solidcircle && big ? (
          <Fragment>
            <WhatsappIconCircleSolid /> Share on Whatsapp{' '}
          </Fragment>
        ) : null}
      </Icon>
    </Whatsapp>
  </Link>
)
