import React from 'react'
import { Tumblr } from '../src/index'

describe('Tumblr', function() {
  test('1', () => {
    const wrapper = mount(
      <Tumblr
        solidcircle
        big
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('2', () => {
    const wrapper = mount(
      <Tumblr
        solidcircle
        medium
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('3', () => {
    const wrapper = mount(
      <Tumblr
        solidcircle
        small
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('4', () => {
    const wrapper = mount(
      <Tumblr
        circle
        big
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('5', () => {
    const wrapper = mount(
      <Tumblr
        circle
        medium
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('6', () => {
    const wrapper = mount(
      <Tumblr
        circle
        small
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('7', () => {
    const wrapper = mount(
      <Tumblr
        solid
        big
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('8', () => {
    const wrapper = mount(
      <Tumblr
        solid
        medium
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('9', () => {
    const wrapper = mount(
      <Tumblr
        solid
        small
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
