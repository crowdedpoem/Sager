import axios from "axios";

export async function getAllExperiences() {
    const fetchedExperiences = await axios.get("http://localhost:3000/api/getPosts").then((response) => response.data);

    return fetchedExperiences;

    // // create a promise for each post to fetch its positions
    // const positionPromises = fetchedPosts.map(async (post: any) => {
    //     try {
    //         const response = await axios.get(`http://localhost:3000/api/getPositions?postId=${post.id}`);
    //         return ({ postId: post.id, Experiences: response.data });
    //     } catch (error) {
    //         return ({ postId: post.id, Experiences: [], error });
    //     }
    // });

    // // resolve the promises
    // const postsWithPositions = await Promise.all(positionPromises);

    // // combine the posts with their respective positions (by matching post_id)
    // const postsWithPositionsCombined = postsWithPositions.map((postPositions) => {
    //     const post = fetchedPosts.find((fetchedPost: { id: any; }) => fetchedPost.id === postPositions.postId);
    //     return {
    //         ...post,
    //         Experiences: postPositions.Experiences,
    //     };
    // });

    // return postsWithPositionsCombined; // Return postsWithPositionsCombined
}

export async function getExperiencesFromPostId (postId: string) {

}

