import type { Meta, StoryObj } from '@storybook/react'
import Button from '../../app/_components/Button/TextButton/index'
import { FaBeer, FaCoffee, FaSearch } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

const iconOptions: { [key: string]: IconType | null } = {
  None: null,
  FaBeer,
  FaSearch,
  FaCoffee,
}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    leftIcon: {
      options: ['None', 'FaBeer', 'FaSearch', 'FaCoffee'],
      control: { type: 'radio' },
      mapping: iconOptions,
    },
    rightIcon: {
      options: ['None', 'FaBeer', 'FaSearch', 'FaCoffee'],
      control: { type: 'radio' },
      mapping: iconOptions,
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'solid',
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'outline',
    color: 'secondary',
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'solid',
    color: 'danger',
  },
}

export const OutlineSuccess: Story = {
  args: {
    children: 'Success Button',
    variant: 'outline',
    color: 'success',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'solid',
    color: 'primary',
    disabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    variant: 'solid',
    color: 'info',
    fullWidth: true,
  },
}

export const WithLeftIcon: Story = {
  args: {
    children: 'With Left Icon',
    variant: 'solid',
    color: 'warning',
    leftIcon: FaBeer,
  },
}

export const WithRightIcon: Story = {
  args: {
    children: 'With Right Icon',
    variant: 'solid',
    color: 'secondary',
    rightIcon: FaBeer,
  },
}
