import axios from "axios";
import { normalize } from "@/app/libs/normalize";

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

export function getHomeExperiences(take: number, page: number) {
   return axios.get(`http://localhost:3000/api/getHomeExperiences`, {
    params: {
      isDistinct: true,
      page: page,
      take: take
    },

  }).then((response) => response.data)
}

export function getSearchedExperiences(query: string): (take: number, page: number) => Promise<any>{
  return  (take: number, page: number) => {
    return axios.get(`http://localhost:3000/api/getSearchedExperiences`, {
      params: {
        title: query,
        page: page,
        take: take
      }
    }).then((response) => response.data)
    console.log("finished call to searchExperience")
    
  }
}

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
            isDistinct: true,
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