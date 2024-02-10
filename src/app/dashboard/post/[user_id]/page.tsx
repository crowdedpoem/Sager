"use client";

import ProsAndCons from '@/components/ProsAndCons'
import { useState } from "react";
import Timeline from '@/components/TimeLine'
import Features from '@/components/Features'
import DayInTheLife from '@/components/DayInTheLife';
import AddExperienceModal from '@/components/AddExperienceModal';
import { getExperiencesFromUserId } from "../../../../../lib/calls";
import { experienceSchema } from "@/validators/experience";
import { z } from "zod";


type Experience = z.infer<typeof experienceSchema>


export default async function Post(
    { params }: any
) {

    const [showModal, setShowModal] = useState(false);

    const [exp, setExp] = useState<Experience | null>(null);

    const handleExp = (e: Experience) => {
        setExp(e);
    };

    const user_id = params.user_id
    const data = await getExperiencesFromUserId(user_id);
    const allExperiences = data.data;
    // console.log(data.data)
    // handleExp(allExperiences[0])

    return (
        <>
            <section className="">

                <div className="h-screen">
                    <div className="h-full flex gap-x-4">
                        <div className="w-full flex flex-col">
                            {/* <div className="bg-red-500">
                                header
                            </div> */}
                            <div className="flex-grow flex h-full overflow-auto">
                                <div className="w-1/2 overflow-auto border-r border-gray-700">
                                    <div className='flex flex-row-reverse m-5'>
                                        <button className={`py-2 my-2 flex items-center justify-center w-48 font-semibold text-gray-900 outline outline-purple rounded-lg hover: bg-gray-400 bg-white`} onClick={() => setShowModal(true)}>
                                            <p>Add an Experience</p>
                                        </button>
                                    </div>

                                    <AddExperienceModal isOpen={showModal} setShowModal={setShowModal} />

                                    <Timeline items={allExperiences} expState={handleExp} />

                                </div>

                                <div className="w-1/2 overflow-auto">
                                    <div className='flex justify-center'>

                                        {exp != null ? (
                                            <div >
                                                <div className='m-8'>
                                                    <div className="flex justify-between mb-3">
                                                        <h3 className="text-3xl font-semibold text-gray-700">{exp.title}</h3>
                                                        <h1 className="text-gray-700 pt-1">From {exp.startDate.substring(0, exp.startDate.indexOf("T"))} To {exp.endDate.substring(0, exp.startDate.indexOf("T"))}</h1>
                                                    </div>
                                                    <p className="mb-4 text-lg font-normal text-gray-700">
                                                        {exp.description}
                                                    </p>
                                                </div>

                                                <Features industry={null} travel={null} keywords={null} />
                                                <ProsAndCons pros={exp.pros} cons={exp.cons} />

                                                <h1 className='font-big-shoulders-display text-2xl pb-3 flex text-gray-700 flex items-center justify-center pt-24'>TODO Big picture section</h1>
                                                <DayInTheLife items={exp.dayEvents} />

                                            </div>
                                        ) : (
                                            <h1 className="text-black">click on one bruh</h1>
                                        )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )

} 