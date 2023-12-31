"use client"

import { useState } from "react";
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
import AddPost from '../../src/app/(site)/addPost/page'
import { FaCog } from 'react-icons/fa'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
const App = () => {
    const [open, setOpen] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const { data: session } = useSession()



    return (
        <div className="flex ">
            <div className={` ${open ? "w-64" : "w-20 "} h-screen duration-300`}>
                {/* <img
                    src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/452/external-hamburger-menu-bar-with-parallel-navigation-button-basic-fresh-tal-revivo.png"
                    className={`absolute cursor-pointer top-7 left-5 align-middle w-7  bg-transparent ${!open && "rotate-180 left-3"}`}
                    onClick={() => setOpen(!open)}
                /> */}
                <button onClick={() => setOpen(!open)} className="absolute cursor-pointer top-4 left-2 align-middle p-5">
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-100'} `} ></span>
                    <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `} ></span>

                </button>
                <div className="mt-20">
                    <div className={` px-4 flex justify-center flex-col w-full`} >
                        <button className={` ${open ? "py-2 my-2" : "p-1"} flex items-center justify-center w-full font-semibold text-gray-100 bg-purple rounded-lg`} onClick={() => setShowModal(true)}>
                            {!open && <p>+</p>}
                            {open && <p>Share a Post</p>}

                        </button>
                    </div>

                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-full max-w-7xl max-h-full">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start sticky top-0 overflow-hidden bg-white justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Add an Experince
                                            </h3>
                                        </div>
                                        {/*body*/}
                                        <AddPost />
                                        {/*footer*/}
                                        <div className="flex items-center sticky bottom-0 bg-white overflow-hidden justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="bg-purple text-white font-bold w-24 uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-50 fixed inset-0 z-40 bg-purple"></div>
                        </>
                    ) : null}

                    {sideBarTopData.map((group, index) => (
                        <div key={index} className='my-10' >
                            <p className={`${!open && "hidden"} mb-2 ml-4 text-md text-gray-700`} >{group.name}</p>

                            {group.items.map((item, index2) => (
                                <div key={index2} className={`${!open ? "px-8" : "px-4"} flex  py-1 cursor-pointer hover:bg-gray-400 hover:bg-opacity-40 hover:rounded-md`} >
                                    <a className="group flex items-center hover:text-white ">
                                        <item.icon className='text-lg text-purple' />
                                        <p className={`${!open && "hidden"} ml-4 text-sm text-gray-700`} > {item.title}</p>
                                    </a>
                                </div>

                            ))}
                        </div>
                    ))}


                    {datafooter.map((group, index) => (
                        <div key={index} className='my-2' >
                            <p className={`${!open && "hidden"} mb-2 ml-4 text-md text-gray-700`} >{group.name}</p>

                            {group.items.map((item, index2) => (
                                <div key={index2} className={`${!open ? "px-8" : "px-4"} flex  py-1 cursor-pointer hover:bg-gray-400 hover:bg-opacity-40 hover:rounded-md`} >
                                    <a className="group flex items-center hover:text-white ">
                                        <item.icon className='text-lg text-purple' />
                                        <p className={`${!open && "hidden"} ml-4 text-sm text-gray-700`} > {item.title}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    ))}

                    <div className={`px-4 flex justify-center flex-col mb-4 w-full`} >
                        {session === null ?
                            <button
                                className='flex items-center justify-center w-full py-2 my-2 font-semibold text-white bg-red-300 rounded-lg'
                            >
                                <Link href='/login'>
                                    {!open && <p>&gt;-</p>}
                                    {open && <p>Log In</p>}</Link>
                            </button> :
                            <button
                                className='flex items-center justify-center w-full py-2 my-2 font-semibold text-white bg-red-300 rounded-lg'
                                onClick={() => signOut()}
                            >
                                {!open && <p>&lt;-</p>}
                                {open && <p>Sign Out</p>}
                            </button>
                        }
                    </div>
                </div>

            </div>
        </div >
    );
};
export default App;


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