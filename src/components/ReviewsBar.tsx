import styles from './ReviewsBar.module.css';

interface ReviewsBarProps {
    rating?: number;
    count?: number;
    source?: string;
}

export default function ReviewsBar({
    rating = 4.9,
    count = 200,
    source = 'Google',
}: ReviewsBarProps) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;

    return (
        <div className={styles.bar}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.stars}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                                key={i}
                                className={`${styles.star} ${i < fullStars ? styles.filled : i === fullStars && hasHalf ? styles.half : ''}`}
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                    fill={i < fullStars ? 'currentColor' : 'none'}
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ))}
                    </div>
                    <span className={styles.rating}>{rating}</span>
                    <span className={styles.divider}>|</span>
                    <span className={styles.count}>{count}+ verified reviews</span>
                    <span className={styles.divider}>|</span>
                    <span className={styles.source}>{source}</span>
                    <div className={styles.badges}>
                        <span className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            Licensed Broker
                        </span>
                        <span className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            Equal Housing
                        </span>
                        <span className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            VA Specialists
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
