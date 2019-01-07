import React from 'react'
import { Mail } from '../src/index'
import 'jest-styled-components'

describe('Mail', function() {
  test('1', () => {
    const wrapper = mount(
      <Mail
        solidcircle
        big
        subject="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('2', () => {
    const wrapper = mount(
      <Mail
        solidcircle
        medium
        subject="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('3', () => {
    const wrapper = mount(
      <Mail
        solidcircle
        small
        subject="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('4', () => {
    const wrapper = mount(
      <Mail circle big subject="I am so cool" link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('5', () => {
    const wrapper = mount(
      <Mail
        circle
        medium
        subject="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('6', () => {
    const wrapper = mount(
      <Mail
        circle
        small
        subject="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('7', () => {
    const wrapper = mount(
      <Mail solid big subject="I am so cool" link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('8', () => {
    const wrapper = mount(
      <Mail
        solid
        medium
        subject="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('9', () => {
    const wrapper = mount(
      <Mail
        solid
        small
        subject="I am so cool"
        body="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('11', () => {
    const wrapper = mount(<Mail circle />)
    expect(wrapper).toMatchSnapshot()
  })
  test('11', () => {
    const wrapper = mount(<Mail solidcircle />)
    expect(wrapper).toMatchSnapshot()
  })
  test('12', () => {
    const wrapper = mount(<Mail />)
    expect(wrapper).toMatchSnapshot()
  })
  test('13', () => {
    const wrapper = mount(<Mail simple />)
    expect(wrapper).toMatchSnapshot()
  })
  test('14', () => {
    const wrapper = mount(<Mail simpleReverse />)
    expect(wrapper).toMatchSnapshot()
  })
  test('ampersands escaping', () => {
    const wrapper = mount(
      <Mail subject="I am so cool" link="http://sharingbuttons.io" />
    )
    expect(wrapper.html()).toContain(
      'mailto:?subject=I%20am%20so%20cool&amp;body=http%3A%2F%2Fsharingbuttons.io'
    )
  })
})
