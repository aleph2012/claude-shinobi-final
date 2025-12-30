import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import Modal from './Modal'

describe('Modal', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal content
      </Modal>
    )
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        Modal content
      </Modal>
    )
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument()
  })

  it('renders with title', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Title">
        Modal content
      </Modal>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        Modal content
      </Modal>
    )

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape key is pressed', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={handleClose}>
        Modal content
      </Modal>
    )

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when Escape key is pressed and closeOnEscape is false', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnEscape={false}>
        Modal content
      </Modal>
    )

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(handleClose).not.toHaveBeenCalled()
  })

  it('calls onClose when backdrop is clicked', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={handleClose}>
        Modal content
      </Modal>
    )

    // The backdrop is the element with aria-hidden="true"
    const backdrop = screen.getByRole('dialog').querySelector('[aria-hidden="true"]')
    fireEvent.click(backdrop!)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when backdrop is clicked and closeOnBackdropClick is false', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnBackdropClick={false}>
        Modal content
      </Modal>
    )

    // The backdrop is the element with aria-hidden="true"
    const backdrop = screen.getByRole('dialog').querySelector('[aria-hidden="true"]')
    fireEvent.click(backdrop!)
    expect(handleClose).not.toHaveBeenCalled()
  })

  it('does not show close button when showCloseButton is false', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} showCloseButton={false}>
        Modal content
      </Modal>
    )

    expect(screen.queryByRole('button', { name: /close modal/i })).not.toBeInTheDocument()
  })

  it('renders with different variants', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} variant="danger" title="Danger Modal">
        Modal content
      </Modal>
    )
    const modalContainer = screen.getByRole('dialog').querySelector('.border-danger\\/30')
    expect(modalContainer).toBeInTheDocument()
  })

  it('renders with different sizes', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} size="sm">
        Modal content
      </Modal>
    )
    // Small modal uses max-w-sm class
    const modalContainer = screen.getByRole('dialog').querySelector('.max-w-sm')
    expect(modalContainer).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} className="custom-class">
        Modal content
      </Modal>
    )
    const modalContainer = screen.getByRole('dialog').querySelector('.custom-class')
    expect(modalContainer).toBeInTheDocument()
  })

  it('has correct aria attributes', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Accessible Modal">
        Modal content
      </Modal>
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title')
    expect(dialog).toHaveAttribute('aria-describedby', 'modal-content')
  })
})
