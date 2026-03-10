'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    title?: string;
    subtitle?: string;
    items: FAQItem[];
}

export default function FAQ({ title = 'Frequently Asked Questions', subtitle, items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section">
            <div className="container">
                <div className={styles.header}>
                    <div className="divider divider--center" />
                    <h2>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
                <div className={styles.list}>
                    {items.map((item, i) => (
                        <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
                            <button
                                className={styles.question}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                            >
                                <span>{item.question}</span>
                                <svg
                                    className={styles.icon}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M5 7.5L10 12.5L15 7.5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            {openIndex === i && (
                                <div className={styles.answer}>
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
