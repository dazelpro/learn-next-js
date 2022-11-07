import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Products() {
    return (
        <Layout>
            <Head>
                <title>Products</title>
                <meta
                    name="description"
                    content="Ini adalah halaman product list"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="title-page">Products</h1>
        </Layout>
    );
}
