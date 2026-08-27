import LeftPanel from './components/LeftPanel'
import StepIndicator from './components/StepIndicator'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function TreeLogo() {
  return (
    <div className="app-brand" aria-label="Zenzele Itereleng">
      <svg className="app-logo" viewBox="0 0 42 42" aria-hidden="true">
        <path d="M4 21a17 17 0 0 1 34 0H4Z" fill="#2d6a4f" />
        <rect x="18.5" y="21" width="5" height="16" rx="1.5" fill="#1e4d2b" />
      </svg>
      <span>
        <strong>zenzele</strong>
        <em>itereleng</em>
      </span>
    </div>
  )
}

function WifiIcon() {
  return (
    <svg className="app-wifi-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M2 8.5a16 16 0 0 1 20 0M5.5 12.5a10.5 10.5 0 0 1 13 0M9.5 16.2a5 5 0 0 1 5 0M12 20h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function App() {
  return (
    <main className="app-shell">
      <LeftPanel />
      <section className="app-right-panel">
        <div className="app-content">
          <header className="app-header">
            <TreeLogo />
            <button className="app-connect-button" type="button">
              <WifiIcon />
              Stay Connected
            </button>
          </header>
          <StepIndicator activeStep={1} />
          <ContactForm />
        </div>
        <Footer />
      </section>
    </main>
  )
}
