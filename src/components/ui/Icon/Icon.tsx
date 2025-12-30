import { ReactNode } from 'react'

interface IconProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
}

function Icon({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = ''
}: IconProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full transition-all duration-200'

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-14 h-14 text-xl'
  }

  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white dark:text-black',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    danger: 'bg-danger text-white'
  }

  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : ''

  const iconClass = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabledClasses,
    className
  ].filter(Boolean).join(' ')

  return (
    <span
      className={iconClass}
      aria-disabled={disabled}
      role="img"
    >
      {children}
    </span>
  )
}

export default Icon
