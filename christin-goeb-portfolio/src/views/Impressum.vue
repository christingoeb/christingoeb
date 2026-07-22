<template>
    <div class="impressum-page">
        <main class="impressum-card">
            <router-link class="back-link" to="/">
                <span aria-hidden="true">←</span>
                <span>Zurück zur Homepage</span>
            </router-link>

            <h1>Impressum</h1>

            <section>
                <h2>Angaben gemäß § 5 DDG</h2>

                <p>
                    Christin Göb<br />
                    04249 Leipzig<br />
                    Deutschland
                </p>
            </section>

            <section>
                <h2>Kontakt</h2>

                <p>
                    E-Mail:
                    <a href="mailto:christin.goeb@t-online.de">
                        christin.goeb@t-online.de
                    </a>
                </p>
            </section>

            <section>
                <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>

                <p>
                    Christin Göb<br />
                    04249 Leipzig
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
