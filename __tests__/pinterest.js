import React from 'react'
import { Pinterest } from '../src/index'
import 'jest-styled-components'

describe('Pinterest', function() {
  test('1', () => {
    const wrapper = mount(
      <Pinterest
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
      <Pinterest
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
      <Pinterest
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
      <Pinterest
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
      <Pinterest
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
      <Pinterest
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
      <Pinterest
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
      <Pinterest
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
      <Pinterest
        solid
        small
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('11', () => {
    const wrapper = mount(<Pinterest circle />)
    expect(wrapper).toMatchSnapshot()
  })
  test('11', () => {
    const wrapper = mount(<Pinterest solidcircle />)
    expect(wrapper).toMatchSnapshot()
  })
  test('12', () => {
    const wrapper = mount(<Pinterest />)
    expect(wrapper).toMatchSnapshot()
  })
  test('13', () => {
    const wrapper = mount(<Pinterest simple />)
    expect(wrapper).toMatchSnapshot()
  })
  test('14', () => {
    const wrapper = mount(<Pinterest simpleReverse />)
    expect(wrapper).toMatchSnapshot()
  })
})
