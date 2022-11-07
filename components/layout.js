import Sidenav from "./sidenav";

export default function Layout({ children }) {
    return (
        <>
            <div className="side">
                <Sidenav></Sidenav>
            </div>
            <div className="content">{children}</div>
        </>
    );
}
