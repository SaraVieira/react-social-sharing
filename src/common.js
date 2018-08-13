import styled, { css } from 'styled-components'
import is, { isOr } from 'styled-is'

export const SharingButton = styled.div`
  border-radius: 5px;
  transition: 25ms ease-out;
  padding: 0.5em 0.75em;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  margin: 0.5em;
  display: inline-block;

  svg {
    width: 1em;
    height: 1em;
    vertical-align: top;

    &:not(:only-child) {
      margin-right: 0.4em;
    }
  }

  ${is('small')`
    svg {
      vertical-align: middle;
    }
  `};

  ${is('simple')`
    svg {
      stroke: #232323;
      fill: none;
    }
  `};

  ${is('simpleReverse')`
    svg {
      stroke: #fff;
      fill: none;
    }
  `};
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  fill: #fff;
  stroke: none

  ${isOr('solid', 'solidcircle')`
    fill: #fff;
    stroke: none
  `};
`
