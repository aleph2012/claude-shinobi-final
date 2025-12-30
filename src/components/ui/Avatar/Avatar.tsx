interface AvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'gradient' | 'primary' | 'secondary'
  className?: string
}

function Avatar({
  name,
  size = 'md',
  variant = 'gradient',
  className = ''
}: AvatarProps) {
  const initial = name.charAt(0).toUpperCase()

  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-base'
  }

  const variantClasses = {
    gradient: 'bg-gradient-to-br from-primary to-accent',
    primary: 'bg-primary',
    secondary: 'bg-secondary'
  }

  const avatarClass = [
    'rounded-full flex items-center justify-center text-white font-semibold',
    sizeClasses[size],
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={avatarClass} aria-label={`Avatar for ${name}`}>
      {initial}
    </div>
  )
}

export default Avatar
