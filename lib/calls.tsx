import axios from "axios";

export function removePost(userId: string){
    return axios.delete("http://localhost:3000/api/removePost"
    , {
        params: {
        userId: userId,
    }
    ,}
    ).then((response) => response.data)

}

export async function getAllExperiences() {
    const fetchedExperiences = await axios.get("http://localhost:3000/api/getPosts").then((response) => response.data);

    return fetchedExperiences;
}

export  function getExperiencesFromUserId (userId: string) {
    return axios.get(`http://localhost:3000/api/getPositions`, {
    params: {
      userId: userId,
    },
  }).then(response => response.data);

}

