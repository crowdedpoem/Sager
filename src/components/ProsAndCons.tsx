"use client"

import { Prosto_One } from "next/font/google";


export default function Layout(props: { pros: any; cons: any; }) {
    let pros = props.pros;
    let cons = props.cons;
    // console.log(pros)

    return (
        <>
            <main className="flex justify-center items-center">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-2 ">
                        <div className="border-r-2 border-purple">
                            <h2 className="font-big-shoulders-display text-2xl text-gray-700 pb-3 flex justify-center">
                                PROS
                            </h2>
                            <div>

                                {pros?.map((pro: any, index: number) => (
                                    // <li key={index} className="text-[15px] list-disc">
                                    //     {pro.description}
                                    // </li>
                                    <details className="p-4 [&_svg]:open:-rotate-180" open key={index}> 
                                        <summary className="flex cursor-pointer list-none items-center gap-4">
                                            <div>
                                                <svg className="rotate-0 transform text-purple transition-all duration-300" fill="none" height="20" width="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </div>
                                            <div>{pro.description}</div>
                                        </summary>

                                        <p className="pt-3 pl-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget varius quam. Nunc et fringilla erat. Suspendisse sagittis tellus et metus mattis iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <h2 className="font-big-shoulders-display text-2xl text-gray-700 pb-3 flex justify-center">
                                CONS
                            </h2>
                            {cons?.map((con: any, index: number) => (
                                <details className="p-4 [&_svg]:open:-rotate-180" open key={index}>
                                    <summary className="flex cursor-pointer list-none items-center gap-4">
                                        <div>
                                            <svg className="rotate-0 transform text-purple transition-all duration-300" fill="none" height="20" width="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                        <div>{con.description}</div>
                                    </summary>

                                    <p className="pt-3 pl-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget varius quam. Nunc et fringilla erat. Suspendisse sagittis tellus et metus mattis iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>

                                </details>
                            ))}

                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}