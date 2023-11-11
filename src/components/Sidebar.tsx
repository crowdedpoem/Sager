"use client"

import {
    BsSearch,
    BsEyeFill,
    BsBookmarkFill,
    BsPeopleFill,
    BsTerminalFill,
} from 'react-icons/bs'

import { AiFillFire, AiFillMessage, } from 'react-icons/ai'
import { IoMdArrowRoundUp } from 'react-icons/io'
import { MdNightlightRound, MdFeedback } from 'react-icons/md'
import { FaCog } from 'react-icons/fa'

import { useSession, signOut } from 'next-auth/react'

const sideBarTopData = [
    {
        name: 'Discover',
        items: [
            {
                title: 'Popular',
                icon: AiFillFire,
            },
            {
                title: 'Most Upvoted',
                icon: IoMdArrowRoundUp,
            },
            {
                title: 'Best Discussions',
                icon: AiFillMessage,
            },
            {
                title: 'Search',
                icon: BsSearch,
            },
        ]
    },
    {
        name: 'Manage',
        items: [
            {
                title: 'Bookmarks',
                icon: BsBookmarkFill,
            },
            {
                title: 'Reading history',
                icon: BsEyeFill,
            },
            {
                title: 'Focus Mode',
                icon: MdNightlightRound,
            },
            {
                title: 'Customize',
                icon: FaCog,
            },
        ]
    },
]

const datafooter = [

    {
        name: '',
        items: [
            {
                title: 'Docs',
                icon: BsBookmarkFill,
            },
            {
                title: 'Changelog',
                icon: BsTerminalFill,
            },
            {
                title: 'Feedback',
                icon: MdFeedback,
            },
            {
                title: 'Invite people',
                icon: BsPeopleFill,
            },
        ]
    },
]

export default function Layout() {
    const { data:session } = useSession()
    return (
        <div>
            <nav className="fixed w-full border-b border-gray-700 h-20 ">
                <div className="flex items-center justify-start justify-between">
                    <h2 className="mt-1 text-4xl font-bold tracking-light text-white md:text-2xl p-5 pl-20">Sager</h2>
                    <h1>Hi there {session?.user?.name ?? "log in"}</h1>
                    <button onClick={() => signOut()}>Sign Out</button>
                    <button type="button" className="rounded-full pr-10" >
                        <img className="w-10 h-10 rounded-full" src={session?.user?.image ?? "https://flowbite.com/docs/images/people/profile-picture-1.jpg"} alt="user photo" />
                    </button>
                </div>
            </nav>
            <div className='min-h-screen' >
                <div className='min-w-[240px] border-r border-gray-700 relative flex flex-col pt-28 py-10 h-full min-h-screen group' >

                    <div className={`px-4 flex justify-center flex-col mb-4 w-full`} >
                        <button className='flex items-center justify-center w-full py-2 my-2 font-semibold text-gray-300 bg-red-500 rounded-lg' >
                            <p>Share an Experience</p>
                        </button>
                    </div>

                    <div className='grow'>
                        {sideBarTopData.map((group, index) => (
                            <div key={index} className='my-2' >
                                <p className='mb-2 ml-4 text-md text-gray-400' >{group.name}</p>

                                {group.items.map((item, index2) => (
                                    <div key={index2} className='flex px-4 py-1 cursor-pointer hover:bg-gray-400 hover:bg-opacity-40 ' >
                                        <a className="group flex items-center hover:text-white ">
                                            <item.icon className='text-lg text-red-500' />
                                            <p className='ml-4 text-sm text-gray-400' > {item.title}</p>
                                        </a>
                                    </div>

                                ))}
                            </div>
                        ))}
                    </div>

                    <div>
                        {datafooter.map((group, index) => (
                            <div key={index} className='my-2' >
                                <p className='mb-2 ml-4 text-sm text-gray-500' >{group.name}</p>

                                {group.items.map((item, index2) => (
                                    <div key={index2} className='flex px-4 py-1 cursor-pointer hover:bg-gray-400 hover:bg-opacity-40 ' >
                                        <a className="group flex items-center hover:text-white ">
                                            <item.icon className='text-lg text-red-500' />
                                            <p className='ml-4 text-sm text-gray-400' > {item.title}</p>
                                        </a>
                                    </div>

                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={`px-4 flex justify-center flex-col mb-4 w-full`} >
                        <button className='flex items-center justify-center w-full py-2 my-2 font-semibold text-gray-300 bg-red-500 rounded-lg' >
                            <p>Logout</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}