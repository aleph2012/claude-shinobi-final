import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import Icon from './Icon'

describe('Icon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders with default props', () => {
    render(<Icon>★</Icon>)
    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('bg-primary')
    expect(icon).toHaveClass('w-10', 'h-10') // md size
  })

  it('renders with different variants', () => {
    render(<Icon variant="danger">!</Icon>)
    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('bg-danger')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Icon size="sm">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('w-8', 'h-8')

    rerender(<Icon size="lg">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('w-14', 'h-14')
  })

  it('applies disabled styles when disabled', () => {
    render(<Icon disabled>★</Icon>)
    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('opacity-60')
    expect(icon).toHaveClass('cursor-not-allowed')
    expect(icon).toHaveAttribute('aria-disabled', 'true')
  })

  it('applies custom className', () => {
    render(<Icon className="custom-class">★</Icon>)
    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('custom-class')
  })

  it('renders children correctly', () => {
    render(<Icon>Test Content</Icon>)
    const icon = screen.getByRole('img')
    expect(icon).toHaveTextContent('Test Content')
  })

  it('has circular shape', () => {
    render(<Icon>★</Icon>)
    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('rounded-full')
  })
})
