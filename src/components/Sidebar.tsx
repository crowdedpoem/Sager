"use client"

import { useState } from "react";
import {
    BsSearch,
    BsEyeFill,
    BsBookmarkFill,
} from 'react-icons/bs'
import { AiFillFire, AiFillMessage, } from 'react-icons/ai'
import { MdNightlightRound, MdFeedback } from 'react-icons/md'
import AddPost from '../app/addPost/page'
import { FaCog } from 'react-icons/fa'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import AddExperienceModal from '@/components/AddExperienceModal';

const App = () => {
    const [open, setOpen] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const { data: session } = useSession()

    const handleModalState = (e: boolean) => {
        setShowModal(e);
    };

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

                    <AddExperienceModal isOpen={showModal} setShowModal={setShowModal} />


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


                    {/* {datafooter.map((group, index) => (
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
                    ))} */}

                    <div className={`px-4 flex justify-center flex-col mb-4 w-full mt-36`} >
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
                title: 'Search',
                icon: BsSearch,
            },
            {
                title: 'Bookmarks',
                icon: BsBookmarkFill,
            },
            {
                title: 'Reading history',
                icon: BsEyeFill,
            },
        ]
    },
    {
        name: 'Manage',
        items: [
            {
                title: 'Docs',
                icon: BsBookmarkFill,
            },
            {
                title: 'Feedback',
                icon: MdFeedback,
            },
        ]
    },
]

// const datafooter = [

//     {
//         name: '',
//         items: [
//             // {
//             //     title: 'Docs',
//             //     icon: BsBookmarkFill,
//             // },
//             // // {
//             // //     title: 'Changelog',
//             // //     icon: BsTerminalFill,
//             // // },
//             // {
//             //     title: 'Feedback',
//             //     icon: MdFeedback,
//             // },
//             // // {
//             // //     title: 'Invite people',
//             // //     icon: BsPeopleFill,
//             // // },
//         ]
//     },
// ]