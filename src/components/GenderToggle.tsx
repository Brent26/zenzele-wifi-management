import styles from './GenderToggle.module.css'

type Gender = 'male' | 'female'
type Props = { value: Gender; onChange: (value: Gender) => void }
function GenderIcon({ gender }: { gender: Gender }) { return gender === 'male' ? <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="7" cy="11" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="m10 8 5-5m0 0h-4m4 0v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg> : <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="6" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M9 10v6m-3 0h6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg> }
export default function GenderToggle({ value, onChange }: Props) { return <div className={styles.group} role="radiogroup" aria-label="Gender">
  {(['male', 'female'] as Gender[]).map((gender) => <button key={gender} type="button" role="radio" aria-checked={value === gender} className={value === gender ? styles.selected : ''} onClick={() => onChange(gender)}><GenderIcon gender={gender} />{gender[0].toUpperCase() + gender.slice(1)}</button>)}
</div> }