import axios from "axios";
// import { useState, useEffect } from "react";
import SearchBar from '@/components/SearchBar'
import { Suspense } from 'react'
import Link from 'next/link';
import Loading from './loading'
import { useSession } from 'next-auth/react'


import { getAllExperiences } from "../../../lib/calls";


export default async function Page() {

    // const { data:session } = useSession()
    const experiences = await getAllExperiences();
    // console.log(experiences)

    return (
        <>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className=" flex flex-wrap mb-4">
                    <SearchBar />
                </div>
                <Suspense fallback={<Loading />}>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {experiences?.map((exp: any) => (
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                {/* <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                                    <Link href={{ pathname: `/dashboard/post/${exp.userId}`}}>
                                        <div className={`bg-purple block h-52 w-full`}>

                                        </div>
                                    </Link>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <Link className="no-underline hover:underline text-black" href={`/dashboard/post/${exp.userId}`}>
                                                {exp.title}
                                            </Link>
                                        </h1>
                                         <p className="text-black text-sm">{exp.duration}</p> 
                                    </header>

                                    <p className="flex items-center justify-between leading-tight p-2 md:p-4">{exp.description}</p>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <Link
                                            href={`/dashboard/post/${exp.userId}`}
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg "
                                        >
                                            Read more
                                            <svg
                                                className="w-3.5 h-3.5 ml-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </Link>
                                    </footer>
                                </article> */}

                                <article key={exp.id} className="flex max-w-xl flex-col items-start rounded-lg shadow-lg p-5 ">
                                    <Link href={{ pathname: `/dashboard/post/${exp.userId}` }}>
                                        <div className={`bg-purple h-52 rounded-lg`}>
                                            <span className="h-52 w-max">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;</span>
                                        </div>
                                    </Link>
                                    <div className="flex items-center gap-x-4 text-xs pt-5">

                                        <time dateTime={exp.datetime} className="text-gray-500">
                                            7-12-22
                                        </time>
                                        <a
                                            href={`/dashboard/post/${exp.userId}`}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            Medical
                                        </a>
                                    </div>
                                    <div className="group relative justify-between h-32">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={`/dashboard/post/${exp.userId}`}>
                                                {/* <span className="absolute inset-0" /> */}
                                                {exp.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{exp.description}</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <img className="h-10 w-10 rounded-full bg-gray-50" src={"https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="} alt="user photo" />

                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href={`/dashboard/post/${exp.userId}`}>
                                                    <span className="absolute inset-0" />
                                                    {/* {exp.author.name} */}
                                                    Sankalp
                                                </a>
                                            </p>
                                            <p className="text-gray-600">Doctor</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </Suspense>

            </div>
        </>

    );
}
