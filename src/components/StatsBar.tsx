import styles from './StatsBar.module.css';

interface Stat {
    value: string;
    label: string;
}

interface StatsBarProps {
    stats: Stat[];
    variant?: 'dark' | 'light';
}

export default function StatsBar({ stats, variant = 'dark' }: StatsBarProps) {
    return (
        <section className={`${styles.bar} ${styles[variant]}`}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.stat}>
                            <div className={styles.value}>{stat.value}</div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
