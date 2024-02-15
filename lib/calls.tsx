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

export async function getHomeExperiences(take: number, page: number) {
   const value = await axios.get(`http://localhost:3000/api/getHomeExperiences`, {
    params: {
      isDistinct: true,
      page: page,
      take: take
    },

  })
  return value.data
}

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

export function getUsersWithPath(career1: string, career2: string){
  return  axios.get(`http://localhost:3000/api/getUsersWithPath`,
  {
    params: {
      career1: career1,
      career2: career2
    }
  }).then(response => response.data);
}