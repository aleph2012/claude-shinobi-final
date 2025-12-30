"use client";
import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import Avatar from "@/components/ui/Avatar/Avatar";
import Card from "@/components/ui/Card/Card";
import Icon from "@/components/ui/Icon/Icon";
import Modal from "@/components/ui/Modal/Modal";
import { Star, Rocket, CheckCircle, AlertTriangle, XCircle, Check, X, Heart, Target } from "lucide-react";

export default function Preview() {
  const [primaryModalOpen, setPrimaryModalOpen] = useState(false);
  const [secondaryModalOpen, setSecondaryModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [warningModalOpen, setWarningModalOpen] = useState(false);
  const [dangerModalOpen, setDangerModalOpen] = useState(false);
  const [smallModalOpen, setSmallModalOpen] = useState(false);
  const [largeModalOpen, setLargeModalOpen] = useState(false);

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
      <section>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Typography & Theme Showcase</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', marginBottom: '2rem' }}>
          This page demonstrates our custom theme with beautiful typography pairing. Headings use the elegant Playfair Display serif font, while body text uses the clean and modern Rubik sans-serif font.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Design System Colors</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '500px' }}>
          Our theme features a purple primary color with carefully chosen complementary colors for success, warning, and danger states. The system automatically adapts between light and dark modes.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interactive Components</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Our button components showcase the theme colors in action with hover effects and focus states.
        </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="primary" onClick={() => console.log('Primary clicked')}>
          Primary Button
        </Button>

        <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
          Secondary Button
        </Button>

        <Button variant="success" onClick={() => console.log('Success clicked')}>
          Success Button
        </Button>

        <Button variant="warning" onClick={() => console.log('Warning clicked')}>
          Warning Button
        </Button>

        <Button variant="danger" onClick={() => console.log('Danger clicked')}>
          Danger Button
        </Button>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Disabled States</h3>
      <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
        All button variants maintain consistent styling when disabled, with reduced opacity for clear visual feedback.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="primary" disabled>
          Primary Disabled
        </Button>

        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>

        <Button variant="success" disabled>
          Success Disabled
        </Button>

        <Button variant="warning" disabled>
          Warning Disabled
        </Button>

        <Button variant="danger" disabled>
          Danger Disabled
        </Button>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Examples</h3>
      <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
        Real-world button implementations showing different types and interactive behaviors.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" type="submit">
          Submit Form
        </Button>

        <Button variant="secondary" type="reset">
          Reset Form
        </Button>

        <Button variant="success" onClick={() => alert('Changes saved!')}>
          Save Changes
        </Button>

        <Button variant="warning" onClick={() => confirm('Are you sure you want to proceed?')}>
          Proceed with Caution
        </Button>

        <Button variant="danger" onClick={() => confirm('This action cannot be undone. Continue?')}>
          Delete Account
        </Button>
      </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Avatar Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Avatars display user initials in circular badges. They support multiple sizes and color variants.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Three size options for different contexts: small for compact lists, medium for standard use, and large for profile displays.
        </p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Avatar name="Small" size="sm" />
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Small</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Avatar name="Medium" size="md" />
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Medium</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Avatar name="Large" size="lg" />
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Large</span>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Variants</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Color variants to match different design needs: gradient for emphasis, primary and secondary for consistency with theme colors.
        </p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Avatar name="Gradient" variant="gradient" size="lg" />
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Gradient</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Avatar name="Primary" variant="primary" size="lg" />
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Primary</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Avatar name="Secondary" variant="secondary" size="lg" />
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Secondary</span>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Examples</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Avatars combined with text for author attribution and user displays.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Avatar name="John Doe" size="sm" />
            <span>By John Doe</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Avatar name="Alice Smith" size="md" />
            <div>
              <div style={{ fontWeight: 600 }}>Alice Smith</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Software Engineer</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Avatar name="Bob Wilson" size="lg" variant="primary" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '1.125rem' }}>Bob Wilson</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Product Designer</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Card Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Cards are container components for grouping related content. They support multiple variants, sizes, and optional titles.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Variants</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Five color variants to match different content types and design needs.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem', maxWidth: '900px' }}>
          <Card variant="primary" title="Primary Card">
            This is a primary card with some content inside. Great for general information.
          </Card>
          <Card variant="secondary" title="Secondary Card">
            Secondary cards work well for less prominent content sections.
          </Card>
          <Card variant="success" title="Success Card">
            Use success cards to highlight positive outcomes or confirmations.
          </Card>
          <Card variant="warning" title="Warning Card">
            Warning cards draw attention to important notices or cautions.
          </Card>
          <Card variant="danger" title="Danger Card">
            Danger cards are ideal for error messages or destructive actions.
          </Card>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Three size options to fit different layout requirements: small, medium (default), and large.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', maxWidth: '500px' }}>
          <Card size="sm" title="Small Card">
            Compact padding for tight spaces.
          </Card>
          <Card size="md" title="Medium Card">
            Default size with balanced padding.
          </Card>
          <Card size="lg" title="Large Card">
            Generous padding for prominent content sections.
          </Card>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>With Subtitles</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Cards can include subtitles for additional context below the title.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem', maxWidth: '900px' }}>
          <Card variant="primary" title="Feature Update" subtitle="Released December 2024">
            We've added new card components to the design system with multiple variants and sizes.
          </Card>
          <Card variant="success" title="Payment Received" subtitle="Transaction #12345">
            Your payment of $99.00 has been successfully processed.
          </Card>
          <Card variant="warning" title="Subscription Expiring" subtitle="Action required by Jan 15">
            Your premium subscription will expire soon. Renew to maintain access.
          </Card>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Icon Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Icons display symbols or small graphics within circular backgrounds. They support multiple sizes and color variants.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Variants</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Five color variants to match different contexts and design needs.
        </p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Icon variant="primary"><Star size={20} /></Icon>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Primary</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Icon variant="secondary"><Rocket size={20} /></Icon>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Secondary</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Icon variant="success"><CheckCircle size={20} /></Icon>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Success</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Icon variant="warning"><AlertTriangle size={20} /></Icon>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Warning</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Icon variant="danger"><XCircle size={20} /></Icon>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Danger</span>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Three size options: small for compact UIs, medium for standard use, and large for emphasis.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Icon size="sm"><Star size={14} /></Icon>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Small</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Icon size="md"><Star size={20} /></Icon>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Medium</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Icon size="lg"><Star size={28} /></Icon>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Large</span>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Disabled State</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Icons can be disabled with reduced opacity for inactive states.
        </p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
          <Icon variant="primary" disabled><Star size={20} /></Icon>
          <Icon variant="success" disabled><Check size={20} /></Icon>
          <Icon variant="danger" disabled><X size={20} /></Icon>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Examples</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Icons paired with text for common UI patterns.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Icon variant="success" size="sm"><Check size={14} /></Icon>
            <span>Task completed successfully</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Icon variant="warning" size="sm"><AlertTriangle size={14} /></Icon>
            <span>Warning: Please review before proceeding</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Icon variant="danger" size="sm"><X size={14} /></Icon>
            <span>Error: Something went wrong</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Icon variant="primary" size="md"><Heart size={20} /></Icon>
            <span style={{ fontWeight: 600 }}>Add to favorites</span>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Modal Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Modals display content in an overlay with a semi-transparent backdrop. They support multiple variants, sizes, and accessibility features.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Variants</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Five color variants to match different content types and contexts.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Button variant="primary" onClick={() => setPrimaryModalOpen(true)}>
            Primary Modal
          </Button>
          <Button variant="secondary" onClick={() => setSecondaryModalOpen(true)}>
            Secondary Modal
          </Button>
          <Button variant="success" onClick={() => setSuccessModalOpen(true)}>
            Success Modal
          </Button>
          <Button variant="warning" onClick={() => setWarningModalOpen(true)}>
            Warning Modal
          </Button>
          <Button variant="danger" onClick={() => setDangerModalOpen(true)}>
            Danger Modal
          </Button>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Three size options: small for compact dialogs, medium (default) for standard content, and large for extensive information.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Button variant="primary" onClick={() => setSmallModalOpen(true)}>
            Small Modal
          </Button>
          <Button variant="primary" onClick={() => setPrimaryModalOpen(true)}>
            Medium Modal
          </Button>
          <Button variant="primary" onClick={() => setLargeModalOpen(true)}>
            Large Modal
          </Button>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Features</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem', maxWidth: '900px' }}>
          <div style={{ padding: '1.25rem', borderRadius: '0.5rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 4px 0 0 var(--border), 0 6px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" opacity="0.5"/>
                <rect x="7" y="7" width="10" height="10" rx="1" ry="1"/>
              </svg>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Semi-transparent backdrop</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0 }}>Beautiful blur effect</p>
          </div>
          <div style={{ padding: '1.25rem', borderRadius: '0.5rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 4px 0 0 var(--border), 0 6px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
                <path d="M6 8h.01M10 8h.01M14 8h.01"/>
                <line x1="6" y1="12" x2="18" y2="12"/>
              </svg>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Keyboard navigation</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0 }}>Close with Escape key</p>
          </div>
          <div style={{ padding: '1.25rem', borderRadius: '0.5rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 4px 0 0 var(--border), 0 6px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"/>
              </svg>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Click outside to close</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0 }}>Intuitive interaction</p>
          </div>
          <div style={{ padding: '1.25rem', borderRadius: '0.5rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 4px 0 0 var(--border), 0 6px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Responsive design</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0 }}>Works on all screen sizes</p>
          </div>
        </div>

        {/* Modal Components */}
        <Modal
          isOpen={primaryModalOpen}
          onClose={() => setPrimaryModalOpen(false)}
          title="Primary Modal"
          variant="primary"
          icon={<Target size={48} strokeWidth={1.5} style={{ color: 'var(--primary)' }} />}
        >
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            This is a primary modal with a clean, modern design. It features a semi-transparent backdrop, smooth animations, and full keyboard accessibility.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
            Press Escape or click the backdrop to close this modal.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <Button variant="primary" onClick={() => setPrimaryModalOpen(false)}>
              Confirm
            </Button>
            <Button variant="secondary" onClick={() => setPrimaryModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={secondaryModalOpen}
          onClose={() => setSecondaryModalOpen(false)}
          title="Secondary Modal"
          variant="secondary"
          icon={<Rocket size={48} strokeWidth={1.5} style={{ color: 'var(--secondary)' }} />}
        >
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            A secondary modal for less prominent dialogs. Great for settings panels, additional information, or secondary actions.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <Button variant="secondary" onClick={() => setSecondaryModalOpen(false)}>
              Confirm
            </Button>
            <Button variant="primary" onClick={() => setSecondaryModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={successModalOpen}
          onClose={() => setSuccessModalOpen(false)}
          title="Success!"
          variant="success"
          icon={<CheckCircle size={48} strokeWidth={1.5} style={{ color: 'var(--success)' }} />}
        >
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            Your action was completed successfully. Use success modals to confirm positive outcomes and reassure users.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <Button variant="success" onClick={() => setSuccessModalOpen(false)}>
              Confirm
            </Button>
            <Button variant="secondary" onClick={() => setSuccessModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={warningModalOpen}
          onClose={() => setWarningModalOpen(false)}
          title="Warning"
          variant="warning"
          icon={<AlertTriangle size={48} strokeWidth={1.5} style={{ color: 'var(--warning)' }} />}
        >
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            Please review this information carefully before proceeding. Warning modals help users pause and consider their actions.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <Button variant="warning" onClick={() => setWarningModalOpen(false)}>
              Confirm
            </Button>
            <Button variant="secondary" onClick={() => setWarningModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={dangerModalOpen}
          onClose={() => setDangerModalOpen(false)}
          title="Delete Confirmation"
          variant="danger"
          icon={<XCircle size={48} strokeWidth={1.5} style={{ color: 'var(--danger)' }} />}
        >
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <Button variant="danger" onClick={() => setDangerModalOpen(false)}>
              Confirm
            </Button>
            <Button variant="secondary" onClick={() => setDangerModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={smallModalOpen}
          onClose={() => setSmallModalOpen(false)}
          title="Small Modal"
          variant="primary"
          size="sm"
          icon={<Star size={40} strokeWidth={1.5} style={{ color: 'var(--primary)' }} />}
        >
          <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
            A compact modal for simple confirmations or brief messages.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <Button variant="primary" onClick={() => setSmallModalOpen(false)}>
              Confirm
            </Button>
            <Button variant="secondary" onClick={() => setSmallModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={largeModalOpen}
          onClose={() => setLargeModalOpen(false)}
          title="Large Modal"
          variant="primary"
          size="lg"
          icon={<Rocket size={48} strokeWidth={1.5} style={{ color: 'var(--primary)' }} />}
        >
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            This is a large modal with more space for extensive content. It's perfect for forms, detailed information, or complex interactions that require more screen real estate.
          </p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            The modal automatically centers itself in the viewport and includes a semi-transparent backdrop that dims the rest of the page, helping users focus on the modal content.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
            Features include: keyboard navigation (Escape to close), backdrop click to close, focus trapping, and full accessibility support with ARIA attributes.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <Button variant="primary" onClick={() => setLargeModalOpen(false)}>
              Confirm
            </Button>
            <Button variant="secondary" onClick={() => setLargeModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Typography Hierarchy</h2>
        <div style={{ maxWidth: '700px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Main Heading (H1)</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Section Heading (H2)</h2>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Subsection Heading (H3)</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            This is regular paragraph text using Rubik. It's clean, readable, and pairs beautifully with the Playfair Display headings. The contrast between the geometric sans-serif and elegant serif creates visual interest while maintaining excellent readability.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
            This is smaller text in muted color, perfect for captions or secondary information.
          </p>
        </div>
      </section>
    </div>
  );
}