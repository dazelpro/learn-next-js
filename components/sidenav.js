import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidenav() {
    const router = useRouter();
    return (
        <div className="sidenav">
            <div className="link">
                <Link className={router.pathname == "/" ? "active" : ""} href="/">
                    Dashboard
                </Link>
            </div>
            <div className="link">
                <Link className={router.pathname == "/products" ? "active" : ""} href="/products">
                    Products
                </Link>
            </div>
            <div className="link">
                <Link className={router.pathname == "/tags" ? "active" : ""} href="/">
                    Tags
                </Link>
            </div>
            <div className="link">
                <Link className={router.pathname == "/articles" ? "active" : ""} href="/">
                    Articles
                </Link>
            </div>
            <div className="link">
                <Link className={router.pathname == "/users" ? "active" : ""} href="/">
                    Users
                </Link>
            </div>
        </div>
    );
}
