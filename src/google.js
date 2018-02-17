import React, { Fragment } from 'react';
import styled from 'styled-components';
import is from 'styled-is';
import { GoogleIconFill, GoogleIconCircle } from './svg/google.js';
import {
  SharingButton, Link, Icon
} from './common';
import links from './consts';


const Google = SharingButton.extend`
  background-color: #dd4b39;
  border-color: #dd4b39;

  &:hover,
  &:active {
    background-color: #c23321;
    border-color: #c23321;
  }
`

export default ({ small, solid, link, medium, big, circle, solidcircle }) => (
  <Link href={links.google(link)} target="_blank" aria-label="">
    <Google small={small} solidcircle={solidcircle}>
      <Icon solid={solid} solidcircle={solidcircle} aria-hidden="true">
        {solid && small ? <GoogleIconFill /> : null}
        {solid && medium ? <Fragment>
          <GoogleIconFill /> Google+ </Fragment> : null}
        {solid && big ? <Fragment>
          <GoogleIconFill /> Share on Google+ </Fragment> : null}
        {(solidcircle || circle) && small ? <GoogleIconCircle /> : null}
        {(solidcircle || circle) && medium ? <Fragment>
          <GoogleIconCircle /> Google+ </Fragment> : null}
        {(solidcircle || circle) && big ? <Fragment>
          <GoogleIconCircle /> Share on Google+ </Fragment> : null}
      </Icon>
    </Google>
  </Link>
)
