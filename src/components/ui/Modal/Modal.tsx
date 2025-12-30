'use client'

import { useEffect, useCallback, useRef } from 'react'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
  icon?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  closeOnBackdropClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
}

function Modal({
  children,
  isOpen,
  onClose,
  title,
  icon,
  variant = 'primary',
  size = 'md',
  className = '',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (closeOnEscape && event.key === 'Escape') {
      onClose()
    }
  }, [closeOnEscape, onClose])

  const handleBackdropClick = useCallback(() => {
    if (closeOnBackdropClick) {
      onClose()
    }
  }, [closeOnBackdropClick, onClose])

  // Focus trap handler
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key !== 'Tab' || !modalRef.current) return

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus()
        event.preventDefault()
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus()
        event.preventDefault()
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousFocusRef.current = document.activeElement as HTMLElement

      document.addEventListener('keydown', handleEscape)
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'

      // Focus the first focusable element (close button) after a brief delay
      requestAnimationFrame(() => {
        const closeButton = modalRef.current?.querySelector<HTMLButtonElement>('button')
        closeButton?.focus()
      })
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''

      // Return focus to the previously focused element
      if (!isOpen && previousFocusRef.current) {
        previousFocusRef.current.focus()
        previousFocusRef.current = null
      }
    }
  }, [isOpen, handleEscape, handleKeyDown])

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'w-full max-w-sm',
    md: 'w-full max-w-md',
    lg: 'w-full max-w-md sm:max-w-xl md:max-w-2xl'
  }

  const variantClasses = {
    primary: 'border-primary/30',
    secondary: 'border-secondary/30',
    success: 'border-success/30',
    warning: 'border-warning/30',
    danger: 'border-danger/30'
  }

  const headerVariantClasses = {
    primary: 'border-b border-primary/20 text-primary',
    secondary: 'border-b border-secondary/20 text-secondary',
    success: 'border-b border-success/20 text-success',
    warning: 'border-b border-warning/20 text-warning',
    danger: 'border-b border-danger/20 text-danger'
  }

  const closeButtonVariantClasses = {
    primary: 'text-primary hover:bg-primary/20 focus:ring-primary/30',
    secondary: 'text-secondary hover:bg-secondary/20 focus:ring-secondary/30',
    success: 'text-success hover:bg-success/20 focus:ring-success/30',
    warning: 'text-warning hover:bg-warning/20 focus:ring-warning/30',
    danger: 'text-danger hover:bg-danger/20 focus:ring-danger/30'
  }

  const modalClasses = [
    'relative rounded-lg bg-surface shadow-2xl border transition-all duration-200 max-h-[90vh] overflow-y-auto',
    sizeClasses[size],
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby="modal-content"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
        aria-hidden="true"
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className={modalClasses}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className={`flex items-center justify-between px-6 py-4 ${title ? headerVariantClasses[variant] : ''}`}>
            {title && (
              <h2
                id="modal-title"
                className="text-lg font-semibold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className={`ml-auto rounded-md p-3 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 ${closeButtonVariantClasses[variant]}`}
                aria-label="Close modal"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div id="modal-content" className="px-6 py-4">
          {icon && (
            <div className="flex justify-center mb-4">
              {icon}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
