import axios from "axios";

export function getIsSavedExperience(postId: string){
  return axios.get("http://localhost:3000/api/isSave",
    {
      params: {
        postId: postId
      }
    }).then((response) => response.data)
}

export function getSave(){
  return axios.get("http://localhost:3000/api/getSave").then((response) => response.data)
}

export function changeSave(shouldSave: boolean, postId: string){
  return axios.get("http://localhost:3000/api/changeSave",
    {
      params: {
        postId: postId,
        shouldSave: shouldSave
      }
    }).then((response) => response.data)
}

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

export function getExperiencesFromTitle(title: string){
    return axios.get(`http://localhost:3000/api/getExperiencesForTitle`, {
      params:{
        title: title
      }
    }).then(response => response.data);
}
