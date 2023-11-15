"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from '@/components/SearchBar'

export default function Page() {
    const [posts, setPosts] = useState([
        {
            id: "",
            userId: "",
            Experiences: [
                {
                    id: "",
                    postId: "",
                    startTime: new Date(),
                    title: "",
                    description: "",
                    duration: "",
                    pros: {},
                },
            ],
        },
    ]);

    useEffect(() => {
        // fetch the posts
        axios
            .get("/api/getPosts")
            .then((response) => {
                const fetchedPosts = response.data;

                // create a promise for each post to fetch its positions
                const positionPromises = fetchedPosts.map((post: any) => {
                    return axios
                        .get(`/api/getPositions?postId=${post.id}`)
                        .then((response) => ({ postId: post.id, Experiences: response.data }))
                        .catch((error) => ({ postId: post.id, Experiences: [], error }));
                });

                console.log(positionPromises);

                // resolve  the promises
                Promise.all(positionPromises).then((results) => {
                    // combine the posts with their respective positions (by matching post_id)
                    const postsWithPositions = fetchedPosts.map((post: any) => {
                        const postPositions = results.find(
                            (result) => result.postId === post.id
                        );
                        return {
                            ...post,
                            Experiences: postPositions ? postPositions.Experiences : [],
                        };
                    });

                    setPosts(postsWithPositions);
                });
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className=" flex flex-wrap mb-4">
                    <SearchBar />
                </div>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {posts.map((post) => (
                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                                <a href={`/dashboard/post/${post.id}`}>
                                    <img
                                        alt="Placeholder"
                                        className="block h-auto w-full"
                                        src="https://picsum.photos/600/400/?random"
                                    />
                                </a>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <a className="no-underline hover:underline text-black" href={`/dashboard/post/${post.id}`}>
                                            {/* {post.Experiences[post.Experiences.length - 1]?.title} */}
                                        </a>
                                    </h1>
                                    {/* <p className="text-black text-sm">{post.Experiences[post.Experiences.length - 1]?.duration}</p> */}
                                </header>

                                {/* <p className="flex items-center justify-between leading-tight p-2 md:p-4">{post.Experiences[post.Experiences.length - 1]?.description}</p> */}

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a
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
                                    </a>
                                </footer>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}
