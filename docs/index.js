/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react'
import ReactDOM from 'react-dom'
import GithubCorner from 'react-github-corner'
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog'

import 'purecss/build/pure.css'
import './main.css'

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {}
const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../README.md'))
  },
  {
    imports: { Twitter: require('../src/index').Twitter },
    path: '/twitter',
    title: 'Twitter',
    content: pageLoader(() => import('./twitter.md'))
  },
  {
    imports: { Facebook: require('../src/index').Facebook },
    path: '/facebook',
    title: 'Facebook',
    content: pageLoader(() => import('./facebook.md'))
  },
  {
    imports: { Google: require('../src/index').Google },
    path: '/google',
    title: 'Google Plus',
    content: pageLoader(() => import('./google.md'))
  },
  {
    imports: { Tumblr: require('../src/index').Tumblr },
    path: '/tumblr',
    title: 'Tumblr',
    content: pageLoader(() => import('./tumblr.md'))
  },
  {
    imports: { Mail: require('../src/index').Mail },
    path: '/mail',
    title: 'Mail',
    content: pageLoader(() => import('./mail.md'))
  },
  {
    imports: { Pinterest: require('../src/index').Pinterest },
    path: '/pinterest',
    title: 'Pinterest',
    content: pageLoader(() => import('./pinterest.md'))
  }
]

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner
      href="https://github.com/SaraVieira/react-social-sharing"
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
    />
    <Catalog
      imports={documentationImports}
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />
      }}
      title="React Social Sharing Icons"
    />
  </div>,
  document.getElementById('catalog')
)
