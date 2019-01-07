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
  label,
  target = '_blank',
  ...props
}) => {
  const usedLabel =
    typeof label === 'function'
      ? label(ariaName || name)
      : `Share on ${ariaName || name}`
  return (
    <Link
      href={href}
      simple={simple}
      simpleReverse={simpleReverse}
      target={target}
      rel="noreferrer noopener"
      aria-label={usedLabel}
      title={usedLabel}
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
}

export default ButtonFactory
