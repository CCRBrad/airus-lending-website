// JSON-LD Schema components for SEO
export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'Airus Lending',
        url: 'https://airuslending.com',
        logo: 'https://airuslending.com/logo.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-800-555-0199',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish'],
        },
        sameAs: [
            'https://www.facebook.com/airuslending',
            'https://www.linkedin.com/company/airuslending',
            'https://www.instagram.com/airuslending',
        ],
        description: 'Airus Lending is a mortgage broker offering residential, commercial, and SBA financing with expert guidance across 50+ loan programs.',
        areaServed: { '@type': 'Country', name: 'United States' },
        priceRange: '$$',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function LoanProductSchema({ name, description, url }: { name: string; description: string; url: string }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FinancialProduct',
        name,
        description,
        url: `https://airuslending.com${url}`,
        provider: {
            '@type': 'FinancialService',
            name: 'Airus Lending',
            url: 'https://airuslending.com',
        },
        category: 'Mortgage Loan',
        areaServed: { '@type': 'Country', name: 'United States' },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: `https://airuslending.com${item.url}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function ArticleSchema({ title, description, url, datePublished }: { title: string; description: string; url: string; datePublished: string }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url: `https://airuslending.com${url}`,
        datePublished,
        dateModified: datePublished,
        author: { '@type': 'Organization', name: 'Airus Lending' },
        publisher: {
            '@type': 'Organization',
            name: 'Airus Lending',
            url: 'https://airuslending.com',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
