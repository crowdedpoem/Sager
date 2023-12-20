import axios from "axios";

export async function getAllExperiences() {
    const allDistinctExperiences = await axios.get(`http://localhost:3000/api/getPosts`, {
        params : {
            isDistinct: true,
        }
    });

    return allDistinctExperiences.data;
}

export async function getFilteredExperinces(query: string) {
    const allExperiences = await axios.get(`http://localhost:3000/api/getPosts`, {
        params : {
            isDistinct: false,
        }
    });

    // filter per query
    const filterdExperiences = allExperiences.data.filter((exp: any) => exp.description?.includes(query));

    
    //get unique per userId
    return Object.values(
        filterdExperiences.reduce((acc: any, obj: any) => ({ ...acc, [obj.userId]: obj }), {})
    );

}

export async function getExperiencesFromUserId (userId: string) {
    const fetchedExperiencesPerUserId = await axios.get(`http://localhost:3000/api/getPositions`, {
        params: {
            userId: userId,
        },
    });
    return fetchedExperiencesPerUserId;

}

