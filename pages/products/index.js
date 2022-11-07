import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/layout";

export default function Products() {
    const [name, setName] = useState('Zeldianto');
    
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
            <div style={{marginTop:20}}>
                <p>{name}</p>
                <button onClick={()=>{setName('Zeldidianto Eka Put')}}>Klik</button>
            </div>
        </Layout>
    );
}
