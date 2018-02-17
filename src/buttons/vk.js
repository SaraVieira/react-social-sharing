import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { VKIconFill, VKIconCircle, VKIconCircleSolid } from '../svg/vk.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'

const VK = SharingButton.extend`
  background-color: #507299;
  border-color: #507299;

  &:hover,
  &:active {
    background-color: #43648c;
    border-color: #43648c;
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
  <Link href={links.vk(message, link)} target="_blank" aria-label="">
    <VK small={small}>
      <Icon
        solid={(!solid && !circle && !solidcircle) || solid}
        solidcircle={solidcircle}
        aria-hidden="true"
      >
        {solid && small ? <VKIconFill /> : null}
        {solid && medium ? (
          <Fragment>
            <VKIconFill /> VK{' '}
          </Fragment>
        ) : null}
        {solid && big ? (
          <Fragment>
            <VKIconFill /> Share on VK{' '}
          </Fragment>
        ) : null}
        {circle && small ? <VKIconCircle /> : null}
        {circle && medium ? (
          <Fragment>
            <VKIconCircle /> VK{' '}
          </Fragment>
        ) : null}
        {circle && big ? (
          <Fragment>
            <VKIconCircle /> Share on VK{' '}
          </Fragment>
        ) : null}
        {solidcircle && small ? <VKIconCircleSolid /> : null}
        {solidcircle && medium ? (
          <Fragment>
            <VKIconCircleSolid /> VK{' '}
          </Fragment>
        ) : null}
        {solidcircle && big ? (
          <Fragment>
            <VKIconCircleSolid /> Share on VK{' '}
          </Fragment>
        ) : null}
        {!solid && !circle && !solidcircle ? <VKIconFill /> : null}

        {!big && !small && !medium ? <Fragment> VK </Fragment> : null}
      </Icon>
    </VK>
  </Link>
)

export default Button
