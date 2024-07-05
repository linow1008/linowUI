import styled, { css } from 'styled-components'
import colorStyles from '@/app/_styles/colors'

type Props = {
  size?: 1 | 2 | 3 | 4
  variant?: 'solid' | 'outline'
  color?: keyof typeof colorStyles
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  disabled?: boolean
  fullWidth?: boolean
}

const sizes = {
  1: { padding: '4px 8px', fontSize: '14px' },
  2: { padding: '8px 16px', fontSize: '16px' },
  3: { padding: '12px 24px', fontSize: '18px' },
  4: { padding: '16px 32px', fontSize: '20px' },
}

const radii = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '9999px',
}

const getButtonStyles = ({
  size = 2,
  variant = 'solid',
  color = 'primary',
  radius = 'none',
  disabled,
  fullWidth,
}: Props) => css`
  padding: ${sizes[size].padding};
  font-size: ${sizes[size].fontSize};
  ${variant === 'solid'
    ? `background-color: ${colorStyles[color]}; color: ${color === 'light' ? '#000' : '#fff'};`
    : `border: 1px solid ${colorStyles[color]}; color: ${colorStyles[color]}; background-color: transparent;`}
  border-radius: ${radii[radius]};
  ${disabled && 'cursor: not-allowed; opacity: 0.6;'}
  ${fullWidth && 'width: 100%;'}
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  &:hover {
    ${!disabled &&
    css`
      background-color: ${variant === 'solid'
        ? `${colorStyles[color]}cc`
        : 'transparent'};
      color: ${variant === 'solid' ? '#fff' : `${colorStyles[color]}`};
    `}
  }
`

const StyledButton = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${getButtonStyles}
`

export default StyledButton
