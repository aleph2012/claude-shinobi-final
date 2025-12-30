interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

function Button({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-md font-medium cursor-pointer transition-all duration-150 outline-none focus:ring-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0 active:translate-y-0.5 active:shadow-sm'

  const variantClasses = {
    primary: 'bg-primary text-white hover:brightness-110 focus:ring-primary/30 shadow-[0_4px_0_0_rgba(120,60,180,1),0_6px_12px_rgba(157,92,222,0.3)] active:shadow-[0_2px_0_0_rgba(120,60,180,1),0_3px_6px_rgba(157,92,222,0.2)]',
    secondary: 'bg-secondary text-white dark:text-black hover:brightness-110 focus:ring-secondary/30 shadow-[0_4px_0_0_rgba(40,40,40,1),0_6px_12px_rgba(71,71,71,0.3)] active:shadow-[0_2px_0_0_rgba(40,40,40,1),0_3px_6px_rgba(71,71,71,0.2)]',
    success: 'bg-success text-white hover:brightness-110 focus:ring-success/30 shadow-[0_4px_0_0_rgba(8,120,80,1),0_6px_12px_rgba(16,185,129,0.3)] active:shadow-[0_2px_0_0_rgba(8,120,80,1),0_3px_6px_rgba(16,185,129,0.2)]',
    warning: 'bg-warning text-white hover:brightness-110 focus:ring-warning/30 shadow-[0_4px_0_0_rgba(180,115,0,1),0_6px_12px_rgba(245,158,11,0.3)] active:shadow-[0_2px_0_0_rgba(180,115,0,1),0_3px_6px_rgba(245,158,11,0.2)]',
    danger: 'bg-danger text-white hover:brightness-110 focus:ring-danger/30 shadow-[0_4px_0_0_rgba(180,30,30,1),0_6px_12px_rgba(239,68,68,0.3)] active:shadow-[0_2px_0_0_rgba(180,30,30,1),0_3px_6px_rgba(239,68,68,0.2)]'
  }

  const buttonClass = [
    baseClasses,
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button