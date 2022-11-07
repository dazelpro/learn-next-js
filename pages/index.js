import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Dashboard</title>
                <meta
                    name="description"
                    content="Ini adalah halaman dashboard"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title-page">Welcome</h1>
                <p style={{ marginTop: "12px" }}>
                    Website ini dibuat menggunakan Next.js yang merupakan
                    Framework dari React.js
                </p>
            </main>
        </Layout>
    );
}
