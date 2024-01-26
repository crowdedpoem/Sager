"use client"

import { BsFillBagFill } from "react-icons/bs";
import { BsFillAirplaneFill } from "react-icons/bs";
import { PiMagnifyingGlassBold } from "react-icons/pi";

export default function Layout(props: { industry: any, travel: any, keywords: any }) {
    let industry = props.industry;
    let travel = props.travel;
    let keywords = props.keywords;


    return (
        <>
            <div className='flex justify-center mb-12 text-gray-700'>

                <div className="grid grid-cols-3">
                    <div className="p-10 border-t-2 border-b-2 border-purple justify-center items-center flex flex-col">

                        <div className='flex space-x-2 '>
                            <h2 className="font-big-shoulders-display text-2xl pb-3 flex">
                                Industry
                            </h2>
                            <BsFillBagFill />
                        </div>


                        <div>
                            <p className="text-[15px]">
                                This is test code.
                            </p>
                        </div>

                    </div>
                    <div className="p-10 border-2 border-purple justify-center items-center flex flex-col">
                        <div className='flex space-x-2 '>
                            <h2 className="font-big-shoulders-display text-2xl pb-3 flex">
                                Travelling
                            </h2>
                            <BsFillAirplaneFill />
                        </div>

                        <div>
                            <p className="text-[15px]">
                                This is test code.
                            </p>
                        </div>

                    </div>
                    <div className="p-10  border-t-2 border-b-2 border-purple justify-center items-center flex flex-col">
                        <div className='flex space-x-2 '>
                            <h2 className="font-big-shoulders-display text-2xl pb-3 flex">
                                Keywords
                            </h2>
                            <PiMagnifyingGlassBold />
                        </div>
                        <div>
                            <p className="text-[15px]">
                                This is test code.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )

}