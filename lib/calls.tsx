import axios from "axios";
import { normalize } from "@/app/libs/normalize";

export async function getAllExperiences() {
    const allDistinctExperiences = await axios.get(`http://localhost:3000/api/getPosts`, {
        params: {
            isDistinct: true,
        }
    });

    return allDistinctExperiences.data;
}

export async function getFilteredExperinces(query: string) {
    const allExperiences = await axios.get(`http://localhost:3000/api/getPosts`, {
        params: {
            isDistinct: false,
        }
    });

    const highlightQuery = (text: string, query: string) => {
        const highlightedText = text.replace(new RegExp(normalize(query), 'gi'), (match) => `<mark>${match}</mark>`);
        return highlightedText;
    };

    // filter per query
    // const filterdExperiences = allExperiences.data.filter((exp: any) => (exp.description?.toLowerCase().includes(query) | exp.title?.toLowerCase().includes(query)));
    const filteredExperiences = allExperiences.data.filter((exp: any) => {
        const normalizedQuery = normalize(query);
        return exp.description?.toLowerCase().includes(normalizedQuery) || exp.title?.toLowerCase().includes(normalize(normalizedQuery));
    }).map((exp: any) => {
        if (normalize(exp.description).includes(normalize(query))) {
            exp.description = highlightQuery(exp.description, query);
        }
        if (normalize(exp.title).includes(normalize(query))) {
            exp.title = highlightQuery(exp.title, query);
        }
        return exp;
    });


    //get unique per userId
    return Object.values(
        filteredExperiences.reduce((acc: any, obj: any) => ({ ...acc, [obj.userId]: obj }), {})
    );

}

export async function getExperiencesFromUserId(userId: string) {
    const fetchedExperiencesPerUserId = await axios.get(`http://localhost:3000/api/getPositions`, {
        params: {
            userId: userId,
        },
    });
    return fetchedExperiencesPerUserId;

}

