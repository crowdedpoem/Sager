export default function DayInTheLife(props: { items: any }) {
    let events = props.items;

    return (
        <>
            <h1 className='font-big-shoulders-display text-2xl pb-3 flex text-gray-700 items-center justify-center pt-24'>Day in the Life</h1>


            <ol className="relative border-l border-purple ml-8 mt-8">
                {events?.map((exp: any, index: number) => (
                    <li className="mb-10 ml-4" key={index}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-purple "></div>
                        <p className="mb-4 text-base font-normal text-gray-700">
                            <details className="p-4 [&_svg]:open:-rotate-180" open>
                                <summary className="flex cursor-pointer list-none items-center gap-4">
                                    <div>
                                        <svg className="rotate-0 transform text-purple transition-all duration-300" fill="none" height="20" width="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                    <div>{exp.description}</div>
                                </summary>

                                <p className="pt-3 pl-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget varius quam. Nunc et fringilla erat. Suspendisse sagittis tellus et metus mattis iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>

                            </details>
                        </p>
                    </li>
                ))}
            </ol>
        </>
    )

}