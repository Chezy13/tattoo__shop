import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <main>
            <h1>404 Content Not Found</h1>
            <p><Link href="/">Back to Home </Link></p>
            <p><Link href="/catalog">Back to Catalog </Link></p>
        </main>
    );
};

export default NotFoundPage;