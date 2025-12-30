import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import Avatar from './Avatar'

describe('Avatar', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders with a name and displays the first initial', () => {
    render(<Avatar name="John Doe" />)
    expect(screen.getByText('J')).toBeInTheDocument()
  })

  it('renders uppercase initial for lowercase name', () => {
    render(<Avatar name="alice" />)
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  it('has correct aria-label for accessibility', () => {
    render(<Avatar name="John Doe" />)
    expect(screen.getByLabelText('Avatar for John Doe')).toBeInTheDocument()
  })

  it('applies small size classes', () => {
    render(<Avatar name="Test" size="sm" />)
    const avatar = screen.getByText('T')
    expect(avatar).toHaveClass('w-6', 'h-6', 'text-xs')
  })

  it('applies medium size classes by default', () => {
    render(<Avatar name="Test" />)
    const avatar = screen.getByText('T')
    expect(avatar).toHaveClass('w-8', 'h-8', 'text-sm')
  })

  it('applies large size classes', () => {
    render(<Avatar name="Test" size="lg" />)
    const avatar = screen.getByText('T')
    expect(avatar).toHaveClass('w-12', 'h-12', 'text-base')
  })

  it('applies gradient variant by default', () => {
    render(<Avatar name="Test" />)
    const avatar = screen.getByText('T')
    expect(avatar).toHaveClass('bg-gradient-to-br', 'from-primary', 'to-accent')
  })

  it('applies primary variant', () => {
    render(<Avatar name="Test" variant="primary" />)
    const avatar = screen.getByText('T')
    expect(avatar).toHaveClass('bg-primary')
  })

  it('applies secondary variant', () => {
    render(<Avatar name="Test" variant="secondary" />)
    const avatar = screen.getByText('T')
    expect(avatar).toHaveClass('bg-secondary')
  })

  it('applies custom className', () => {
    render(<Avatar name="Test" className="custom-class" />)
    const avatar = screen.getByText('T')
    expect(avatar).toHaveClass('custom-class')
  })
})
