import React from 'react'
import { Xing } from '../src/index'

describe('Xing', function() {
  test('1', () => {
    const wrapper = mount(
      <Xing
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
      <Xing
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
      <Xing
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
      <Xing circle big message="I am so cool" link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('5', () => {
    const wrapper = mount(
      <Xing
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
      <Xing
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
      <Xing solid big message="I am so cool" link="http://sharingbuttons.io" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('8', () => {
    const wrapper = mount(
      <Xing
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
      <Xing
        solid
        small
        message="I am so cool"
        link="http://sharingbuttons.io"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('11', () => {
    const wrapper = mount(<Xing circle />)
    expect(wrapper).toMatchSnapshot()
  })
  test('11', () => {
    const wrapper = mount(<Xing solidcircle />)
    expect(wrapper).toMatchSnapshot()
  })
  test('12', () => {
    const wrapper = mount(<Xing />)
    expect(wrapper).toMatchSnapshot()
  })
  test('13', () => {
    const wrapper = mount(<Xing simple />)
    expect(wrapper).toMatchSnapshot()
  })
  test('14', () => {
    const wrapper = mount(<Xing simpleReverse />)
    expect(wrapper).toMatchSnapshot()
  })
})
