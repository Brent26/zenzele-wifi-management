import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import LeftPanel from './components/LeftPanel'
import StepIndicator from './components/StepIndicator'
import styles from './App.module.css'

function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 9.5a13 13 0 0 1 17 0M7 13a8.2 8.2 0 0 1 10 0M10.2 16.2a3.7 3.7 0 0 1 3.6 0M12 19h.01" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function Logo() {
  return (
    <div className={styles.brand}>
      <svg className={styles.logo} viewBox="0 0 48 52" aria-hidden="true">
        <path d="M24 3c12.7 0 23 9 23 20.2H1C1 12 11.3 3 24 3Z" fill="var(--green-mid)" />
        <path d="M20 22h8v24h-8z" fill="var(--green-dark)" rx="2" />
      </svg>
      <span>
        <strong>zenzele</strong>
        <em>itereleng</em>
      </span>
    </div>
  )
}

export default function App() {
  return (
    <main className={styles.appShell}>
      <LeftPanel />
      <section className={styles.rightPanel}>
        <div className={styles.content}>
          <header className={styles.header}>
            <Logo />
            <button type="button" className={styles.connectButton}>
              <WifiIcon />
              Stay Connected
            </button>
          </header>

          <div className={styles.intro}>
            <p className={styles.eyebrow}>STEP 1 OF 2</p>
            <h1>Complete your details</h1>
            <p>Enter your contact details to connect and continue.</p>
          </div>

          <StepIndicator activeStep={1} />
          <ContactForm />
        </div>
        <Footer />
      </section>
    </main>
  )
}
