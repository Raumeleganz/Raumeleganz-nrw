"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>404 - Seite nicht gefunden</h1>
            <p>Die angeforderte Seite konnte nicht gefunden werden.</p>
            <Link href="/">Zur Startseite</Link>
        </div>
    );
}