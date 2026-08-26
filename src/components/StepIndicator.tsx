import styles from './StepIndicator.module.css'

type Props = { activeStep: 1 | 2 }
export default function StepIndicator({ activeStep }: Props) {
  return <div className={styles.steps} aria-label="Registration progress">
    <div className={`${styles.step} ${activeStep >= 1 ? styles.active : ''}`}><span>1</span><div><strong>Contact Info</strong><small>Required details</small></div></div>
    <div className={`${styles.line} ${activeStep === 2 ? styles.complete : ''}`} aria-hidden="true" />
    <div className={`${styles.step} ${activeStep >= 2 ? styles.active : ''}`}><span>2</span><div><strong>About You</strong><small>Almost there</small></div></div>
  </div>
}