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

  & svg {
    width: 1em;
    height: 1em;
    margin-right: 0.4em;
    vertical-align: top;
  }

  ${is('small')`
    & svg {
      margin: 0;
      vertical-align: middle;
    }
  `};

  ${is('simple')`
    & svg {
      stroke: #232323;
      fill: none;
    }
  `};

  ${is('simpleReverse')`
    & svg {
      stroke: #fff;
      fill: none;
    }
  `};
`

export const Icon = styled.div`
  stroke: #fff;
  fill: none;

  ${isOr('solid', 'solidcircle')`
    fill: #fff;
    stroke: none
  `};
`
