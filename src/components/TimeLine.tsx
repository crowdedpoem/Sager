"use client"


export default function TimeLine(props: { items: any}) {
    let items = props.items;

    return (
        <>
            <ol className="relative border-l border-purple ml-8 mt-8">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-purple "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-700"> Position #1</h3>
                    <p className="mb-4 text-base font-normal text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Faucibus ornare suspendisse sed nisi. Cursus metus aliquam eleifend mi in. Enim eu turpis egestas pretium aenean pharetra magna.
                        Pellentesque id nibh tortor id aliquet lectus. Lectus urna duis convallis convallis tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor.
                        Tellus at urna condimentum mattis. Enim nulla aliquet porttitor lacus luctus. Morbi tristique senectus et netus et.
                    </p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple border border-gray-200 rounded-lg hover:opacity-50 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200">
                        Learn more
                        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-purple "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-700"> Position #2</h3>
                    <p className="mb-4 text-base font-normal text-gray-700">
                        Facilisis volutpat est velit egestas dui id ornare arcu odio. Adipiscing tristique risus nec feugiat in fermentum.
                        Sed viverra tellus in hac habitasse platea dictumst vestibulum. Accumsan sit amet nulla facilisi morbi tempus.
                        Ligula ullamcorper malesuada proin libero nunc consequat.
                    </p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple border border-gray-200 rounded-lg hover:opacity-50 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200">
                        Learn more
                        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-purple "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-700"> Position #3</h3>
                    <p className="mb-4 text-base font-normal text-gray-700">
                        Scelerisque purus semper eget duis at tellus. Quis eleifend quam adipiscing vitae proin sagittis. Dignissim sodales ut eu sem integer vitae.
                        Eget mi proin sed libero enim sed faucibus turpis in. Morbi quis commodo odio aenean sed. Mi in nulla posuere sollicitudin.
                    </p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple border border-gray-200 rounded-lg hover:opacity-50 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200">
                        Learn more
                        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-purple "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-700"> Position #3</h3>
                    <p className="mb-4 text-base font-normal text-gray-700">
                        Scelerisque purus semper eget duis at tellus. Quis eleifend quam adipiscing vitae proin sagittis. Dignissim sodales ut eu sem integer vitae.
                        Eget mi proin sed libero enim sed faucibus turpis in. Morbi quis commodo odio aenean sed. Mi in nulla posuere sollicitudin.
                    </p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple border border-gray-200 rounded-lg hover:opacity-50 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200">

                        Learn more
                        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-purple "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-700"> Position #3</h3>
                    <p className="mb-4 text-base font-normal text-gray-700">
                        Scelerisque purus semper eget duis at tellus. Quis eleifend quam adipiscing vitae proin sagittis. Dignissim sodales ut eu sem integer vitae.
                        Eget mi proin sed libero enim sed faucibus turpis in. Morbi quis commodo odio aenean sed. Mi in nulla posuere sollicitudin.
                    </p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple border border-gray-200 rounded-lg hover:opacity-50 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200">

                        Learn more
                        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-purple "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-700"> Position #3</h3>
                    <p className="mb-4 text-base font-normal text-gray-700">
                        Scelerisque purus semper eget duis at tellus. Quis eleifend quam adipiscing vitae proin sagittis. Dignissim sodales ut eu sem integer vitae.
                        Eget mi proin sed libero enim sed faucibus turpis in. Morbi quis commodo odio aenean sed. Mi in nulla posuere sollicitudin.
                    </p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple border border-gray-200 rounded-lg hover:opacity-50 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200">

                        Learn more
                        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </li>
            </ol>
        </>
    )

}