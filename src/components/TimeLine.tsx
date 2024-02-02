"use client"


export default function TimeLine(props: { items: any, expState: any }) {
    let experiences = props.items;
    let expState = props.expState;

    // console.log(experiences)

    return (
        <>
            <ol className="relative border-l border-purple ml-8 mt-8">
                {Array.isArray(experiences) && experiences.map((exp: any) => (
                    <li className="mb-10 ml-4" key={exp.id}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-purple "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                        <h3 className="text-lg font-semibold text-gray-700">{exp.title}</h3>
                        <p className="mb-4 text-base font-normal text-gray-700">
                            {exp.description}
                        </p>
                        <button onClick={() => { expState(exp) }}>
                            <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple border border-gray-200 rounded-lg hover:opacity-50 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200">
                                Learn more
                                <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </button>

                    </li>
                ))}
            </ol>
        </>
    )

}