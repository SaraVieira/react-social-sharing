import React from 'react'
import { Reddit } from '../src/index'

describe('Reddit', function() {
  test('1', () => {
    const wrapper = mount(
      <Reddit solidcircle big link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('2', () => {
    const wrapper = mount(
      <Reddit solidcircle medium link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('3', () => {
    const wrapper = mount(
      <Reddit solidcircle small link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('4', () => {
    const wrapper = mount(<Reddit circle big link="http://sharingbuttons.io" />)
    expect(wrapper).toMatchSnapshot()
  })
  test('5', () => {
    const wrapper = mount(
      <Reddit circle medium link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('6', () => {
    const wrapper = mount(
      <Reddit circle small link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('7', () => {
    const wrapper = mount(<Reddit solid big link="http://sharingbuttons.io" />)
    expect(wrapper).toMatchSnapshot()
  })

  test('8', () => {
    const wrapper = mount(
      <Reddit solid medium link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('9', () => {
    const wrapper = mount(
      <Reddit solid small link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('11', () => {
    const wrapper = mount(<Reddit circle />)
    expect(wrapper).toMatchSnapshot()
  })
  test('11', () => {
    const wrapper = mount(<Reddit solidcircle />)
    expect(wrapper).toMatchSnapshot()
  })
  test('12', () => {
    const wrapper = mount(<Reddit />)
    expect(wrapper).toMatchSnapshot()
  })
  test('13', () => {
    const wrapper = mount(<Reddit simple />)
    expect(wrapper).toMatchSnapshot()
  })
  test('14', () => {
    const wrapper = mount(<Reddit simpleReverse />)
    expect(wrapper).toMatchSnapshot()
  })
})
