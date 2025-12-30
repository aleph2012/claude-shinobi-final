interface CardProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  title?: string
  subtitle?: string
  className?: string
}

function Card({
  children,
  variant = 'primary',
  size = 'md',
  title,
  subtitle,
  className = ''
}: CardProps) {
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8'
  }

  const titleSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  }

  const variantClasses = {
    primary: 'border-primary/40 bg-primary/5 shadow-[0_4px_0_0_rgba(157,92,222,0.4),0_6px_12px_rgba(157,92,222,0.15)]',
    secondary: 'border-secondary/40 bg-secondary/5 shadow-[0_4px_0_0_rgba(71,71,71,0.4),0_6px_12px_rgba(71,71,71,0.15)]',
    success: 'border-success/40 bg-success/5 shadow-[0_4px_0_0_rgba(16,185,129,0.4),0_6px_12px_rgba(16,185,129,0.15)]',
    warning: 'border-warning/40 bg-warning/5 shadow-[0_4px_0_0_rgba(245,158,11,0.4),0_6px_12px_rgba(245,158,11,0.15)]',
    danger: 'border-danger/40 bg-danger/5 shadow-[0_4px_0_0_rgba(239,68,68,0.4),0_6px_12px_rgba(239,68,68,0.15)]'
  }

  const headerColorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
    danger: 'text-danger'
  }

  const cardClass = [
    'rounded-lg border-2 transition-all duration-200',
    sizeClasses[size],
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={cardClass} data-testid="card">
      {(title || subtitle) && (
        <div className="mb-3">
          {title && (
            <h3 className={`font-semibold ${titleSizeClasses[size]} ${headerColorClasses[variant]}`}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-muted mt-1">{subtitle}</p>
          )}
        </div>
      )}
      <div className="text-foreground">{children}</div>
    </div>
  )
}

export default Card
