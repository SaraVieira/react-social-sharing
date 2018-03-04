import React, { Fragment } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import {
  WhatsappIconFill,
  WhatsappIconCircle,
  WhatsappIconCircleSolid
} from '../svg/whatsapp.js'
import { SharingButton, Link, Icon } from '../common'
import links from '../consts'
import wrapper from './wrapper'

const Whatsapp = SharingButton.extend`
  background-color: #25d366;
  border-color: #25d366;

  &:hover,
  &:active {
    background-color: #1da851;
    border-color: #1da851;
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
  solidcircle,
  simple,
  simpleReverse
}) => (
  <Link
    href={links.whatsapp(message, link)}
    target="_blank"
    aria-label="Share on WhatsApp"
    rel="noreferrer noopener"
    simple={simple}
    simpleReverse={simpleReverse}
  >
    {simple || simpleReverse ? (
      <WhatsappIconFill {...props} />
    ) : (
      <Whatsapp small={small} {...props}>
        <Icon
          solid={(!solid && !circle && !solidcircle) || solid}
          solidcircle={solidcircle}
          aria-hidden="true"
        >
          {wrapper(
            small,
            solid,
            medium,
            big,
            circle,
            solidcircle,
            WhatsappIconFill,
            WhatsappIconCircle,
            WhatsappIconCircleSolid,
            'WhatsApp'
          )}
        </Icon>
      </Whatsapp>
    )}
  </Link>
)

export default Button
