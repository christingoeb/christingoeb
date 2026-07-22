<template>
    <div class="impressum-page">
        <main class="impressum-card">
            <router-link class="back-link" to="/">
                <span aria-hidden="true">←</span>
                <span>Zurück zur Homepage</span>
            </router-link>

            <h1>Datenschutzerklärung</h1>

            <section>
                <h2>1. Verantwortliche</h2>

                <p>
                    Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>

                <p>
                    Christin Göb<br />
                    04249 Leipzig<br />
                    Deutschland
                </p>

                <p>
                    E-Mail:
                    <a href="mailto:christin.goeb@t-online.de">
                        christin.goeb@t-online.de
                    </a>
                </p>
            </section>

            <section>
                <h2>2. Hosting</h2>

                <p>
                    Diese Website wird über Cloudflare Pages bereitgestellt.
                    Beim Besuch der Website können technisch notwendige
                    Informationen wie IP-Adresse, Browsertyp, Betriebssystem,
                    Datum und Uhrzeit des Zugriffs sowie aufgerufene Seiten
                    verarbeitet werden. Diese Verarbeitung dient der sicheren
                    und zuverlässigen Bereitstellung der Website.
                </p>
            </section>

            <section>
                <h2>3. Server-Logfiles</h2>

                <p>
                    Der Hosting-Anbieter erhebt und speichert automatisch
                    Informationen in Server-Logfiles. Diese Daten dienen
                    ausschließlich dem technischen Betrieb, der Sicherheit und
                    der Fehleranalyse.
                </p>
            </section>

            <section>
                <h2>4. Kontaktaufnahme</h2>

                <p>
                    Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben
                    ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                </p>
            </section>

            <section>
                <h2>5. Externe Links</h2>

                <p>
                    Diese Website enthält Links zu externen Webseiten,
                    beispielsweise GitHub oder LinkedIn. Für deren Inhalte und
                    Datenschutzbestimmungen sind ausschließlich die jeweiligen
                    Betreiber verantwortlich.
                </p>
            </section>

            <section>
                <h2>6. Cookies</h2>

                <p>
                    Diese Website verwendet keine Cookies zu Analyse- oder
                    Marketingzwecken.
                </p>
            </section>

            <section>
                <h2>7. Ihre Rechte</h2>

                <p>
                    Sie haben nach der Datenschutz-Grundverordnung (DSGVO)
                    insbesondere das Recht auf Auskunft, Berichtigung,
                    Löschung, Einschränkung der Verarbeitung,
                    Datenübertragbarkeit sowie Widerspruch gegen die
                    Verarbeitung Ihrer personenbezogenen Daten.
                </p>

                <p>
                    Außerdem haben Sie das Recht, sich bei einer zuständigen
                    Datenschutzaufsichtsbehörde zu beschweren.
                </p>
            </section>

            <section>
                <h2>8. Änderungen dieser Datenschutzerklärung</h2>

                <p>
                    Ich behalte mir vor, diese Datenschutzerklärung anzupassen,
                    sofern dies aufgrund technischer oder rechtlicher Änderungen
                    erforderlich wird.
                </p>
            </section>
        </main>
    </div>
</template>

<style scoped>
.impressum-page {
    min-height: 100vh;
    padding: 2rem 1rem;
    background: linear-gradient(180deg, #f3f4f6 0%, #fafafa 100%);
    color: #1f1f1f;
}

.impressum-card {
    max-width: 760px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #d9dde3;
    border-radius: 8px;
    padding: 1.3rem;
    display: grid;
    gap: 1rem;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    width: fit-content;
    text-decoration: none;
    color: #374151;
    font-size: 0.95rem;
    font-weight: 500;
    border: 1px solid #d9dde3;
    border-radius: 999px;
    padding: 0.35rem 0.75rem;
    background: #f8fafc;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.back-link:hover {
    background: #eef2f7;
    border-color: #cfd5de;
    color: #111827;
}

h1 {
    font-size: 1.6rem;
    color: #111827;
}

h2 {
    font-size: 1.05rem;
    margin-bottom: 0.35rem;
    color: #111827;
}

p {
    color: #374151;
    line-height: 1.6;
}

a {
    color: #1f2937;
}

@media (max-width: 640px) {
    .impressum-page {
        padding: 1.2rem 0.8rem;
    }

    .impressum-card {
        padding: 1rem;
    }
}
</style>
