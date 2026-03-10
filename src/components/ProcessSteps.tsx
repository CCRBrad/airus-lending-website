import styles from './ProcessSteps.module.css';

interface Step {
    number: number;
    title: string;
    description: string;
}

interface ProcessStepsProps {
    title?: string;
    subtitle?: string;
    steps: Step[];
}

export default function ProcessSteps({
    title = 'How It Works',
    subtitle,
    steps
}: ProcessStepsProps) {
    return (
        <section className="section section--light">
            <div className="container">
                <div className={styles.header}>
                    <div className="divider divider--center" />
                    <h2>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
                <div className={styles.steps}>
                    {steps.map((step, i) => (
                        <div key={i} className={styles.step}>
                            <div className={styles.numberWrap}>
                                <span className={styles.number}>{step.number}</span>
                                {i < steps.length - 1 && <div className={styles.connector} />}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
