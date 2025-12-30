import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import Card from './Card'

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders with default props', () => {
    render(<Card>Card content</Card>)
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('border-primary/40')
    expect(card).toHaveClass('p-5') // md size
  })

  it('renders children correctly', () => {
    render(<Card>Test content</Card>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders with different variants', () => {
    render(<Card variant="danger">Danger card</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('border-danger/40')
    expect(card).toHaveClass('bg-danger/5')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Card size="sm">Small card</Card>)
    expect(screen.getByTestId('card')).toHaveClass('p-3')

    rerender(<Card size="lg">Large card</Card>)
    expect(screen.getByTestId('card')).toHaveClass('p-8')
  })

  it('renders title when provided', () => {
    render(<Card title="Card Title">Content</Card>)
    expect(screen.getByText('Card Title')).toBeInTheDocument()
  })

  it('renders subtitle when provided', () => {
    render(<Card subtitle="Card Subtitle">Content</Card>)
    expect(screen.getByText('Card Subtitle')).toBeInTheDocument()
  })

  it('renders both title and subtitle', () => {
    render(<Card title="Title" subtitle="Subtitle">Content</Card>)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Subtitle')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom card</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('custom-class')
  })

  it('applies correct title color for variant', () => {
    render(<Card variant="success" title="Success Title">Content</Card>)
    const title = screen.getByText('Success Title')
    expect(title).toHaveClass('text-success')
  })
})
