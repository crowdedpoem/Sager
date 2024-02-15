"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUsersWithPath } from '../../../lib/calls';


export default function Page({
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {

    const career1 = (searchParams?.career1 ?? "") as string
    const career2 = (searchParams?.career2 ?? "") as string

    const [experiences, setExperiences] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getUsersWithPath(career1, career2);
            var tempAcc = Array();
            for (const user of response) {
                tempAcc.push(user["Experiences"][user.Experiences.length-1])
            }
            setExperiences(tempAcc)
        }
        fetchData();
    }, [experiences]);

    return (<>
        <h1>My Search thing</h1>
        <p>{career1} and {career2}</p>
        {experiences?.map((exp: any) => (
            <div key={exp.userId} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <Link href={{ pathname: `/dashboard/post/${exp.userId}` }}>
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
                </article>
            </div>
        ))}

    </>
    )

} 