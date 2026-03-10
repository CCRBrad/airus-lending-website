import Link from 'next/link';
import styles from './FeatureCards.module.css';

interface FeatureCard {
    icon: string;
    title: string;
    description: string;
    href?: string;
}

interface FeatureCardsProps {
    title?: string;
    subtitle?: string;
    cards: FeatureCard[];
    columns?: 2 | 3 | 4;
    variant?: 'default' | 'dark';
}

export default function FeatureCards({
    title,
    subtitle,
    cards,
    columns = 3,
    variant = 'default',
}: FeatureCardsProps) {
    return (
        <section className={`section ${variant === 'dark' ? 'section--dark' : ''}`}>
            <div className="container">
                {title && (
                    <div className={styles.header}>
                        <div className={`divider ${variant === 'dark' ? '' : 'divider--center'}`} />
                        <h2>{title}</h2>
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>
                )}
                <div className={`${styles.grid} ${styles[`cols${columns}`]}`}>
                    {cards.map((card, i) => {
                        const inner = (
                            <>
                                <div className={styles.iconWrap}>
                                    <span className={styles.icon}>{card.icon}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDesc}>{card.description}</p>
                                {card.href && <span className={styles.arrow}>Learn more →</span>}
                            </>
                        );

                        if (card.href) {
                            return (
                                <Link key={i} href={card.href} className={`${styles.card} ${styles.cardLink}`}>
                                    {inner}
                                </Link>
                            );
                        }

                        return (
                            <div key={i} className={styles.card}>
                                {inner}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
