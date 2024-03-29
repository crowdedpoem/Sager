
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import NavBar from '@/components/NavBar'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QProvider from "./queryProvider"

type Props = {
    children: ReactNode
}

const queryClient = new QueryClient()

const Layout = (props: Props) => {
    return (
        <>
        <QProvider>
            <div className="min-h-screen h-screen flex flex-col">

                <header className="h-20">
                    <NavBar />
                </header>

                <div className="flex-1 flex flex-row overflow-y-hidden">
                    <main className="flex-1 overflow-y-auto ">
                        {props.children}

                    </main>

                    <nav className="order-first overflow-y-auto border-r border-gray-700">
                        <Sidebar />
                    </nav>
                </div>

                {/* <footer className="border-t border-red-300 p-2">Footer</footer> */}
            </div>
            </QProvider>
        </>

    )
}

export default Layout;