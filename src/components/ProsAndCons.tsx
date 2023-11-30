"use client"


export default function Layout(props: { pros: any; cons: any; }) {
    let pros = props.pros;
    let cons = props.cons;
    console.log(pros)

    return (
        <>
            <main className="flex justify-center items-center">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-2 ">
                        <div className="border-r-2 border-purple justify-center items-center flex flex-col">
                            <h2 className="font-big-shoulders-display text-3xl pb-3">
                                PROS
                            </h2>
                            <div>
                                {pros?.map((pro: any) => (
                                    <li key="{pro}" className="text-[15px] list-disc">
                                        {pro.pro}
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className="bg-grey-500 justify-center items-center flex flex-col">
                            <h2 className="font-big-shoulders-display text-3xl pb-3">
                                CONS
                            </h2>
                            <div>
                                <li className="text-[15px] list-disc">
                                    This is test code.
                                </li>
                                <li className="text-[15px] list-disc">
                                    This is test code.
                                </li>
                                <li className="text-[15px] list-disc">
                                    This is test code.
                                </li>
                                <li className="text-[15px] list-disc">
                                    This is test code.
                                </li>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}