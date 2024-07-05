'use client'
import React from 'react'
import StyledButton from './styles'
import { IconType } from 'react-icons/lib'

export type Props = {
  children: React.ReactNode
  size?: 1 | 2 | 3 | 4
  variant?: 'solid' | 'outline'
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  disabled?: boolean
  onClick?: () => void
  fullWidth?: boolean
  leftIcon?: IconType
  rightIcon?: IconType
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = ({
  size,
  variant,
  color,
  radius,
  disabled,
  onClick,
  fullWidth,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  type = 'button',
}) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      color={color}
      radius={radius}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      fullWidth={fullWidth}
      type={type}
    >
      <div className="flex items-center justify-center space-x-[10px]">
        {LeftIcon && <LeftIcon />}
        <span>{children}</span>
        {RightIcon && <RightIcon />}
      </div>
    </StyledButton>
  )
}

export default Button
