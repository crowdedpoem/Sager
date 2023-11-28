import axios from "axios";
// import { useState, useEffect } from "react";
import SearchBar from '@/components/SearchBar'
import { Suspense } from 'react'
import Link from 'next/link';
import Loading from './loading'

import { getAllExperiences } from "../../../lib/calls";


export default async function Page() {

    // const [posts, setPosts] = useState([
    //     // {
    //     //     id: "",
    //     //     userId: "",
    //     //     Experiences: [
    //     //         {
    //     //             id: "",
    //     //             postId: "",
    //     //             startTime: new Date(),
    //     //             title: "",
    //     //             description: "",
    //     //             pros: {},
    //     //         },
    //     //     ],
    //     // },
    // ]);


    // useEffect(() => {

    //     // axios
    //     //     .get("/api/getPosts")
    //     //     .then((response) => {
    //     //         const fetchedPosts = response.data;
    //     //         console.log(fetchedPosts)

    //     //         // create a promise for each post to fetch its positions
    //     //         const positionPromises = fetchedPosts.map((post: any) => {
    //     //             return axios
    //     //                 .get(`/api/getPositions?postId=${post.id}`)
    //     //                 .then((response) => ({ postId: post.id, Experiences: response.data }))
    //     //                 .catch((error) => ({ postId: post.id, Experiences: [], error }));
    //     //         });

    //     //         console.log(positionPromises);

    //     //         // resolve  the promises
    //     //         Promise.all(positionPromises).then((results) => {
    //     //             // combine the posts with their respective positions (by matching post_id)
    //     //             const postsWithPositions = fetchedPosts.map((post: any) => {
    //     //                 const postPositions = results.find(
    //     //                     (result) => result.postId === post.id
    //     //                 );
    //     //                 return {
    //     //                     ...post,
    //     //                     Experiences: postPositions ? postPositions.Experiences : [],
    //     //                 };
    //     //             });

    //     //             // posts_with_positions = postsWithPositions;
    //     //             setPosts(postsWithPositions)
    //     //         });
    //     //     })
    //     //     .catch((error) => {
    //     //         console.error("Error fetching posts:", error);
    //     //     });

    //     axios
    //         .get("/api/getPosts")
    //         .then((response) => {
    //             const fetchedPosts = response.data;
    //             console.log(fetchedPosts)
    //         });

    // }, []);

    // const experiences = await getAllExperiences();

    return (
        <>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className=" flex flex-wrap mb-4">
                    <SearchBar />
                </div>
                {/* <Suspense fallback={<Loading />}>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {posts?.map((post: any) => (
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                                    <Link href={{ pathname: `/dashboard/post/${post.id}`}}>
                                        <img
                                            alt="Placeholder"
                                            className="block h-auto w-full"
                                            src="https://picsum.photos/600/400/?random"
                                        />
                                    </Link>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <Link className="no-underline hover:underline text-black" href={`/dashboard/post/${post.id}`}>
                                                {post.Experiences[post.Experiences.length - 1]?.title}
                                            </Link>
                                        </h1>
                                         <p className="text-black text-sm">{post.Experiences[post.Experiences.length - 1]?.duration}</p> 
                                    </header>

                                    <p className="flex items-center justify-between leading-tight p-2 md:p-4">{post.Experiences[post.Experiences.length - 1]?.description}</p>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <Link
                                            href={`/dashboard/post/${post.id}`}
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
                </Suspense> */}

            </div>
        </>

    );
}

// export async function getServerSideProps() {
//     // const [posts, setPosts] = useState([
//     //     {
//     //         id: "",
//     //         userId: "",
//     //         Experiences: [
//     //             {
//     //                 id: "",
//     //                 postId: "",
//     //                 startTime: new Date(),
//     //                 title: "",
//     //                 description: "",
//     //                 pros: {},
//     //             },
//     //         ],
//     //     },
//     // ]);

//     let posts_with_positions = null;

//     axios
//         .get("/api/getPosts")
//         .then((response) => {
//             const fetchedPosts = response.data;
//             console.log(fetchedPosts)

//             // create a promise for each post to fetch its positions
//             const positionPromises = fetchedPosts.map((post: any) => {
//                 return axios
//                     .get(`/api/getPositions?postId=${post.id}`)
//                     .then((response) => ({ postId: post.id, Experiences: response.data }))
//                     .catch((error) => ({ postId: post.id, Experiences: [], error }));
//             });

//             console.log(positionPromises);

//             // resolve  the promises
//             Promise.all(positionPromises).then((results) => {
//                 // combine the posts with their respective positions (by matching post_id)
//                 const postsWithPositions = fetchedPosts.map((post: any) => {
//                     const postPositions = results.find(
//                         (result) => result.postId === post.id
//                     );
//                     return {
//                         ...post,
//                         Experiences: postPositions ? postPositions.Experiences : [],
//                     };
//                 });

//                 posts_with_positions = postsWithPositions;
//             });
//         })
//         .catch((error) => {
//             console.error("Error fetching posts:", error);
//         });

//     return { props: { posts_with_positions } }
// }
