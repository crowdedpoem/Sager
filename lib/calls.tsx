import axios from "axios";

export async function getAllExperiences() {
    const fetchedExperiences = await axios.get("http://localhost:3000/api/getPosts").then((response) => response.data);

    return fetchedExperiences;
}

export async function getExperiencesFromUserId (userId: string) {
    const fetchedExperiencesPerUserId = await axios.get(`http://localhost:3000/api/getPositions`, {
        params: {
            userId: userId,
        },
    });
    return fetchedExperiencesPerUserId;

}

