import styles from './LeftPanel.module.css'

export default function LeftPanel() {
  return <aside className={styles.panel}>
    <div className={styles.texture} aria-hidden="true" />
    <svg className={styles.wifi} width="280" height="220" viewBox="0 0 280 220" fill="none" aria-hidden="true">
      <path d="M10 90 Q140 -20 270 90" stroke="white" strokeWidth="22" strokeLinecap="round" />
      <path d="M45 130 Q140 50 235 130" stroke="white" strokeWidth="22" strokeLinecap="round" />
      <path d="M85 168 Q140 110 195 168" stroke="white" strokeWidth="22" strokeLinecap="round" />
      <circle cx="140" cy="200" r="16" fill="white" />
    </svg>
    <div className={styles.copy}>
      <p className={styles.kicker}>ZENZELE ITERELENG</p>
      <h2>Welcome to<br /><strong>Zenzele Itereleng Wi-Fi.</strong><br />Connect to your community.</h2>
      <p className={styles.caption}>A better connection starts here.</p>
    </div>
  </aside>
}