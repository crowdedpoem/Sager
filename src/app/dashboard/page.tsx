import axios from "axios";
// import { useState, useEffect } from "react";
import SearchBar from '@/components/SearchBar'
import { Suspense } from 'react'
import Link from 'next/link';
import Loading from './loading'

import { getAllExperiences } from "../../../lib/calls";


export default async function Page() {

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
                                <article className="overflow-hidden rounded-lg shadow-lg bg-white">
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
                                </article>
                            </div>
                        ))}
                    </div>
                </Suspense>

            </div>
        </>

    );
}

// function getRandomShade(baseColor: string, randomDelta: number = 20): string {
//     const isHexColor = /^#([0-9A-Fa-f]{3}){1,2}$/i.test(baseColor);
//     if (!isHexColor) {
//       throw new Error("Invalid hex color format");
//     }
  
//     const clamp = (value: number) => Math.min(255, Math.max(0, value));
//     const getRandomValue = (base: number) => clamp(base + Math.round((Math.random() - 0.5) * 2 * randomDelta));
  
//     const [baseR, baseG, baseB] = baseColor.match(/\w\w/g)!.map((hex) => parseInt(hex, 16));
  
//     const finalR = getRandomValue(baseR);
//     const finalG = getRandomValue(baseG);
//     const finalB = getRandomValue(baseB);
  
//     const finalColor = `#${finalR.toString(16).padStart(2, "0")}${finalG.toString(16).padStart(2, "0")}${finalB.toString(16).padStart(2, "0")}`;
//     console.log(finalColor)
  
//     return `bg-${finalColor}`;
//   }

  function getRandomShade(): string {
    const possibleWidths = [800, 700, 600, 500];
    const randomIndex = Math.floor(Math.random() * possibleWidths.length);
    console.log(`bg-red-${possibleWidths[randomIndex]}`)
    return `bg-red-${possibleWidths[randomIndex]}`;
  }