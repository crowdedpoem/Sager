"use client"


export default function Layout() {
    return (
        <nav className="fixed w-full border-b border-gray-700">
            <div className="flex items-center justify-start justify-between">
                <a href="/dashboard">
                    <h2 className="text-4xl font-bold tracking-light text-gray-700 p-5 pl-20">Sager</h2>
                </a>
                <button type="button" className="rounded-full pr-10" >
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                </button>
            </div>
        </nav>
    )


}