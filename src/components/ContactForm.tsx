import { useState } from 'react'
import GenderToggle from './GenderToggle'
import styles from './ContactForm.module.css'

type FormState = { mobile: string; email: string; gender: 'male' | 'female'; ageRange: string; marketingConsent: boolean; termsAccepted: boolean }
const initialState: FormState = { mobile: '', email: '', gender: 'male', ageRange: '', marketingConsent: true, termsAccepted: true }
function Icon({ type }: { type: 'user' | 'mail' }) { return type === 'user' ? <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M4.5 20c.8-4 3.3-6 7.5-6s6.7 2 7.5 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="m4.5 7 7.5 6 7.5-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg> }
export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => { setFormState((current) => ({ ...current, [key]: value })); setSubmitted(false) }
  const submit = () => { if (!formState.termsAccepted) return; console.log(formState); setSubmitted(true) }
  return <div className={styles.form}>
    <div className={styles.field}><label htmlFor="mobile">Mobile Number</label><div className={styles.inputWrap}><Icon type="user" /><input id="mobile" type="tel" value={formState.mobile} onChange={(event) => update('mobile', event.target.value)} placeholder="e.g. 082 123 4567" /></div></div>
    <div className={styles.field}><label htmlFor="email">E-mail</label><div className={styles.inputWrap}><Icon type="mail" /><input id="email" type="email" value={formState.email} onChange={(event) => update('email', event.target.value)} placeholder="you@example.com" /></div></div>
    <fieldset className={styles.fieldset}><legend>Gender</legend><GenderToggle value={formState.gender} onChange={(value) => update('gender', value)} /></fieldset>
    <div className={styles.field}><label htmlFor="ageRange">Age Range</label><div className={styles.selectWrap}><select id="ageRange" value={formState.ageRange} onChange={(event) => update('ageRange', event.target.value)}><option value="">Choose...</option>{['Under 18', '18–24', '25–34', '35–44', '45–54', '55+'].map((age) => <option key={age}>{age}</option>)}</select><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></div></div>
    <div className={styles.checks}><label><input type="checkbox" checked={formState.marketingConsent} onChange={(event) => update('marketingConsent', event.target.checked)} /><span>I consent to receiving marketing communication from this venue and/or business partners.</span></label><label><input type="checkbox" checked={formState.termsAccepted} onChange={(event) => update('termsAccepted', event.target.checked)} /><span>I have read and accept the <a href="#terms">Wi-Fi Terms of use</a> (required).</span></label></div>
    <button type="button" className={styles.continueButton} disabled={!formState.termsAccepted} onClick={submit}>Continue <span aria-hidden="true">→</span></button>
    {submitted && <p className={styles.success} role="status">You're connected! ✓</p>}
  </div>
}