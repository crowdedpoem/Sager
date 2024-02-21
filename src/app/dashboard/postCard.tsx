import Link from "next/link";
import React, { forwardRef } from 'react';

interface Exp {
    userId: number;
    title: string;
    description: string;
    updatedAt: string;

}
interface PostCardProps {
    exp: Exp;
}

const PostCard = React.forwardRef<HTMLDivElement, PostCardProps>((props, ref) => {
    const exp = props.exp

    return (
        <div className=" md:w-1/2 lg:my-4 lg:w-1/4 rounded-lg mx-2 my-2" >
            <article className="flex max-w-xl flex-col items-start rounded-lg shadow-lg bg-purple">
                <Link href={{ pathname: `/dashboard/post/${exp.userId}` }} >
                    <div className={`h-1`}>

                    </div>
                </Link>
                <div ref={ref} className="bg-white w-full p-5 rounded-lg">
                    <div className="flex items-center gap-x-4 text-xs pt-5">

                        <time dateTime={exp.updatedAt} className="text-gray-500">
                            7-12-22
                        </time>
                        <a
                            href={`/dashboard/post/${exp.userId}`}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                            Medical
                        </a>
                    </div>
                    <div className="group relative justify-between h-32">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href={`/dashboard/post/${exp.userId}`}>
                                {/* <span className="absolute inset-0" /> */}
                                <span dangerouslySetInnerHTML={{ __html: exp.title }}></span>
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                            <span dangerouslySetInnerHTML={{ __html: exp.description }}></span>
                        </p>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="relative flex items-center gap-x-4">
                            <img className="h-10 w-10 rounded-full bg-gray-50" src={"https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="} alt="user photo" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <a href={`/dashboard/post/${exp.userId}`}>
                                        <span className="absolute inset-0" />
                                        {/* {exp.author.name} */}
                                        Sankalp
                                    </a>
                                </p>
                                <p className="text-gray-600">Doctor</p>
                            </div>
                        </div>
                    </div>

                </div>
            </article>
        </div>
    )
});

export default PostCard