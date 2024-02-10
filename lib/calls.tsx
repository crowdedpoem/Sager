import axios from "axios";

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
        const highlightedText = text.replace(new RegExp(query, 'gi'), (match) => `<mark>${match}</mark>`);
        return highlightedText;
    };

    // filter per query
    // const filterdExperiences = allExperiences.data.filter((exp: any) => (exp.description?.toLowerCase().includes(query) | exp.title?.toLowerCase().includes(query)));
    const filteredExperiences = allExperiences.data.filter((exp: any) => {
        const queryLower = query.toLowerCase();
        return exp.description?.toLowerCase().includes(queryLower) || exp.title?.toLowerCase().includes(queryLower);
    }).map((exp: any) => {
        if (exp.description?.toLowerCase().includes(query.toLowerCase())) {
            exp.description = highlightQuery(exp.description, query);
        }
        if (exp.title?.toLowerCase().includes(query.toLowerCase())) {
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

