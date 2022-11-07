import Sidenav from "./sidenav";

export default function Layout({ children }) {
    return (
        <>
            {/* <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
                <h1>Halo</h1>
            </div>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
                    <h1 className="h-40 bgRed">{children}</h1>
                </div>
                <div className="lg:pl-[19.5rem]">
                    <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0">
                        <h1 className="h-40 bgRed">{children}</h1>
                    </div>
                </div>
            </div> */}

            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="hidden lg:block fixed z-20 inset-0 pt-10 left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
                    <Sidenav></Sidenav>
                </div>
                <div className="lg:pl-[19.5rem]">
                    <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0">
                        {children}
                    </div>
                </div>
            </div>

            {/* <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="justify-center bgRed">
                        1
                    </div>
                    <div className="col-span-2 justify-center bgBlue">
                        {children}
                    </div>
                </div>
            </div> */}
        </>
    );
}
