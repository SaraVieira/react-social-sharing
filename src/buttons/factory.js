import React, { Fragment } from 'react'
import { Link, Icon } from '../common'
import wrapper from './wrapper'

const ButtonFactory = ({
  small,
  solid,
  medium,
  big,
  circle,
  solidcircle,
  simple,
  simpleReverse,
  buttonComponent: Button,
  iconFill: IconFill,
  iconCircle: IconCircle,
  iconCircleSolid: IconCircleSolid,
  name,
  ariaName,
  href,
  ...props
}) => (
  <Link
    href={href}
    simple={simple}
    simpleReverse={simpleReverse}
    target="_blank"
    rel="noreferrer noopener"
    aria-label={`Share on ${ariaName || name}`}
    title={`Share on ${ariaName || name}`}
  >
    {simple || simpleReverse ? (
      <IconFill {...props} />
    ) : (
      <Button small={small} solidcircle={solidcircle} {...props}>
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
            IconFill,
            IconCircle,
            IconCircleSolid,
            name
          )}
        </Icon>
      </Button>
    )}
  </Link>
)

export default ButtonFactory
