import { Suspense } from 'react'
import Link from 'next/link';
import Loading from "@/app/dashboard/loading";
import { getSave } from "../../../../lib/calls";


export default async function Page() {

    const savedExps = await getSave();
    if (!savedExps) {
        return <h1>No Saved Experiences Retrieved</h1>
    }

    return (
        <>
            <Suspense fallback={<Loading />} >
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className=" flex flex-wrap mb-4">
                <h1>Your saved posts</h1>
                </div>
           
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                
                        {savedExps?.map((exp: any) => (
                            <div key={exp.userId} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
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
        

            </div>
            </Suspense>
        </>

    );
}



  function getRandomShade(): string {
    const possibleWidths = [800, 700, 600, 500];
    const randomIndex = Math.floor(Math.random() * possibleWidths.length);
    console.log(`bg-red-${possibleWidths[randomIndex]}`)
    return `bg-red-${possibleWidths[randomIndex]}`;
  }